import { css } from "catom";

/** Exported routes need to be default exports */
export default function Landing() {
  return (
    <div class={css({ margin: "auto", textAlign: "center" })}>
      <Icon />
      <div>
        <a
          class={css({ margin: "1rem", display: "block" })}
          href="https://halocrypt-20.herokuapp.com"
        >
          Looking for the older version? click here
        </a>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <svg
      class={css({
        animation: "scaleSvg 10s ease",
        animationIterationCount: "infinite",
      })}
      viewBox="0 0 36 36"
      height={"40%"}
      width={"40%"}
    >
      <path
        fill="#ffcc4d"
        d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.06 0 18 0s18 8.06 18 18"
      />
      <g fill="#ff7892">
        <circle cx="29" cy="23" r="5" />
        <circle cx="7" cy="23" r="5" />
      </g>
      <g fill="#f5f8fa">
        <circle cx="24.5" cy="16.5" r="5.5" />
        <circle cx="11.5" cy="16.5" r="5.5" />
      </g>
      <g fill="#292f33">
        <circle cx="11.5" cy="16.5" r="2.5" />
        <circle cx="24.5" cy="16.5" r="2.5" />
      </g>
      <path
        fill="#664500"
        d="M22 30h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm8.001-19a1 1 0 0 1-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005S22.45 5 23 5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.2 1.4c-.18.135-.39.2-.599.2zM5.999 11c-.208 0-.419-.065-.599-.2a1 1 0 0 1-.2-1.4C8.462 5.05 12.816 5 13 5a1 1 0 1 1 .004 2c-.155.002-3.568.086-6.204 3.6a1 1 0 0 1-.801.4z"
      />
    </svg>
  );
}
