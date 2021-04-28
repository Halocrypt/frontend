import { css } from "catom";

export const flex = css({ display: "flex" });

export const hoverable = css({
  transition: ".3s ease",
  willChange: "transform",
  pseudo: {
    ":hover": {
      transform: "scale(1.05)",
    },
    ":focus": { transform: "scale(1.05)" },
  },
});

export const centerFlex = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const center = css({ margin: "auto", textAlign: "center" });

export const bold = css({ fontWeight: "bold" });

export const actionLink = css({ marginLeft: "1rem", marginRight: "1rem" });
export const glassLink = [
  actionLink,
  css({
    padding: ".5rem",
    paddingLeft: "2rem",
    borderRadius: "20px",
    paddingRight: "2rem",
    background: "rgb(255 255 255 / 15%)",
  }),
  hoverable,
].join(" ");
