import { center, flex } from "@/style";
import {
  mainAction,
  navLink,
  navLinkMobile,
  navLinkMobileActive,
  notifLink,
} from "./Header.style";

import { A } from "@hydrophobefireman/ui-lib";
import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { ChevronIcon } from "../Icons/Chevron";
import { SocialLinks } from "./SocialLinks";
import { css } from "catom";
import { mobileNav } from "./MobileHeader.style";
import { useAuthState } from "@/bridge";

export function Nav({ path }: { path: string }) {
  const [user] = useAuthState();
  const isLoggedIn = !!(user && user.user);
  return (
    <nav class={flex}>
      <NavLink href={isLoggedIn ? `/u/${user.user}` : "/u/me"} path={path}>
        Profile
      </NavLink>
      {path == "/play" ? (
        <NavLink href="/play/notifications" path={path} className={notifLink}>
          Notifications
        </NavLink>
      ) : (
        <NavLink href="/rules" path={path}>
          Rules
        </NavLink>
      )}
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
          onlyAnimate={{ translateX: true, scaleX: true }}
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

export function MobileNav({ path }: { path: string }) {
  const [user] = useAuthState();
  const isLoggedIn = !!(user && user.user);
  return (
    <nav class={mobileNav}>
      <MobileLink href="/" path={path}>
        Home
      </MobileLink>
      {path === "/play" ? (
        <MobileLink href="/play/notifications" path={path}>
          Notifications
        </MobileLink>
      ) : (
        <MobileLink href="/rules" path={path}>
          Rules
        </MobileLink>
      )}
      <MobileLink href="/leaderboard" path={path}>
        Leaderboard
      </MobileLink>
      <MobileLink href={isLoggedIn ? `/u/${user.user}` : "/u/me"} path={path}>
        Profile
      </MobileLink>
      <MobileLink href={isLoggedIn ? "/play" : "/login"} path={path}>
        {isLoggedIn ? "Play" : "Login"}
      </MobileLink>
      <SocialLinks className={center} />
    </nav>
  );
}

function MobileLink({ href, children, path }: NavLinkProps) {
  const active = href === path;
  return (
    <A href={href} class={active ? navLinkMobileActive : navLinkMobile}>
      {children}
    </A>
  );
}
