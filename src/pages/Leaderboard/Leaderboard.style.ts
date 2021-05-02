import { css } from "catom";

export const leaderboardSearchContainer = css({
  width: "80vw",
  marginTop: "2rem",
  marginLeft: "1rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginBottom: "1rem",
  media: {
    "(max-width:550px)": {
      display: "block",
    },
  },
});

export const headingContainer = css({
  marginLeft: "2.2rem",
  media: {
    "(max-width:550px)": {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
    },
  },
});
export const heading = css({
  fontSize: "3rem",
  media: {
    "(max-width:550px)": {
      fontSize: "2rem",
    },
  },
});

export const leaderboardEntry = css({
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr 1fr",
  textAlign: "center",
});
export const leaderboardEntryEven = [
  leaderboardEntry,
  css({ background: "var(--glass)" }),
].join(" ");

export const leaderboardHeading = [
  css({
    color: "var(--fg)",
  }),
  leaderboardEntry,
].join(" ");

export const listWrapperClass = css({
  border: "2px solid var(--glass-border)",
  borderRadius: "15px",
  overflow: "hidden",
  fontWeight: "bold",
});

export const tableContainer = [
  css({
    marginLeft: "5%",
    width: "85%",
    media: { "(max-width:550px)": { width: "90%" } },
  }),
].join(" ");

export const paginateButton = css({
  padding: "1rem",
  background: "var(--fg)",
  margin: "5px",
  borderRadius: "10px",
  transition: "0.1s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const paginateButtonInactive = [
  paginateButton,
  css({ opacity: 0, pointerEvents: "none" }),
].join(" ");

export const prevIcon = css({ transform: "rotate(180deg)" });
