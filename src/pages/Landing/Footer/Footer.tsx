import { A } from "@hydrophobefireman/ui-lib";
import { css } from "catom";
import { hoverable } from "@/style";

export function Footer() {
  return (
    <div
      class={css({
        maxWidth: "500px",
        width: "80%",
        margin: "auto",
        position: "relative",
      })}
      aria-hidden
    >
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
          tabIndex={-1}
          class={[
            css({ color: "#7a90ff", display: "inline-block" }),
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
