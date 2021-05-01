import { A, useEffect, useState } from "@hydrophobefireman/ui-lib";
import { clean, contains } from "@/packages/validator/util";
import { dateBox, notifBox, notificationSection } from "./Notifications.style";
import { getLatestNotif, markNotifAsSeen } from "@/hooks/use-notifications";

import { AnimatedInput } from "@/components/AnimatedInput";
import { EVENT } from "@/util/constants";
import { INotification } from "@/interfaces";
import { RichContent } from "@/components/RichContent/RichContent";
import { SearchIcon } from "@/components/Icons/Search";
import { center } from "@/style";
import { css } from "catom";
import { getNotifications } from "@/packages/halo-api/admin";
import { inputMargin } from "@/Form.style";
import { raf } from "@/util/raf";
import { useResource } from "@/hooks/use-resource";

function useFilteredNotifs(notifs: INotification[], query: string) {
  const [filtered, setFiltered] = useState(notifs);
  useEffect(() => {
    raf(() => {
      if (!notifs) return;
      if (!clean(query)) return setFiltered(notifs);
      setFiltered(
        notifs.slice().filter((x) => {
          return !!(
            contains(x.content.content, query) ||
            contains(x.issuedBy, query) ||
            contains(x.title, query)
          );
        })
      );
    });
  }, [notifs, query]);
  return filtered;
}

export default function Notifications() {
  const { resp: unfilteredNotifs } = useResource(getNotifications, [EVENT]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    markNotifAsSeen(getLatestNotif(unfilteredNotifs));
  }, [unfilteredNotifs]);
  if (!unfilteredNotifs) return;
  const notifs = useFilteredNotifs(unfilteredNotifs, search);
  return (
    <section class={notificationSection}>
      <h1 class={css({ fontSize: "2rem" })}>Notifications ({notifs.length})</h1>
      <AnimatedInput
        wrapperClass={inputMargin}
        value={search}
        onInput={setSearch}
        labelText="Search"
        icon={<SearchIcon size="1.2rem" />}
      />
      <div>{notifs && notifs.map((x) => <Notif data={x} />)}</div>
    </section>
  );
}

function Notif({ data }: { data: INotification }) {
  const date = new Date(data.ts);

  return (
    <div class={notifBox}>
      <div class={dateBox}>
        <span>
          {date.getHours()}:{date.getMinutes()}
        </span>
        <span class={css({ color: "var(--fg)" })}>{date.toDateString()}</span>
      </div>
      <div class={css({ fontWeight: "bold", fontSize: "1.3rem" })}>
        {data.title}
      </div>
      <div class={center}>
        <RichContent content={data.content} />
      </div>
      <A
        class={css({ color: "var(--fg)", fontWeight: "bold" })}
        href={`/u/${data.issuedBy}`}
      >
        @{data.issuedBy}
      </A>
    </div>
  );
}
