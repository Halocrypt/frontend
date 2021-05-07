import { get, set } from "@hydrophobefireman/flask-jwt-jskit";
import { useEffect, useRef, useState } from "@hydrophobefireman/ui-lib";

import { EVENT } from "@/util/constants";
import { INotification } from "@/interfaces";
import { getNotifications } from "@/packages/halo-api/play";
import { useInterval } from "@/hooks/use-interval";
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
  const [shouldShow, count, closeNotif] = useShouldShowNotif();

  return {
    notifCount: shouldShow ? count : 0,
    markRead: closeNotif,
  };
}

export function getLatestNotif(notifs: INotification[]) {
  return notifs && notifs.sort((a, b) => b.ts - a.ts)[0];
}

function useShouldShowNotif() {
  const {
    resp: notifs,
    fetchResource: fetchNotifs,
  } = useResource(getNotifications, [EVENT]);

  const timeout = useRef<any>();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  function markRead() {
    const latest = getLatestNotif(notifs);
    if (latest) {
      markNotifAsSeen(latest);
    }
  }
  function close() {
    setShow(false);
    markRead();
  }
  useInterval(() => {
    if (document.visibilityState === "visible") {
      fetchNotifs(true);
    } else {
      console.log("hidden");
    }
  }, 5000);
  useEffect(async () => {
    const latest = await getLastTs();
    const curr = getLatestNotif(notifs);
    if (!curr) return;
    if (latest >= curr.ts) return;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(close, 5000);
    setShow(true);
    setCount(notifs.filter((x) => x.ts > latest).length);
  }, [notifs]);
  return [show, count, close] as const;
}
