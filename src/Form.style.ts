import { center } from "@/style";
import { css } from "catom";

export const authBox = [center, css({ marginTop: "10vh" })].join(" ");

export const authHeading = css({
  fontSize: "2.5rem",
  media: {
    "(max-width:500px)": {
      fontSize: "1.5rem",
    },
  },
});

export const actionButton = css({
  color: "var(--font)",
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  height: "3rem",
  background: "var(--glass)",
  margin: "5px",
  borderRadius: "10px",
  transition: "0.3s ease",
});

export const buttonWrapper = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  width: "80%",
  margin: "auto",
  maxWidth: "500px",
});

export const altLinkBox = css({
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const formContainer = [
  center,
  css({ width: "80vw", maxWidth: "600px", marginTop: "2rem" }),
].join(" ");

export const localError = css({
  animation: "errPopup 0.3s ease",
  animationFillMode: "forwards",
  color: "red",
});

export const themeSubmitButton = css({
  background: "var(--fg)",
  borderRadius: "10px",
  width: "100%",
  padding: "1rem",
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const suggestionLink = css({ color: "var(--fg)", fontWeight: "bold" });

export const inputMargin = css({ marginTop: "2rem", marginBottom: "1.6rem" });
