const ratio = 411 / 727;
export function HaloIcon({
  height = 727,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const width = height * ratio;
  return (
    <svg
      fill="none"
      viewBox="0 0 411 727"
      height={height}
      width={width}
      className={className}
    >
      <g fill="#0a071b">
        <path d="M22.95 92.88L168.5 0l242.38 37.66-310.64 194.75L22.95 92.88zm387.93-55.22L264.8 374.08 100.24 232.41 410.88 37.66z" />
        <path d="M22.95 92.88l77.29 139.53L.46 451.26 22.95 92.88zM216.77 528.5l48.03-154.42L.46 451.26l216.31 77.24z" />
        <path d="M286.94 726.43L216.77 528.5.46 451.26l286.48 275.17z" />
        <path d="M264.8 374.08l22.14 352.35-70.17-197.93 48.03-154.42zM410.88 37.66L286.94 726.43 264.8 374.08 410.88 37.66z" />
      </g>
      <path
        fill="url(#A)"
        d="M22.48 92.88L168.04 0l242.31 37.66L99.78 232.41 22.48 92.88z"
      />
      <path
        fill="url(#B)"
        d="M410.35 37.66L264.34 374.08 99.78 232.41 410.35 37.66z"
      />
      <path fill="url(#C)" d="M22.48 92.88l77.3 139.53L0 451.26 22.48 92.88z" />
      <path
        fill="url(#D)"
        d="M216.3 528.5l48.04-154.42L0 451.26l216.3 77.24z"
      />
      <path
        fill="url(#E)"
        d="M286.47 726.43L216.3 528.5 0 451.26l286.47 275.17z"
      />
      <path
        fill="url(#F)"
        d="M264.34 374.08l22.13 352.35L216.3 528.5l48.04-154.42z"
      />
      <path
        fill="url(#G)"
        d="M410.35 37.66L286.47 726.43l-22.13-352.35L410.35 37.66z"
      />
      <path
        fill="#0a071b"
        d="M264.34 374.08L99.78 232.41 0 451.26l264.34-77.18z"
      />
      <path fill="url(#H)" d="M.46 451.26l264.34-77.18-164.56-141.67" />
      <defs>
        <linearGradient
          id="A"
          x1="216.418"
          x2="216.418"
          y1="244.579"
          y2="12.168"
          xlinkHref="#I"
        >
          <stop stop-color="#2575fc" stop-opacity=".9" />
          <stop offset=".64" stop-color="#6a11cb" stop-opacity=".2" />
        </linearGradient>
        <linearGradient
          id="B"
          x1="251.764"
          x2="360.929"
          y1="129.213"
          y2="318.34"
          xlinkHref="#I"
        >
          <stop offset=".11" stop-color="#6a11cb" stop-opacity=".5" />
          <stop offset="1" stop-color="#2575fc" stop-opacity=".3" />
        </linearGradient>
        <linearGradient
          id="C"
          x1="49.889"
          x2="49.889"
          y1="92.883"
          y2="451.262"
          xlinkHref="#I"
        >
          <stop stop-color="#2575fc" stop-opacity="0" />
          <stop offset="1" stop-color="#6a11cb" />
        </linearGradient>
        <linearGradient
          id="D"
          x1="132.169"
          x2="132.169"
          y1="374.082"
          y2="528.501"
          xlinkHref="#I"
        >
          <stop offset=".1" stop-color="#6a11cb" />
          <stop offset="1" stop-color="#2575fc" stop-opacity=".3" />
        </linearGradient>
        <linearGradient
          id="E"
          x1="143.236"
          x2="143.236"
          y1="451.262"
          y2="726.435"
          xlinkHref="#I"
        >
          <stop stop-color="#6a11cb" stop-opacity=".8" />
          <stop offset=".37" stop-color="#2575fc" stop-opacity=".8" />
        </linearGradient>
        <linearGradient
          id="F"
          x1="251.358"
          x2="251.358"
          y1="374.082"
          y2="726.435"
          xlinkHref="#I"
        >
          <stop stop-color="#2575fc" stop-opacity="0" />
          <stop offset="1" stop-color="#6a11cb" />
        </linearGradient>
        <linearGradient
          id="G"
          x1="337.346"
          x2="337.346"
          y1="37.663"
          y2="726.435"
          xlinkHref="#I"
        >
          <stop offset=".09" stop-color="#6a11cb" />
          <stop offset=".99" stop-color="#2575fc" stop-opacity=".2" />
        </linearGradient>
        <linearGradient
          id="H"
          x1="132.632"
          x2="132.632"
          y1="232.41"
          y2="451.262"
          xlinkHref="#I"
        >
          <stop stop-color="#2575fc" stop-opacity=".3" />
          <stop offset=".68" stop-color="#6a11cb" stop-opacity=".3" />
        </linearGradient>
        <linearGradient id="I" gradientUnits="userSpaceOnUse" />
      </defs>
    </svg>
  );
}
