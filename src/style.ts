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
export const focusRing = css({
  pseudo: {
    ":focus-visible": {
      border: "2px solid rgb(245 245 245 / 40%)",
    },
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
    background: "var(--glass)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  hoverable,
].join(" ");

export const hideOnMobile = css({
  media: { "(max-width:600px)": { display: "none" } },
});

export const mask = css({
  height: "100vh",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(48, 48, 48, 0.8)",
  position: "fixed",
  width: "100vw",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  zIndex: 5,
});

export const tALeft = css({ textAlign: "left" });
export const tARight = css({ textAlign: "right" });

export const flexColumn = css({ display: "flex", flexDirection: "column" });

export const marginAuto = css({ marginLeft: "auto", marginRight: "auto" });
