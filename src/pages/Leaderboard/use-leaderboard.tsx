import {useFilteredUsers} from "@/hooks/use-filtered-users";
import {useResource} from "@/hooks/use-resource";
import {IUser} from "@/interfaces";
import {getLeaderboard, lb_data} from "@/packages/halo-api/play";
import {EVENT} from "@/util/constants";
import {useEffect, useMemo} from "@hydrophobefireman/ui-lib";

const tmplUser: any = {
  user: "--",
  points: 0,
  level: 0,
  rank: 0,
};
const default_ = {
  users: Array.from({length: 10}).map(() => tmplUser) as IUser[],
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
  const _users = lb_data.data;
  const unfilteredUsers = useMemo(
    () => (_users ? _users.map(addRank) : default_.users),
    [_users]
  );
  const users = useFilteredUsers(unfilteredUsers, search);

  return {users, error: null, clearError: console.log};
}
