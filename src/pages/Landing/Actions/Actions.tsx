import { actionContainer, ytLink } from "./Actions.style";

import { A } from "@hydrophobefireman/ui-lib";
import { Link } from "@/components/ExtLink/ExtLink";
import { PlayIcon } from "@/components/Icons/Play";
import { css } from "catom";
import { glassLink } from "@/style";

export function Actions({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div class={actionContainer}>
      {!isLoggedIn && (
        <A href="/register" class={glassLink} title="Register for Halocrypt">
          Register
        </A>
      )}
      <Link
        class={ytLink}
        href="https://www.youtube.com/watch?v=xaESGE5SvkQ"
        title="Halocrypt Trailer"
      >
        <PlayIcon size="1.2rem" />
        <span class={css({ marginLeft: "5px" })}>Watch the trailer</span>
      </Link>
    </div>
  );
}
