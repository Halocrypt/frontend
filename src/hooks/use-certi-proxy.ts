import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { decrypt } from "@/packages/crypto/decrypt";
import { useAuthGuard } from "./use-auth-guard";
import { useResource } from "./use-resource";
import { userDetails } from "@/packages/halo-api/user";

function getProxyURL(file: string) {
  return `https://api.halocrypt.com/proxy/cert/${file}`;
}
export function useCertiProxy() {
  const user = useAuthGuard("/certificate");
  const { resp } = useResource(userDetails, [user.user]);
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState<string>(null);
  useEffect(async () => {
    if (!resp || !resp.user_data || !resp.user_data._secure_) return;
    const { user_data } = resp;
    const { certificate_key } = user_data._secure_;
    const { user } = user_data;
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
  }, [resp]);
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
