import { css } from "catom";

export const appPopopClose = css({
  border: "none",
  fontWeight: "bold",
  color: "var(--font)",
  background: "var(--bg)",
  cursor: "pointer",
  outline: "none",
  padding: "0.6rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const modalPopup = css({
  width: "90%",
  position: "fixed",
  top: "2rem",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  background: "#000",
  fontSize: "1.2rem",
  zIndex: 100,
  transition: "0.35s linear",
  maxWidth: "700px",
  color: "#fff",
});

export const modalInactive = css({
  transform: "translateY(-35vh)",
  pointerEvents: "none",
});
