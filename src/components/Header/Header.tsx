import { header, headerNW, homeLink } from "./Header.style";

import { A } from "@hydrophobefireman/ui-lib";
import { IS_INTRA } from "@/util/constants";
import { Nav } from "./Nav";
import { SocialLinks } from "./SocialLinks";
import { useLocation } from "@/hooks/use-location";
import { useViewportSize } from "@/hooks/use-viewport-size";

export function Header() {
  const { path } = useLocation();
  const [, width] = useViewportSize();
  const isWideScreen = IS_INTRA ? width > 860 : width > 800;
  const isMobile = width < 650;
  if (isMobile) return <MobileHeader />;
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
          <A href="/" class={homeLink}>
            Halocrypt{IS_INTRA && "(intra)"}
          </A>
        )}
        {isIndex && <SocialLinks />}
      </div>
      <Nav path={path} />
    </header>
  );
}

function MobileHeader() {
  return null;
}
