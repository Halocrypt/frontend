import { IconProps } from "../Icons/types";
import { css } from "catom";

const base = css({ transition: "0.3s ease" });
const topPosActive = [
  base,
  css({ transform: "translate(15.899495px, 15.899495px)" }),
].join(" ");
const topPosInactive = [
  base,
  css({ transform: "translate(11.899495px, 11.899495px)" }),
].join(" ");

const topRotateActive = [base, css({ transform: "rotate(-45deg)" })].join(" ");
const topRotateInactive = [base, css({ transform: "rotate(0deg)" })].join(" ");

const middleActive = [base, css({ opacity: "0" })].join(" ");
const middleInactive = [base, css({ opacity: 1 })].join(" ");

const bottomPosActive = [
  base,
  css({ transform: "translate(8.233635px, 15.899495px)" }),
].join(" ");
const bottomPosInactive = [
  base,
  css({ transform: "translate(12px, 22.380313px)" }),
].join(" ");

const bottomRotateActive = [base, css({ transform: "rotate(45deg)" })].join(
  " "
);
const bottomRotateInactive = [base, css({ transform: "rotate(0deg)" })].join(
  " "
);
export function HeaderIcon({
  size,
  className,
  onClick,
  active,
}: IconProps & { active: boolean }) {
  const $size = size || 30;
  return (
    <svg
      height={$size}
      width={$size}
      class={className}
      onClick={onClick}
      viewBox="0 0 24 24"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <g class={active ? topPosActive : topPosInactive}>
        <g class={active ? topRotateActive : topRotateInactive}>
          <path
            d="M4,6L20,6M4,6.579419L20,6.579419M4,7.158837L20,7.158837"
            transform="translate(-12,-12)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <path
        d="M4,6L20,6M4,6.579419L20,6.579419M4,7.158837L20,7.158837"
        transform="matrix(1 0 0 1 0 4.84116299999999)"
        fill="none"
        class={active ? middleActive : middleInactive}
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g class={active ? bottomPosActive : bottomPosInactive}>
        <g class={active ? bottomRotateActive : bottomRotateInactive}>
          <path
            d="M4,6L20,6M4,6.579419L20,6.579419M4,7.158837L20,7.158837"
            transform="translate(-12,-12)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
