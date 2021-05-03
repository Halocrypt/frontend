import { useEffect, useMemo } from "@hydrophobefireman/ui-lib";

import { EVENT } from "@/util/constants";
import { IUser } from "@/interfaces";
import { getLeaderboard } from "@/packages/halo-api/play";
import { useFilteredUsers } from "@/hooks/use-filtered-users";
import { useResource } from "@/hooks/use-resource";

const tmplUser: any = {
  user: "--",
  points: 0,
  level: 0,
  rank: 0,
};
const default_ = {
  users: Array.from({ length: 10 }).map(() => tmplUser) as IUser[],
};
function addRank(x: IUser, i: number) {
  (x as any).rank = i + 1;
  return x;
}
function useLoadingUsers(curr: IUser[]) {
  useEffect(() => {
    default_.users = curr;
  }, [curr]);
}
export function useLeaderboard(search: string) {
  const { resp: _users, error, clearError } = useResource(getLeaderboard, [
    EVENT,
  ]);
  const unfilteredUsers = useMemo(
    () => (_users ? _users.map(addRank) : default_.users),
    [_users]
  );
  useLoadingUsers(unfilteredUsers);
  const users = useFilteredUsers(unfilteredUsers, search);

  return { users, error, clearError };
}
