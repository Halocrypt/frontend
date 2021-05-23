import { css } from "catom";

export const content = css({
  width: "80%",
  maxWidth: "70ch",
  padding: "2rem",
  margin: "auto",
});
export const infoCardGradient = [
  css({
    backgroundImage:
      "linear-gradient(89.73deg, rgba(37, 117, 252, 0.9) 0.22%, rgba(245, 87, 108, 0.2) 98.08%);",
    borderRadius: "20px",
  }),
  content,
].join(" ");

export const anchorLink = css({
  fontSize: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const faqContainer = css({ wordBreak: "break-word" });

export const faqQuestion = css({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "1rem",
  userSelect: "none",
});

export const extLink = css({ textDecoration: "underline", fontWeight: "bold" });

const animateG = css({ transition: "0.3s ease" });

export const activeG = [
  animateG,
  css({ transform: "translate(23.325001px, 27.27002px)" }),
].join(" ");

export const inactiveG = [
  animateG,
  css({ transform: "translate(27.72998px, 23.325001px)" }),
].join(" ");

export const activeGRotate = [
  animateG,
  css({ transform: "rotate(0deg)" }),
].join(" ");

export const inactiveGRotate = [
  animateG,
  css({ transform: "rotate(90deg)" }),
].join(" ");
