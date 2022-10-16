import {css} from "catom";

import {DynamicOnly} from "@/components/DynamicOnly";
import {Link} from "@/components/ExtLink/ExtLink";
import {PlayIcon} from "@/components/Icons/Play";
import {glassLink} from "@/style";
import {A} from "@hydrophobefireman/ui-lib";

import {actionContainer, ytLink} from "./Actions.style";

export function Actions({isLoggedIn}: {isLoggedIn: boolean}) {
  return (
    <div class={actionContainer}>
      {!isLoggedIn && (
        <DynamicOnly>
          <A href="/register" class={glassLink} title="Register for Halocrypt">
            Register
          </A>
        </DynamicOnly>
      )}
      <Link
        class={ytLink}
        href="https://www.youtube.com/watch?v=o0tdRqCipwM"
        title="Halocrypt Trailer"
      >
        <PlayIcon size="1.2rem" />
        <span class={css({marginLeft: "5px"})}>Watch the trailer</span>
      </Link>
    </div>
  );
}
