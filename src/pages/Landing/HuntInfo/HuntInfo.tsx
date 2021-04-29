import { DISCORD_URL, IS_INTRA } from "@/util/constants";
import {
  anchorLink,
  content,
  extLink,
  faqContainer,
  faqQuestion,
  infoCardGradient,
} from "./HuntInfo.style";

import { AnchorIcon } from "@/components/Icons/Anchor";
import { DeclarativeTransform } from "@hydrophobefireman/ui-anim";
import { FaqIcon } from "./FaqIcon";
import { LessIcon } from "@/components/Icons/Less";
import { Link } from "@/components/ExtLink/ExtLink";
import { MoreIcon } from "@/components/Icons/Faq";
import { copy } from "@/util/copy";
import { css } from "catom";
import { useRerender } from "@/hooks/use-rerender";
import { useScrolltoAnchor } from "@/hooks/use-scroll-to-anchor";
import { useState } from "@hydrophobefireman/ui-lib";

export function HuntInfo() {
  useScrolltoAnchor();
  return (
    <div class={css({ marginTop: "1rem" })}>
      <InfoCard />
      <Faq />
    </div>
  );
}

function InfoCard() {
  return (
    <section class={infoCardGradient}>
      <h1 class={css({ fontSize: "2rem" })}>50 Questions</h1>
      <h2 class={css({ fontSize: "2rem" })}>4 Days</h2>
      <p class={css({ fontWeight: "bold", maxWidth: "80%" })}>
        The hunt consists of 50 brain wrecking questions based on famous
        incidents, figures and internet culture. The goal of the participant is
        to answer the questions as fast as possible using the hints given to
        place themselves at the top of the leaderboard.
      </p>
    </section>
  );
}

function Faq() {
  const rerender = useRerender();
  const copyTarget = new URL(location.href);
  copyTarget.hash = "faq";
  return (
    <section id="faq" class={content}>
      <a data-copy={copyTarget.href} onClick={copy} href="#faq">
        <h1 class={anchorLink}>
          <span>Frequently Asked Questions</span> <AnchorIcon />
        </h1>
      </a>
      <div>
        <FaqItem
          question="What is a Cryptic Hunt?"
          answer="Cryptic hunts are online treasure hunts, you will be provided a question, maybe a hint or two and you have to find the answer, you can expect yourself to look for clues all over the internet, using ciphers, extracting metadata or just figuring out the popculture reference."
        />
        <FaqItem
          question="Do I need to be a programmer to participate?"
          answer="Not at all! While some questions CAN be solved with code, but there's no 1 way to arrive at the solution, the team will try its best to ensure questions are approachable by non programming folk as well"
        />
        <FaqItem
          question="How are the winners decided?"
          answer="There are 50 questions, first one to solve the 50th question or the person on the top of the leaderboard when the hunt ends is the winner."
        />
        <FaqItem
          question="Any place where I can practice?"
          answer={
            <p>
              Glad you asked, Check out{" "}
              <Link href="https://2020.halocrypt.com/" class={extLink}>
                Halocrypt 2020
              </Link>{" "}
              the previous edition of Halocrypt.
            </p>
          }
        />
        <FaqItem
          question="What are the prizes?"
          answer={
            IS_INTRA ? (
              "This is Halocrypt (intra), check the FAQ below for more details"
            ) : (
              <>
                <p>
                  Looks like you are here way too early, prizes haven't been
                  declared yet, but we'll be sure to let you know
                </p>
                <p>
                  in the meantime, check out our{" "}
                  <Link href={DISCORD_URL} class={extLink}>
                    Discord
                  </Link>{" "}
                  for the latest updates
                </p>
              </>
            )
          }
        />
        <FaqItem
          question="I played Halocrypt 2020, do I have to create a new account?"
          answer={
            <>
              Yes. While we did consider keeping previous accounts, it causes
              unnecessary confusion to users. This is a clean slate, however,
              you can still use your old account on{" "}
              <Link href="https://2020.halocrypt.com" class={extLink}>
                https://2020.halocrypt.com
              </Link>
            </>
          }
        />
        {IS_INTRA && (
          <FaqItem
            question="What is Halocrypt (intra)?"
            answer="If you can see this, you're on the Intra Event of Halocrypt, it's for the students of DPS Indore, an internal event with no prizes, but a small chance to be a part of the core Team Halocrypt"
          />
        )}
      </div>
    </section>
  );
}

const snapshot = new DeclarativeTransform({ translateY: -40 });
function FaqItem({ question, answer }: { question: any; answer: any }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div class={faqContainer}>
      <div onClick={handleClick} class={faqQuestion}>
        <button aria-label="Toggle FAQ">
          <FaqIcon active={active} size="1rem" />
        </button>
        <h1 class={css({ marginLeft: "5px", fontSize: "1.2rem" })}>
          {question}
        </h1>
      </div>
      {active && (
        <div class={css({ background: "var(--bg)" })}>
          <p>{answer}</p>
        </div>
      )}
      <hr />
    </div>
  );
}
