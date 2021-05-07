import { A, useState } from "@hydrophobefireman/ui-lib";

import { Actions } from "./Actions/Actions";
import { Footer } from "./Footer/Footer";
import { Hero } from "@/pages/Landing/Hero/Hero";
import { HuntInfo } from "./HuntInfo/HuntInfo";
import { Timer } from "@/components/Timer/Timer";
import { css } from "catom";
import { eventAtom } from "@/state";
import { glassLink } from "@/style";
import { useIsLoggedIn } from "@/bridge";
import { useSharedStateValue } from "statedrive";

export default function Landing() {
  const [started, setStarted] = useState(false);
  const isLoggedIn = useIsLoggedIn();
  const event = useSharedStateValue(eventAtom);
  return (
    <>
      <section class={css({ minHeight: "55vh" })}>
        <Hero />
        <Actions isLoggedIn={isLoggedIn} />
        {!started ? (
          <Timer
            target={event.event_start_time * 1000}
            onComplete={() => setStarted(true)}
          />
        ) : (
          <div
            class={css({
              marginTop: "2rem",
              textAlign: "center",
              margin: "auto",
            })}
          >
            <A href={isLoggedIn ? "/play" : "/login"} class={glassLink}>
              {isLoggedIn ? "Play" : "Login"}
            </A>
          </div>
        )}
      </section>
      <HuntInfo />
      <Footer />
    </>
  );
}
