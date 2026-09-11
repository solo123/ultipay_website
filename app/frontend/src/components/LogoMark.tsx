import { useId } from "react";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * 益字标：新中式「天圆地方」+ 双环玉璧。
 * 益取「器满则溢」，上两点为溢出之水，下为承器之皿。
 */
const LogoMark = ({ size = 36, className = "" }: LogoMarkProps) => {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="6" y1="2" x2="60" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#071628" />
          <stop offset="38%" stopColor="#14356F" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id={`${uid}-jade`} x1="18" y1="6" x2="50" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="55%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id={`${uid}-yi`} x1="32" y1="16" x2="32" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6E4FF" />
        </linearGradient>
      </defs>

      {/* 地方 */}
      <rect x="1.5" y="1.5" width="61" height="61" rx="18" fill={`url(#${uid}-bg)`} />

      {/* 玉质高光 */}
      <path
        d="M15 17C24 8 41 8 50 17"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* 玉璧双环 */}
      <circle cx="32" cy="32.5" r="24" stroke={`url(#${uid}-jade)`} strokeWidth="1.9" />
      <circle cx="32" cy="32.5" r="21.2" stroke={`url(#${uid}-jade)`} strokeWidth="0.7" opacity="0.45" />

      {/* 璧顶翠珠 */}
      <circle cx="32" cy="8.6" r="2.15" fill={`url(#${uid}-jade)`} />
      <circle cx="31.4" cy="7.9" r="0.7" fill="white" fillOpacity="0.55" />

      {/* 益 */}
      <g
        stroke={`url(#${uid}-yi)`}
        strokeWidth="3.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23.8 25.4L29.4 19.2" />
        <path d="M40.2 25.4L34.6 19.2" />
        <path d="M20.8 29.6H43.2" />
        <path d="M22.4 36H41.6" />
        <path d="M22.4 36V47" />
        <path d="M41.6 36V47" />
        <path d="M22.4 47H41.6" />
        <path d="M32 36V47" />
      </g>
    </svg>
  );
};

export default LogoMark;
