import { ComponentChild } from "@hydrophobefireman/ui-lib";
import { IconProps } from "./types";

export function _icon(
  viewBox: string,
  path: ComponentChild,
  fg?: string,
  bg?: string
): (p: IconProps) => JSX.Element {
  fg = fg || "var(--fg)";
  bg = bg || "var(--bg)";
  return function ({ size: _size, className, invert, onClick }: IconProps) {
    const size = _size || 30;
    const prop = invert ? { stroke: bg, fill: fg } : { fill: bg, stroke: fg };
    return (
      <svg
        onClick={onClick}
        height={size}
        width={size}
        class={className}
        viewBox={viewBox}
        {...prop}
      >
        {path}
      </svg>
    );
  } as any;
}
