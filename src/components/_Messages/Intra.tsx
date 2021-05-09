import { center, centerFlex, glassLink } from "@/style";
import { landingHeading, landingLogo } from "@/pages/Landing/Hero/hero.style";

import { HaloIcon } from "../Icons/Halo";
import { css } from "catom";
import { useViewportSize } from "@/hooks/use-viewport-size";

export function Intra() {
  const [height] = useViewportSize();
  return (
    <div class={center}>
      <HaloIcon className={landingLogo} height={height * 0.75} />
      <div
        class={[
          centerFlex,
          css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
          }),
        ]}
      >
        <div>
          <h1 class={landingHeading}>
            Halocrypt Intra is over.. See you in the main event
          </h1>
          <a class={glassLink} href="https://halocrypt.com">
            Main Event Website
          </a>
        </div>
      </div>
    </div>
  );
}
