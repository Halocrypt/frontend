import { A, useState } from "@hydrophobefireman/ui-lib";
import { MobileNav, Nav } from "./Nav";
import { header, headerNW, homeLink } from "./Header.style";
import { hoverable, mask } from "@/style";

import { HaloIcon } from "../Icons/Halo";
import { HeaderIcon } from "./HeaderIcon";
import { IS_INTRA } from "@/util/constants";
import { SocialLinks } from "./SocialLinks";
import { mobileHeader } from "./MobileHeader.style";
import { useLocation } from "@/hooks/use-location";
import { useViewportSize } from "@/hooks/use-viewport-size";

export function Header() {
  const { path } = useLocation();
  const [, width] = useViewportSize();
  const isWideScreen = IS_INTRA ? width > 860 : width > 800;
  const isMobile = width < 770;
  if (isMobile) return <MobileHeader path={path} />;
  return <DesktopHeader path={path} isWideScreen={isWideScreen} />;
}

function DesktopHeader({
  path,
  isWideScreen,
}: {
  path: string;
  isWideScreen: boolean;
}) {
  const isIndex = path === "/";
  return (
    <header class={header}>
      <div class={headerNW}>
        {(isWideScreen || !isIndex) && (
          <A
            href="/"
            class={homeLink}
            style={IS_INTRA ? { fontSize: "1.2rem" } : null}
          >
            Halocrypt{IS_INTRA && " (intra)"}
          </A>
        )}
        {isIndex && <SocialLinks />}
      </div>
      <Nav path={path} />
    </header>
  );
}

function MobileHeader({ path }: { path: string }) {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  const isLanding = path === "/";
  return (
    <>
      <header class={mobileHeader}>
        <A
          href="/"
          class={hoverable}
          aria-label="Homepage"
          title="Homepage"
          style={isLanding && { opacity: "0", pointerEvents: "none" }}
        >
          <HaloIcon height={50} />
        </A>

        <HeaderIcon active={active} onClick={toggle} />
      </header>
      {active && (
        <>
          <MobileNav path={path} close={toggle} />
          <div
            class={mask}
            onClick={toggle}
            style={{ background: "transparent" }}
          ></div>
        </>
      )}
    </>
  );
}
