import { css } from "catom";

export const paperInput = css({
  display: "inline-block",
  fontSize: "1.2rem",
  outline: "0",
  height: "30px",
  transition: "0.2s cubic-bezier(0.46, 1, 0.74, 1.07)",
  color: "var(--font)",
  background: "var(--bg)",
  textAlign: "left",
  border: "4px solid var(--glass-border)",
  padding: "1rem",
  borderRadius: "10px",

  pseudo: {
    ":focus": {
      borderColor: "var(--glass-border-focus)",
    },
    " + label": {
      background: "transparent",
      transform: "translate3d(0px,3rem,0)",
      opacity: "0.8",
      fontWeight: 700,
      userSelect: "none",
      pointerEvents: "none",
      fontSize: "1.3rem",
      transition: "transform 0.3s ease",
      marginLeft: "1rem",
      textAlign: "left",
    },

    ":focus + label, [data-should-focus='true'] + label": {
      textTransform: "uppercase",
      transform: "translate3d(-12%, 0, 0) scale(.75)",
      color: "#ffffff78",
    },
  },
});

export const errorCss = css({ color: "red !important" });

export const wrapperCSS = css({
  position: "relative",
  display: "flex",
  flexDirection: "column-reverse",
  maxWidth: "80%",
});

export const iconCSS = css({
  position: "absolute",
  right: "5%",
  top: "53%",
  opacity: ".5",
});

export const iconHasContent = [
  iconCSS,
  css({
    media: { "(max-width:500px)": { display: "none" } },
  }),
].join(" ");
