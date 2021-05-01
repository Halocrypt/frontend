import { center, flexColumn } from "@/style";

import { css } from "catom";
import { inputMargin } from "@/Form.style";

export const playSection = [center, css({ marginTop: "2rem" })].join(" ");

export const contentDivider = css({
  display: "flex",
  marginTop: "2rem",
  media: {
    "(max-width:750px)": { flexDirection: "column" },
  },
});

export const questionHeading = css({ fontSize: "2.5rem" });

export const contentSection = css({
  flex: 1,
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  padding: "1rem",
});

export const answerButton = css({
  padding: "1rem",
  background: "var(--fg)",
  borderRadius: "10px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const prevAnswerContainer = css({
  media: {
    "(min-width:750px)": { position: "sticky", top: "15%" },
  },
});

export const prevAnsHeading = css({
  fontSize: "2rem",
  media: { "(max-width:500px)": { fontSize: "1.5rem" } },
});

export const prevAnsBox = css({
  border: "2px solid var(--glass-border)",
  marginTop: "1rem",
  borderRadius: "10px",
  fontWeight: "bold",
});

export const prevAnsEven = css({ padding: ".5rem", wordBreak: "break-word" });
export const prevAnsOdd = [
  prevAnsEven,
  css({ background: "var(--glass)" }),
].join(" ");

export const answerWrapper = [inputMargin, css({ flex: 1 })].join(" ");

export const questionContainer = css({
  fontSize: "1.5rem",
  wordBreak: "break-word",
  border: " 2px solid var(--glass-border)",
  marginTop: "1rem",
  borderRadius: "10px",
  padding: "10px",
});

export const hintItem = css({
  border: " 2px solid var(--glass-border)",
  marginTop: "1rem",
  borderRadius: "10px",
  padding: "10px",
});

export const hintLinkContainer = [
  flexColumn,
  css({
    fontWeight: "bold",
    fontSize: "1.2rem",
    textDecoration: "underline",
    marginTop: "1rem",
  }),
].join(" ");
