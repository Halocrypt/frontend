import {css} from "catom";
import {useSharedStateValue} from "statedrive";

import {useIsLoggedIn} from "@/bridge";
import {DynamicOnly} from "@/components/DynamicOnly";
import {Timer} from "@/components/Timer/Timer";
import {Hero} from "@/pages/Landing/Hero/Hero";
import {eventAtom} from "@/state";
import {glassLink} from "@/style";
import {A, useState} from "@hydrophobefireman/ui-lib";

import {Actions} from "./Actions/Actions";
import {Footer} from "./Footer/Footer";
import {HuntInfo} from "./HuntInfo/HuntInfo";

export default function Landing() {
  const [started, setStarted] = useState(false);
  const isLoggedIn = useIsLoggedIn();
  const event = useSharedStateValue(eventAtom);
  return (
    <>
      <section class={css({minHeight: "55vh"})}>
        <Hero />
        <Actions isLoggedIn={isLoggedIn} />
        {!started ? (
          <Timer
            target={event.event_start_time * 1000}
            onComplete={() => setStarted(true)}
          />
        ) : (
          <DynamicOnly>
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
          </DynamicOnly>
        )}
        <div
          class={css({
            marginTop: "2rem",
            textAlign: "center",
            margin: "auto",
          })}
        >
          <A href={"/leaderboard"} class={glassLink}>
            Leaderboard
          </A>
          <A href={"/certificate"} class={glassLink}>
            Certificates
          </A>
        </div>
        <div
          class={css({
            marginTop: "2rem",
            textAlign: "center",
            margin: "auto",
          })}
        >
          <A href={"/question-archive"} class={glassLink}>
            Question Archive
          </A>
        </div>
      </section>
      <HuntInfo />
      <Footer />
    </>
  );
}
