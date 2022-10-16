import {useAuthState} from "@/bridge";
import {ButtonRenderObj, Paginate} from "@/components/Paginate/Paginate";
import {useCallback, useRef, useState} from "@hydrophobefireman/ui-lib";

import {listWrapperClass, tableContainer} from "./Leaderboard.style";
import {LeaderboardButtons} from "./LeaderboardButtons";
import {TableHeadings} from "./TableHeadings";
import {UserRenderer} from "./UserRenderer";
import {useLeaderboard} from "./use-leaderboard";

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const {users} = useLeaderboard(search);
  const ref = useRef<HTMLDivElement>();

  const buttonRender = useCallback(
    (prev: () => void, next: () => void, obj: ButtonRenderObj) => (
      <LeaderboardButtons
        userLength={users && users.length}
        search={search}
        setSearch={setSearch}
        prev={prev}
        next={next}
        buttonOptions={obj}
      />
    ),
    [users, search]
  );
  return (
    <div>
      <div class={tableContainer} ref={ref}>
        {users ? (
          <Paginate
            buttonRender={buttonRender}
            listWrapperClass={listWrapperClass}
            beforeList={<TableHeadings />}
            dualButtons={true}
            atOnce={100}
            items={users}
            elementName="table"
            render={(user, i) => (
              <UserRenderer user={user} i={i} currentUser={null} />
            )}
          />
        ) : (
          "Loading.."
        )}
      </div>
    </div>
  );
}
