import { leaderboardEntry, leaderboardEntryEven } from "./Leaderboard.style";

import { A } from "@hydrophobefireman/ui-lib";
import { IUser } from "@/interfaces";
import { IconRenderer } from "./IconRenderer";
import { tALeft } from "@/style";

export function UserRenderer({
  user,
  i,
  currentUser,
}: {
  user: IUser;
  i: number;
  currentUser: IUser;
}) {
  return (
    <tr
      data-rank={(user as any).rank}
      data-index={i}
      class={i % 2 ? leaderboardEntry : leaderboardEntryEven}
    >
      <td>
        <IconRenderer user={user} />
      </td>
      <td class={tALeft}>
        <A href={`/u/${user.user}`}>
          {user.user}{" "}
          {currentUser && currentUser.user == user.user && "( You )"}
        </A>
      </td>
      <td>{user.level}</td>
      <td>{user.points}</td>
    </tr>
  );
}
