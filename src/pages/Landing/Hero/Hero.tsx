import { landingContentWrap, landingHeading, landingLogo } from "./hero.style";
import { IS_INTRA } from "@/util/constants";

import { HaloIcon } from "../../../components/Icons/Halo";
import { useViewportSize } from "@/hooks/use-viewport-size";

export function Hero() {
  const [height] = useViewportSize();
  return (
    <>
      <HaloIcon className={landingLogo} height={height * 0.75} />
      <div class={landingContentWrap}>
        <h1 class={landingHeading}>
          {IS_INTRA
            ? "Halocrypt intra is over..thanks for playing. See you in the main event"
            : "The cryptic hunt is back, bigger, better and ztccugpf"}
        </h1>
      </div>
    </>
  );
}
