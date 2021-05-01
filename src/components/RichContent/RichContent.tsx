import { RenderableContent } from "@/interfaces";
import { css } from "catom";
export function RichContent({ content }: { content: RenderableContent }) {
  if (!content || !content.content) return;
  if (content.type === "image-embed")
    return (
      <img
        src={content.content}
        class={css({ maxHeight: "50vh", maxWidth: "30vw" })}
      />
    );
  if (content.type === "link") {
    return (
      <a
        href={content.content}
        target="_blank"
        rel="noopener"
        class={css({
          wordBreak: "break-all",
          textDecoration: "underline",
          fontWeight: "bold",
        })}
      >
        {content.content}
      </a>
    );
  }
  return <span class={css({ fontWeight: "bold" })}>{content.content}</span>;
}
