import { leaderboardHeading } from "./Leaderboard.style";
import { tALeft } from "@/style";

export function TableHeadings() {
  return (
    <div class={leaderboardHeading}>
      <div>Rank</div>
      <div class={tALeft}>Username</div>
      <div>Level</div>
      <div>Points</div>
    </div>
  );
}
