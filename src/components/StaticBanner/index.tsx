import {css} from "catom";

import {glassLink} from "@/style";
import {A} from "@hydrophobefireman/ui-lib";

export function StaticOnly() {
  return (
    <div
      class={css({
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        textAlign: "center",
      })}
    >
      <div>
        <div>
          Thanks for checking us out, we have frozen our databases and Halocrypt
          is now read only
        </div>
        <div class={css({marginBottom: "2rem"})}>
          You can check out the questions here:
        </div>
        <div>
          <A href="/question-archive" class={glassLink}>
            Question Archive
          </A>
        </div>
      </div>
    </div>
  );
}
