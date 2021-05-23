import { centerFlex } from "@/style";
import { css } from "catom";

export const section = css({
  padding: "2rem",
  fontWeight: "bold",
  fontSize: "1.2rem",
});

export const heading = css({ fontSize: "2rem", marginBottom: "1rem" });

export const themeText = [heading, css({ color: "var(--fg)" })];

export const container = css({ margin: "auto", marginTop: "1rem" });

export const imgContainer = [
  css({
    width: "80%",

    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
  }),
].join(" ");

export const sponsorUs = [
  centerFlex,
  css({
    flex: 1,
    padding: "1rem",
    background: "var(--fg)",
    margin: ".5rem",
    fontWeight: "bold",
  }),
].join(" ");

export const imgBox = css({
  flex: 1,
  background: "var(--font)",
  margin: ".5rem",
  borderRadius: "5px",
  textAlign: "center",
  transition: ".3s ease",
  pseudo: { ":hover": { transform: "translateY(-5px)" } },
});

export const themeBluePad = css({
  height: "30px",
  width: "100%",
  background: "var(--fg)",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "5px",
});
