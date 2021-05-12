import { landingContentWrap, landingHeading, landingLogo } from "./hero.style";

import { HaloIcon } from "@/components/Icons/Halo";
import { IS_INTRA } from "@/util/constants";

export function Hero() {
  return (
    <>
      <HaloIcon className={landingLogo} height="75vh" />
      <div class={landingContentWrap}>
        <h1 class={landingHeading}>
          {IS_INTRA
            ? "Halocrypt Intra is over. Thanks for playing"
            : "The cryptic hunt is back, bigger, better and ztccugpf"}
        </h1>
      </div>
    </>
  );
}
