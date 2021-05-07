import { Snackbar } from "@/components/Snackbar/Snackbar";
import { loadURL } from "@hydrophobefireman/ui-lib";
import { pluralise } from "@/util/pluralise";
import { useNotifCount } from "@/hooks/use-notifications";

export function NotificationCount() {
  const { notifCount, markRead } = useNotifCount();
  return (
    <Snackbar
      message={
        notifCount === 0
          ? null
          : `You have ${notifCount} new ${pluralise(
              "notification",
              notifCount
            )}`
      }
      onClose={markRead}
      onButtonClick={() => loadURL("/play/notifications")}
      buttonText="Open"
    />
  );
}
