import { leaderboardEntry, leaderboardEntryEven } from "./Leaderboard.style";

import { A } from "@hydrophobefireman/ui-lib";
import { IUser } from "@/interfaces";
import { IconRenderer } from "./IconRenderer";
import { tALeft } from "@/style";

export function UserRenderer({ user, i }: { user: IUser; i: number }) {
  return (
    <div
      data-rank={(user as any).rank}
      data-index={i}
      class={i % 2 ? leaderboardEntry : leaderboardEntryEven}
    >
      <div>
        <IconRenderer user={user} />
      </div>
      <div class={tALeft}>
        <A href={`/u/${user.user}`}>{user.user}</A>
      </div>
      <div>{user.level}</div>
      <div>{user.points}</div>
    </div>
  );
}
