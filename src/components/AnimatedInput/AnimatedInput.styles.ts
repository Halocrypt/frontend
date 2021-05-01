import { css } from "catom";

export const paperInput = css({
  display: "block",
  width: "80%",
  fontSize: "1.2rem",
  outline: "0",
  height: "30px",
  transition: "0.2s cubic-bezier(0.46, 1, 0.74, 1.07)",
  margin: "auto",
  color: "var(--font)",
  background: "var(--bg)",
  textAlign: "left",
  border: "4px solid",
  borderColor: "var(--glass-border)",
  padding: "1rem",
  borderRadius: "10px",

  pseudo: {
    ":focus": {
      borderColor: "var(--glass-border-focus)",
    },
    " + label": {
      background: "transparent",
      transform: "translate(0px, 1.2rem)",
      opacity: "0.8",
      fontWeight: 700,
      userSelect: "none",
      pointerEvents: "none",
      fontSize: "1.3rem",
      transition: "transform 0.3s ease",
      left: "10%",
      position: "absolute",
      top: "0",
    },

    ":focus + label, [data-should-focus='true'] + label": {
      textTransform: "uppercase",
      background: "var(--bg)",
      transform: "translate(0, -1.8rem) scale(.75)",
      color: "#ffffff78",
    },
  },
});

export const errorCss = css({ color: "red !important" });

export const wrapperCSS = css({ position: "relative" });

export const iconCSS = css({
  position: "absolute",
  right: "10%",
  top: "35%",
  opacity: ".5",
});

export const iconHasContent = [
  iconCSS,
  css({
    media: { "(max-width:500px)": { display: "none" } },
  }),
].join(" ");
