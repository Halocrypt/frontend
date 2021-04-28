import { actionLink, centerFlex, hoverable } from "@/style";

import { css } from "catom";

export const actionContainer = [centerFlex, css({ marginTop: "2rem" })];

export const ytLink = [
  actionLink,
  css({
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: "1rem",
  }),
  hoverable,
].join(" ");
