import { css } from "catom";
import { hoverable } from "@/style";

export const homeLink = css({
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: ".5rem",
  fontFamily: "var(--font-heading)",
});

export const header = css({
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  background: "var(--bg)",
  zIndex: 4,
});

export const headerNW = css({
  display: "flex",
  alignItems: "center",
});

export const socialLink = [
  css({
    opacity: ".8",
    marginLeft: "5px",
    marginRight: "5px",
  }),
  hoverable,
].join(" ");

export const linkContainer = css({ marginTop: "5px" });

const navLinkBase = css({
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginLeft: "1rem",
  marginRight: "1rem",
  display: "inline-block",
});

export const navLink = [navLinkBase, hoverable].join(" ");
export const notifLink = [navLink, css({ color: "var(--fg)" })].join(" ");
const _navMovBase = css({
  margin: "1rem",
  fontWeight: "bold",
  transition: "0.3s ease",
});
export const navLinkMobile = [
  hoverable,
  _navMovBase,
  css({ color: "var(--text-on-glass)" }),
].join(" ");

export const navLinkMobileActive = [
  hoverable,
  _navMovBase,
  css({ color: "var(--font)" }),
].join(" ");

export const mainAction = [
  navLinkBase,
  hoverable,
  css({
    fontWeight: "bold",
    boxShadow: "10px 1.5px 4px rgba(0, 0, 0, 0.16)",
    background: "rgb(245 245 245 / 15%)",
    padding: "1rem",
    paddingTop: "2px",
    paddingBottom: "2px",
    borderRadius: "10px",
  }),
].join(" ");
