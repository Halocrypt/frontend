import { coloredLink, footer, linkBox, svgContainer } from "./Footer.style";

import { A } from "@hydrophobefireman/ui-lib";
import { css } from "catom";

export function Footer() {
  return (
    <footer class={footer} aria-hidden>
      <div class={linkBox}>
        Think you're ready?{" "}
        <A href="/register" tabIndex={-1} class={coloredLink}>
          Sign Up
        </A>
      </div>

      <svg
        role="presentation"
        aria-hidden
        class={svgContainer}
        viewBox="0 0 300 300"
      >
        <foreignObject x={0} y={0} width="100%" height="100%">
          <span class={css({ cursor: "default" })}>
            ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁
            . ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙
            ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ . ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗ ⠕⠥⠸⠌⠙
            ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ . ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍ ⠅⠕⠗
            ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁ . ⠁⠓⠏ ⠑⠃⠊⠝⠽ ⠊⠗⠵⠅⠥ ⠋⠵⠇ ⠲⠟⠥⠭⠙⠵ ⠕⠛⠎⠽ ⠞⠎⠎ ⠎⠁⠅⠍
            ⠅⠕⠗ ⠕⠥⠸⠌⠙ ⠙⠕⠏⠙ ⠗⠃⠧⠝⠗⠤⠼⠉⠤⠼⠁
          </span>
        </foreignObject>
      </svg>
    </footer>
  );
}

// the svg is a hack, without which the browser thinks the span element is
// part of the document even with aria-hidden
// which makes the accessibility look bad because of the low contrast
// since this is just presentational (...)
// we're wrapping it inside a <foreignObject/>
