import { mainAction, navLink } from "./Header.style";

import { A } from "@hydrophobefireman/ui-lib";
import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { ChevronIcon } from "../Icons/Chevron";
import { css } from "catom";
import { flex } from "@/style";
import { useIsLoggedIn } from "@/bridge";

export function Nav({ path }: { path: string }) {
  const isLoggedIn = useIsLoggedIn();
  return (
    <nav class={flex}>
      <NavLink href="/u/me" path={path}>
        Profile
      </NavLink>
      <NavLink href="/rules" path={path}>
        Rules
      </NavLink>
      <NavLink href="/leaderboard" path={path}>
        Leaderboard
      </NavLink>
      <NavLink
        href={isLoggedIn ? "/play" : "/login"}
        path={path}
        className={mainAction}
        hideonActive
      >
        <span class={css({ marginRight: "5px" })}>
          {isLoggedIn ? "Play" : "Login"}
        </span>
        <ChevronIcon size="10px" />
      </NavLink>
    </nav>
  );
}

interface NavLinkProps {
  path: string;
  href: string;
  children?: any;
  className?: string;
  hideonActive?: boolean;
}
export function NavLink({
  path,
  href,
  children,
  className,
  hideonActive,
}: NavLinkProps) {
  const active = path === href;
  if (active && hideonActive) return;
  return (
    <div class={css({ display: "flex", flexDirection: "column" })}>
      <A href={href} class={className || navLink}>
        {children}
      </A>
      {active && (
        <AnimateLayout
          time={200}
          element="div"
          animId="current-nav"
          class={css({
            height: "2px",
            width: "80%",
            margin: "auto",
            border: "1px solid var(--fg)",
            background: "var(--fg)",
            borderRadius: "10px",
          })}
        />
      )}
    </div>
  );
}
