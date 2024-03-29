import {IUser} from "@/interfaces";
import {raf} from "@/util/raf";
import {clean, contains} from "@/util/search";
import {useEffect, useRef, useState} from "@hydrophobefireman/ui-lib";

export function useFilteredUsers(users: IUser[], query: string) {
  const [filtered, setFiltered] = useState(users);
  const timer = useRef(null);
  function search() {
    console.log("search");
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
  }
  useEffect(() => {
    raf(() => {
      clearTimeout(timer.current);
      timer.current = setTimeout(search, 50);
    });
  }, [users, query]);
  return filtered;
}
