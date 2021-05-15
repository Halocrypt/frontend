import { leaderboardHeading } from "./Leaderboard.style";
import { tALeft } from "@/style";

export function TableHeadings() {
  return (
    <th class={leaderboardHeading}>
      <td>Rank</td>
      <td class={tALeft}>Username</td>
      <td>Level</td>
      <td>Points</td>
    </th>
  );
}
