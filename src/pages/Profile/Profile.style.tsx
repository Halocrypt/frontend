import { center, tARight } from "@/style";

import { css } from "catom";

export const profileSection = [
  center,
  css({ marginTop: "2rem", width: "90vw", maxWidth: "700px" }),
].join(" ");
export const profileHeading = css({
  fontSize: "2.5rem",
  display: "inline-flex",
  alignItems: "center",
  media: {
    "(max-width:500px)": { flexDirection: "column" },
  },
});

export const scoreContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  marginTop: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
});
export const scoreDiv = css({
  background: "var(--fg)",
  flex: 1,
  marginLeft: "1rem",
  marginRight: "1rem",
  padding: "1rem",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "1.4rem",
});

export const saveButtonContainer = [tARight, css({ marginTop: ".5rem" })].join(
  " "
);

const saveButtonBase = css({
  transition: "0.3s ease",
  padding: "0.5rem",
  background: "var(--fg)",
  borderRadius: "5px",
});

export const saveButtonActive = [saveButtonBase, css({ opacity: 1 })].join(" ");
export const saveButtonInactive = [
  saveButtonBase,
  css({ opacity: 0, pointerEvents: "none" }),
].join(" ");
