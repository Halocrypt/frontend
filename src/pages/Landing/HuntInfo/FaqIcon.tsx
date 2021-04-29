import {
  activeG,
  activeGRotate,
  inactiveG,
  inactiveGRotate,
} from "./HuntInfo.style";

export function FaqIcon({
  active,
  size,
}: {
  active: boolean;
  size?: number | string;
}) {
  size = size || 30;
  return (
    <svg
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      viewBox="0 0 30 30"
      height={size}
      width={size}
    >
      <g transform="translate(-12.5 -12.5)">
        <g class={active ? activeG : inactiveG}>
          <g
            transform="rotate(90 2.202 25.527)"
            class={active ? activeGRotate : inactiveGRotate}
          >
            <path
              fill="#435FEE"
              stroke="none"
              stroke-width="1"
              d="M.821 3.12c0-1.656 1.344-3 3.007-3h23.986a3.002 3.002 0 013.007 3c0 1.658-1.344 3-3.007 3H3.828a3.002 3.002 0 01-3.007-3z"
              transform="translate(-11.646 -2.89)"
            />
          </g>
        </g>
        <path
          id="path-23-path1"
          fill="#435FEE"
          stroke="none"
          stroke-width="1"
          d="M.821 3.12c0-1.656 1.344-3 3.007-3h23.986a3.002 3.002 0 013.007 3c0 1.658-1.344 3-3.007 3H3.828a3.002 3.002 0 01-3.007-3z"
          transform="translate(11.679 24.38)"
        />
      </g>
    </svg>
  );
}
