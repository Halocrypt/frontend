import { get, set } from "@hydrophobefireman/flask-jwt-jskit";
import { useRef, useState } from "@hydrophobefireman/ui-lib";

import { Snackbar } from "../Snackbar/Snackbar";
import { useInterval } from "@/hooks/use-interval";

const key = "halo.web.version";
function getVersion(): Promise<number> {
  return get(key);
}
function setVersion(val: any) {
  return set(key, val);
}
export function useLatestVersion(cancelled: boolean) {
  const [isNewVersionAvailable, setNewVersionAvailable] = useState(false);
  const currentVersion = useRef(null);
  useInterval(
    async () => {
      if (document.visibilityState === "hidden") return;
      const version = await (await fetch("/__version__.json")).json();
      const { ts } = version;
      if (currentVersion.current == null) {
        const prevVersion = await getVersion();
        currentVersion.current = Math.max(prevVersion, ts);
        if (prevVersion < ts) setVersion(ts);
        return;
      }
      if (ts > currentVersion.current) {
        await setVersion(ts);
        setNewVersionAvailable(true);
      }
    },
    cancelled ? null : 5000
  );
  return isNewVersionAvailable;
}

export function UpdateNudgeSnackbar() {
  const [cancelled, setCancelled] = useState(false);
  const isNewVersionAvailable = useLatestVersion(cancelled);
  return (
    <Snackbar
      message={
        !cancelled &&
        isNewVersionAvailable &&
        "A new version of this website is available."
      }
      buttonText="Reload"
      onButtonClick={() => location.reload()}
      onClose={() => setCancelled(true)}
    />
  );
}
