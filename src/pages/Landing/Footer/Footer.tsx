import { A } from "@hydrophobefireman/ui-lib";
import { css } from "catom";
import { hoverable } from "@/style";

export function Footer() {
  return (
    <div class={css({ maxWidth: "50%", margin: "auto", position: "relative" })}>
      <div
        class={css({
          position: "absolute",
          top: "50%",
          margin: "auto",
          width: "100%",
          textAlign: "center",
          wordBreak: "break-all",
          fontWeight: "bold",
          zIndex: 2,
        })}
      >
        Think you're ready?{" "}
        <A
          href="/register"
          class={[
            css({ color: "var(--fg)", display: "inline-block" }),
            hoverable,
          ].join(" ")}
        >
          Sign Up
        </A>
      </div>
      <span class={css({ opacity: ".3" })}>
        ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ .
        ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ .
        ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ .
        ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ .
        ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁
      </span>
    </div>
  );
}
