import { clean, contains } from "@/util/search";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { IUser } from "@/interfaces";
import { raf } from "@/util/raf";

export function useFilteredUsers(users: IUser[], query: string) {
  const [filtered, setFiltered] = useState(users);
  useEffect(() => {
    raf(() => {
      if (!users) return;
      if (!clean(query)) return setFiltered(users);
      setFiltered(
        users.filter((x) => {
          return !!(
            contains(x.name, query) ||
            contains(x.user, query) ||
            (x._secure_ && contains(x._secure_.email, query)) ||
            contains(x.points, query) ||
            contains(x.level, query)
          );
        })
      );
    });
  }, [users, query]);
  return filtered;
}
