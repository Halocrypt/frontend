import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { decrypt } from "@/packages/crypto/decrypt";
import { useAuthState } from "@/bridge";

function getProxyURL(file: string) {
  return `https://api.halocrypt.com/cert/proxy/${file}`;
}
export function useCertiProxy() {
  const [userData] = useAuthState();

  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState<string>(null);
  useEffect(async () => {
    if (!userData) return;
    const { certificate_key } = userData._secure_;
    const { user } = userData;
    try {
      const [jsonData, encData] = await Promise.all([
        fetch(getProxyURL(`${user}.json`)),
        fetch(getProxyURL(`${user}.halo`)),
      ]);
      const meta = await jsonData.json();
      const encBuf = await encData.arrayBuffer();
      const ret = await decrypt(encBuf, meta, certificate_key);
      setImageURL(generateBlob(ret));
    } catch (e) {
      setError(
        `Could not find a valid certificate for '${user}', DM Mods if you think this was a mistake`
      );
    }
  }, [userData]);
  useEffect(() => {
    if (!imageURL) return;
    return () => {
      console.log("Invalidating:", imageURL);
      URL.revokeObjectURL(imageURL);
    };
  }, [imageURL]);
  return { imageURL, error };
}

function generateBlob(what: ArrayBuffer) {
  const blob = new Blob([what], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  return url;
}
