import { css } from "catom";
import { formContainer } from "@/Form.style";
import { hideOnMobile } from "@/style";

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
  cursor: "pointer",
  textAlign: "left",
  opacity: ".8",
});
const headingBase = css({ transition: "0.3s ease" });
export const indicatorHeading = headingBase;
export const indicatorHeadingActive = [
  headingBase,
  css({ color: "var(--fg)" }),
].join(" ");

export const stepProgressBox = [
  hideOnMobile,
  formContainer,
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "1rem",
    fontWeight: "bold",
    marginBottom: "3rem",
    userSelect: "none",
  }),
].join(" ");
