import {css} from "catom";

import {hoverable} from "@/style";

export const footer = css({
  maxWidth: "500px",
  width: "80%",
  margin: "auto",
  position: "relative",
});

export const linkBox = css({
  position: "absolute",
  top: "50%",
  margin: "auto",
  width: "100%",
  textAlign: "center",
  wordBreak: "break-all",
  fontWeight: "bold",
  zIndex: 2,
});

export const coloredLink = [
  css({color: "#7a90ff", display: "inline-block"}),
  hoverable,
].join(" ");

export const svgContainer = css({
  opacity: ".1",
  maxWidth: "80vw",
  maxHeight: "300px",
  display: "block",
  margin: "auto",
  cursor: "default",
  media: {
    "(min-width:600px)": {
      userSelect: "none",
      pointerEvents: "none",
    },
  },
});
