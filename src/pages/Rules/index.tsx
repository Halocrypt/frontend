import { A } from "@hydrophobefireman/ui-lib";
import { DISCORD_URL } from "@/util/constants";
import { Link } from "@/components/ExtLink/ExtLink";
import { center } from "@/style";
import { css } from "catom";
import { eventAtom } from "@/state";
import { useSharedStateValue } from "statedrive";
const underline = css({ textDecoration: "underline" });
const listItem = css({
  marginTop: "1rem",
  marginBottom: "1rem",
  fontFamily: "var(--font-content)",
});
export default function Rules() {
  const event = useSharedStateValue(eventAtom);
  if (!event) return <div>Loading event details</div>;
  const start = new Date(event.event_start_time * 1000);
  return (
    <section class={[center, css({ padding: "1rem", maxWidth: "80ch" })]}>
      <h1 class={css({ fontSize: "2.5rem", marginTop: "2rem" })}>Rules</h1>
      <ol
        class={css({
          padding: "2rem",
          border: "2px solid var(--glass-border)",
          borderRadius: "10px",
        //   fontWeight: "bold",
          textAlign: "left",
          fontSize: "1.3rem",
          media: { "(max-width:500px)": { fontSize: "1rem" } },
        })}
      >
        <li class={listItem}>
          Hunt will begin at {start.toDateString()}, {start.getHours()}:
          {start.getMinutes()}
        </li>
        <li class={listItem}>
          Halocrypt is a cryptic hunt, the participant has to make their way
          through multiple levels to reach the top of the leaderboard
        </li>
        <li class={listItem}>
          Each level will contain a question either in the form of text or a
          link or an image. Hints (text/link/image) may be provided as well to
          help the participant.
        </li>
        <li class={listItem}>
          Besides, hints will be released on our official social media, most
          notably our{" "}
          <Link class={underline} href={DISCORD_URL}>
            Discord Server
          </Link>
          . It's highly recommended that you join it.
        </li>
        <li class={listItem}>
          Halocrypt also has{" "}
          <A class={underline} href="/play/notifications">
            Notifications
          </A>{" "}
          Where you will be notified instantly of any updates the admins make
          while they are on the play page. (These could be clues, hints,
          announcements)
        </li>
        <li class={listItem}>
          Answers will always be lower-case, alphanumeric and will contain no
          spaces. Special characters are not allowed. For example, if the answer
          is "Reg Exp /(.*)?/", you would type it in as “regexp”. (Don't worry,
          we normalize your inputs anyway)
        </li>
        <li class={listItem}>
          Every clue in the question is important. If it wasn't important, it
          wouldn't be there
        </li>
        <li class={listItem}>
          Beware of the spelling you enter, we do not autocorrect.
        </li>
        <li class={listItem}>
          Do not spam admins or other participants, it may lead to your
          disqualification
        </li>
        <li class={listItem}>
          And if it was not obvious, team play, answer sharing, hint sharing and
          collaborating with other competitors in general is not allowed and any
          such evidence can lead to disqualification.
        </li>
      </ol>
    </section>
  );
}
