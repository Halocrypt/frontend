import { A, useState } from "@hydrophobefireman/ui-lib";
import { get, set } from "@hydrophobefireman/flask-jwt-jskit";

import { EVENT } from "@/util/constants";
import { INotification } from "@/interfaces";
import { getNotifications } from "@/packages/halo-api/admin";
import { useInterval } from "@/hooks/use-interval";
import { useMount } from "@/hooks/use-mount";
import { useResource } from "@/hooks/use-resource";

const key = "halo.last_notification_ts";
async function getLastTs() {
  return ((await get(key)) as number) || 0;
}
export function markNotifAsSeen(n: INotification) {
  if (n) {
    set(key, n.ts);
  }
}
export function useNotifCount() {
  const {
    resp: notifs,
    fetchResource: fetchNotifs,
  } = useResource(getNotifications, [EVENT]);
  const [lastTs, setLastTs] = useState(null);

  function markRead() {
    const latest = getLatestNotif(notifs);
    markNotifAsSeen(latest);
    if (latest) {
      setLastTs(latest.ts);
    }
  }

  useMount(async () => {
    const ts = await getLastTs();
    setLastTs(ts);
  });
  useInterval(() => {
    if (document.visibilityState === "visible") {
      fetchNotifs(true);
    } else {
      console.log("hidden");
    }
  }, 10000);
  if (!notifs) return { notifCount: 0, markRead };
  const notifCount =
    lastTs != null ? notifs.filter((x) => x.ts > lastTs).length : 0;

  return { notifCount, markRead };
}

export function getLatestNotif(notifs: INotification[]) {
  return notifs && notifs.sort((a, b) => b.ts - a.ts)[0];
}
