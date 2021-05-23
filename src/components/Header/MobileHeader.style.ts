import { css } from "catom";

export const mobileHeader = css({
  position: "sticky",
  zIndex: 2,
  top: 0,
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: ".5rem",
  paddingRight: ".5rem",
});

export const mobileNav = css({
  width: "75%",
  maxWidth: "500px",
  padding: "2rem",
  background: "#292737",
  zIndex: 6,
  position: "fixed",
  top: "7vh",
  margin: "auto",
  borderRadius: "10px",
  left: 0,
  right: 0,
  animation: "scaleAnim 0.3s ease",
  animationFillMode: "forwards",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  boxShadow: "2px 7px 8px #272424d6",
  userSelect: "none",
});

export const searchWrapper = css({
  marginTop: "2rem",
  width: "60%",
  media: {
    "(max-width:550px)": {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "0",
    },
  },
});
