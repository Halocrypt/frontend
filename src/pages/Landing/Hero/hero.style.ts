import { css } from "catom";
export const landingLogo = css({
  position: "absolute",
  left: "0",
  right: "0",
  margin: "auto",
  opacity: 0.4,
  //@ts-ignore
  zIndex: "-1",
  pointerEvents: "none",
  maxWidth: "95vw",
  top: "0",
  bottom: "0",
});

export const landingContentWrap = css({
  textAlign: "center",
  marginTop: "25vh",
});

export const landingHeading = css({
  fontSize: "2rem",
  maxWidth: "20ch",
  margin: "auto",
  //   textFillColor: "transparent",
});
