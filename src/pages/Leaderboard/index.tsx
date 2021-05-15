import { ButtonRenderObj, Paginate } from "@/components/Paginate/Paginate";
import { listWrapperClass, tableContainer } from "./Leaderboard.style";
import { useRef, useState } from "@hydrophobefireman/ui-lib";

import { LeaderboardButtons } from "./LeaderboardButtons";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { TableHeadings } from "./TableHeadings";
import { UserRenderer } from "./UserRenderer";
import { useAuthState } from "@/bridge";
import { useLeaderboard } from "./use-leaderboard";

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const { users, error, clearError } = useLeaderboard(search);
  const ref = useRef<HTMLDivElement>();
  const [currentUser] = useAuthState();
  const buttonRender = (
    prev: () => void,
    next: () => void,
    obj: ButtonRenderObj
  ) => (
    <LeaderboardButtons
      userLength={users && users.length}
      search={search}
      setSearch={setSearch}
      prev={prev}
      next={next}
      buttonOptions={obj}
    />
  );
  return (
    <div>
      <Snackbar message={error} isError onClose={clearError} />
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
              <UserRenderer user={user} i={i} currentUser={currentUser} />
            )}
          />
        ) : (
          "Loading.."
        )}
      </div>
    </div>
  );
}
