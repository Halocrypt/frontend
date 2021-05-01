import {
  heading,
  headingContainer,
  leaderboardSearchContainer,
  paginateButton,
  paginateButtonInactive,
  prevIcon,
} from "./Leaderboard.style";

import { AnimatedInput } from "@/components/AnimatedInput";
import { ButtonRenderObj } from "@/components/Paginate/Paginate";
import { PaginateIcon } from "@/components/Icons/Paginate";
import { SearchIcon } from "@/components/Icons/Search";
import { css } from "catom";
import { searchWrapper } from "@/components/Header/MobileHeader.style";
import { tARight } from "@/style";

interface ButtonProps {
  prev(): void;
  next(): void;
  scrollIntoView(): void;
  search: string;
  setSearch(s: string): void;
  buttonOptions: ButtonRenderObj;
  userLength: number;
}
export function LeaderboardButtons({
  prev,
  scrollIntoView,
  buttonOptions,
  next,
  search,
  setSearch,
  userLength,
}: ButtonProps) {
  const { hasMore, isFirst, hasPrev } = buttonOptions;
  const buttons = (
    <div class={tARight}>
      <button
        onClick={() => {
          prev();
          scrollIntoView();
        }}
        class={hasPrev ? paginateButton : paginateButtonInactive}
      >
        <PaginateIcon size="1rem" className={prevIcon} />
      </button>
      <button
        onClick={() => {
          next();
          scrollIntoView();
        }}
        class={hasMore ? paginateButton : paginateButtonInactive}
      >
        <PaginateIcon size="1rem" />
      </button>
    </div>
  );
  if (isFirst)
    return (
      <section class={leaderboardSearchContainer}>
        <div class={css({ flex: 1 })}>
          <div class={headingContainer}>
            <h1 class={heading}>Leaderboard</h1>
            <span class={css({ fontSize: "0.7rem" })}>
              (Click on the username to view the profile)
            </span>
          </div>
          <AnimatedInput
            wrapperClass={searchWrapper}
            value={search}
            onInput={setSearch}
            labelText="Search"
            icon={<SearchIcon size="1.5rem" />}
          />
          {userLength > 0 && <div>{userLength} Results</div>}
        </div>
        {buttons}
      </section>
    );
  return buttons;
}
