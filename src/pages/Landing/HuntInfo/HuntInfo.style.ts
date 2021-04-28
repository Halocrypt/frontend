import { css } from "catom";

export const content = css({
  width: "80%",
  maxWidth: "50ch",
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
});

export const extLink = css({ textDecoration: "underline", fontWeight: "bold" });
