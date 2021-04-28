import { DISCORD_URL, IS_INTRA } from "@/util/constants";
import {
  anchorLink,
  content,
  extLink,
  faqContainer,
  faqQuestion,
  infoCardGradient,
} from "./HuntInfo.style";
import { useRef, useState } from "@hydrophobefireman/ui-lib";

import { AnchorIcon } from "@/components/Icons/Anchor";
import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { LessIcon } from "@/components/Icons/Less";
import { Link } from "@/components/ExtLink/ExtLink";
import { MoreIcon } from "@/components/Icons/More";
import { copy } from "@/util/copy";
import { css } from "catom";
import { useRerender } from "@/hooks/use-rerender";
import { useScrolltoAnchor } from "@/hooks/use-scroll-to-anchor";

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
          rerender={rerender}
          question="What is a Cryptic Hunt?"
          answer="Cryptic hunts are online treasure hunts, you will be provided a question, maybe a hint or two and you have to find the answer, you can expect yourself to look for clues all over the internet, using ciphers, extracting metadata or just figuring out the popculture reference."
        />
        <FaqItem
          rerender={rerender}
          question="Do I need to be a programmer to participate?"
          answer="Not at all! While some questions CAN be solved with code, but there's no 1 way to arrive at the solution, the team will try its best to ensure questions are approachable by non programming folk as well"
        />
        <FaqItem
          rerender={rerender}
          question="How are the winners decided?"
          answer="There are 50 questions, first one to solve the 50th question or the person on the top of the leaderboard when the hunt ends is the winner."
        />
        <FaqItem
          rerender={rerender}
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
          rerender={rerender}
          question="What are the prizes?"
          answer={
            IS_INTRA ? (
              "This is Halocrypt(intra), check the FAQ below for more details"
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
        {IS_INTRA && (
          <FaqItem
            rerender={rerender}
            question="What is Halocrypt(intra)?"
            answer="If you can see this, you're on the Intra Event of Halocrypt, it's for the students of DPS Indore, an internal event with no prizes, but a small chance to be a part of the core Team Halocrypt"
          />
        )}
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  rerender,
}: {
  question: any;
  answer: any;
  rerender(): void;
}) {
  const activeRef = useRef(false);
  const active = activeRef.current;
  function handleClick() {
    rerender();
    activeRef.current = !active;
  }

  return (
    <div class={faqContainer}>
      <div onClick={handleClick} class={faqQuestion}>
        <button>
          {active ? <LessIcon size="1rem" /> : <MoreIcon size="1rem" />}
        </button>
        <h1 class={css({ marginLeft: "5px", fontSize: "1.2rem" })}>
          {question}
        </h1>
      </div>
      <AnimateLayout
        element="div"
        animId={question}
        class={css({ background: "var(--bg)" })}
        style={!active ? { height: 0, width: 0, overflow: "hidden" } : {}}
      >
        <p>{answer}</p>
      </AnimateLayout>
      <hr />
    </div>
  );
}
