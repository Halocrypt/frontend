import { landingContentWrap, landingHeading, landingLogo } from "./hero.style";

import { HaloIcon } from "../../../components/Icons/Halo";
import { useViewportSize } from "@/hooks/use-viewport-size";

export function Hero() {
  const [height] = useViewportSize();
  return (
    <>
      <HaloIcon className={landingLogo} height={height * 0.75} />
      <div class={landingContentWrap}>
        <h1 class={landingHeading}>
          The cryptic hunt is back, bigger, better and zttcugpf
        </h1>
      </div>
    </>
  );
}
