import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
  size?: number;
  height?: number;
  width?: number;
}

export const LogoFirst: React.FC<SVGIconProps> = ({
  fill = "currentColor",
  stroke = "none",
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    fill={fill}
    stroke={stroke}
    viewBox="0 0 250 250"
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMidYMid meet"
    {...props} // spreads any additional SVG props
  >
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
        <feGaussianBlur result="blurOut" stdDeviation="5" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <circle
      cx="125"
      cy="125"
      r="110"
      fill="url(#grad2)"
      filter="url(#shadow)"
    />
    <text
      x="35"
      y="150"
      fill="white"
      fontFamily="'Courier New', Courier, monospace"
      fontSize="70"
      fontWeight="bold"
    >
      {"<"}
    </text>
    <text
      x="180"
      y="150"
      fill="white"
      fontFamily="'Courier New', Courier, monospace"
      fontSize="70"
      fontWeight="bold"
    >
      {"/>"}
    </text>
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="100"
      dy=".35em"
      fontWeight="bold"
    >
      A
    </text>
  </svg>
);

export const LogoIcon: React.FC<SVGIconProps> = ({
  fill = "none",
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

export const Sun: React.FC<SVGIconProps> = ({
  fill = "none",
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sun"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
export const Moon: React.FC<SVGIconProps> = ({
  fill = "none",
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sun"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
