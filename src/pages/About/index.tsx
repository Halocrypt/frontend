import {
  container,
  heading,
  imgBox,
  imgContainer,
  section,
  sponsorUs,
  themeBluePad,
  themeText,
} from "./about.style";

import { Link } from "@/components/ExtLink/ExtLink";
import { css } from "catom";

export default function About() {
  return (
    <>
      <section class={section}>
        <h1 class={heading}>About</h1>
        <div class={container}>
          <p>
            Halocrypt 2021 is the second edition of the annual cryptic hunt
            organized by students of Delhi Public School, Indore.
          </p>
          <p>
            The hunt consists of 50 brain wrecking questions based on famous
            incidents, figures and internet culture. The goal of the participant
            is to answer the questions as fast as possible using the hints given
            to place themselves at the top of the leaderboard.{" "}
          </p>
          <p>
            The top competitors who reach the highest levels in the shortest
            amount of time shall receive the prizes. The participant is free to
            use the internet to search for the answers.
          </p>
          <p>
            Halocrypt provides participating students with an international
            platform to compete and test their skills against some of the
            greatest cryptic hunters and intellects on the globe.
          </p>
          <p>
            The competitor who completes all 50 questions or ends at the top of
            the leaderboard when the event ends, shall be declared as the winner
            of Halocrypt 2020.
          </p>
        </div>
      </section>
      <section class={section}>
        <h1 class={heading}>Sponsors</h1>
        <h2 class={themeText}>Halocrypt 2021 is possible thanks to</h2>
        <div class={imgContainer}>
          <ImgLink
            link={"https://vercel.com?utm_source=halocrypt&utm_campaign=oss"}
            src="https://h2.halocrypt.com/sponsors/vercel-logo.svg"
            alt="Image of Halocrypt Sponsor Vercel"
          />
          <ImgLink
            link="https://replit.com"
            src="https://h2.halocrypt.com/sponsors/replit-logo.svg"
            alt="Image of Halocrypt Sponsor Replit"
          />
          <ImgLink
            link={"https://quic.ml/halo-nord"}
            src="https://h2.halocrypt.com/sponsors/nord-vpn.svg"
            alt="Image of Halocrypt Sponsor Nord VPN"
          />
        </div>
        <div class={imgContainer}>
          <div>
            <ImgLink
              link="https://studymetro.com"
              alt="Image of Halocrypt Sponsor Study Metro"
              src="https://h2.halocrypt.com/sponsors/study-metro.jpg"
              height={100}
            />
          </div>
          <div class={sponsorUs}>
            Sponsor us by hitting us up on halocrypt20@gmail.com
          </div>
        </div>
      </section>
    </>
  );
}

function ImgLink({ link, ...props }: any) {
  return (
    <div class={imgBox}>
      <div class={themeBluePad}></div>
      <div class={css({ padding: ".5rem" })}>
        <Link href={link}>
          <img height={200} width={200} {...props} />
        </Link>
      </div>
    </div>
  );
}
