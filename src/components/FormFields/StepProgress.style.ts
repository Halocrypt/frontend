import { css } from "catom";

const borderBase = css({
  height: "2px",
  marginTop: "1rem",
  borderRadius: "20px",
  border: "2px solid",
});

export const borderActive = [
  borderBase,
  css({ borderColor: "var(--fg)", background: "var(--fg)" }),
].join(" ");

export const borderInactive = [
  borderBase,
  css({ borderColor: "var(--font)", background: "var(--font)" }),
].join(" ");

export const indicatorWrap = css({
  flex: 1,
  marginLeft: "5px",
  marginRight: "5px",
  textAlign: "left",
});
const headingBase = css({ transition: "0.3s ease" });
export const indicatorHeading = headingBase;
export const indicatorHeadingActive = [
  headingBase,
  css({ color: "var(--fg)" }),
].join(" ");
