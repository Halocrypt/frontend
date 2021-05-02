import { center } from "@/style";
import { css } from "catom";

export const playSection = [center, css({ marginTop: "2rem" })].join(" ");

export const contentDivider = css({
  marginTop: "2rem",
  textAlign: "center",
  margin: "auto",
  width: "90vw",
  maxWidth: "800px",
  fontWeight: "bold",
});

export const questionHeading = css({
  fontSize: "2.5rem",
  fontFamily: "var(--font-content)",
});

export const contentSection = css({
  flex: 1,
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  padding: "1rem",
});

export const answerButton = css({
  padding: "1.3rem",
  background: "var(--fg)",
  borderRadius: "5px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  media: { "(max-width:500px)": { padding: "1rem" } },
});

export const prevAnsHeading = css({
  fontSize: "2rem",
  fontFamily: "var(--font-content)",
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

export const questionContainer = css({
  fontSize: "1.5rem",
  wordBreak: "break-word",
  marginTop: "1rem",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "left",
});

export const hintItem = css({
  marginTop: "1rem",
  padding: "10px",
  textAlign: "left",
});

export const helpLink = css({ color: "var(--fg)" });

export const inputContainer = css({
  display: "grid",
  gridTemplateColumns: "9fr 1fr",
  media: {
    "(max-width:500px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});
