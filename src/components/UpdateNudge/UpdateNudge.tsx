import { useRef, useState } from "@hydrophobefireman/ui-lib";

import { Snackbar } from "../Snackbar/Snackbar";
import { useInterval } from "@/hooks/use-interval";

export function useLatestVersion(cancelled: boolean) {
  const [isNewVersionAvailable, setNewVersionAvailable] = useState(false);
  const currentVersion = useRef(null);
  useInterval(
    async () => {
      if (document.visibilityState === "hidden") return;
      const version = await (
        await fetch("/__version__.json?_vercel_no_cache=1")
      ).json();
      const { ts } = version;
      if (currentVersion.current == null) {
        currentVersion.current = ts;
        return;
      }
      if (ts > currentVersion.current) {
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
