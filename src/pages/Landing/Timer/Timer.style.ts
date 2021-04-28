import { css } from "catom";
export const timerBox = [
  css({
    minWidth: "10vw",
    background: "#E3E3E3",
    maxWidth: "80vw",
    padding: "2rem",
    borderRadius: "20px",
    color: "var(--bg)",
    margin: "auto",
    display: "inline-block",
    marginTop: "3rem",
    transition: ".3s ease",
    media: {
      "(min-width:500px)": { fontSize: "2rem" },
    },
  }),
].join(" ");

export const timerNum = css({
  display: "flex",
  flexDirection: "column",
  marginLeft: ".5rem",
  marginRight: ".5rem",
});
