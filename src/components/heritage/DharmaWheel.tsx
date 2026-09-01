/** Round to avoid SSR/client hydration float mismatches */
const r4 = (n: number) => Math.round(n * 10000) / 10000;

/**
 * DharmaWheel — CSS 3D Chariot-Wheel / Dharma-Chakra SVG Component
 *
 * Heritage thread: Mahabharata (chariot wheel, Krishna's counsel) + Buddhism (Dharma Chakra)
 * Used as: preloader animation, background accent in Stats, loading spinner
 */

interface DharmaWheelProps {
  size?: number;
  className?: string;
  animate?: boolean;
  slow?: boolean;
  color?: string;
  opacity?: number;
}

export function DharmaWheel({
  size = 120,
  className = "",
  animate = false,
  slow = false,
  color = "var(--gold)",
  opacity = 1,
}: DharmaWheelProps) {
  const spokes = 20;
  const center = size / 2;
  const outerR = size * 0.44;
  const innerR = size * 0.35;
  const hubOuterR = size * 0.11;
  const hubInnerR = size * 0.07;
  const centerDotR = size * 0.035;
  const animClass = animate ? (slow ? "wheel-spin-slow" : "wheel-spin") : "";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`${animClass} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer rim */}
      <circle
        cx={center}
        cy={center}
        r={outerR}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        opacity="0.85"
      />
      {/* Inner rim */}
      <circle
        cx={center}
        cy={center}
        r={innerR}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.7"
      />
      {/* Hub outer ring */}
      <circle
        cx={center}
        cy={center}
        r={hubOuterR}
        fill="none"
        stroke={color}
        strokeWidth="1.3"
        opacity="0.9"
      />
      {/* Hub inner ring */}
      <circle
        cx={center}
        cy={center}
        r={hubInnerR}
        fill="none"
        stroke={color}
        strokeWidth="1.0"
        opacity="0.8"
      />
      {/* Center solid dot */}
      <circle
        cx={center}
        cy={center}
        r={centerDotR}
        fill={color}
        opacity="0.9"
      />

      {/* 20 Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        const x1 = r4(center + hubOuterR * Math.cos(rad));
        const y1 = r4(center + hubOuterR * Math.sin(rad));
        const x2 = r4(center + innerR * Math.cos(rad));
        const y2 = r4(center + innerR * Math.sin(rad));

        const isCardinal = i % 5 === 0;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={isCardinal ? "1.4" : "0.9"}
            opacity={isCardinal ? 0.95 : 0.65}
          />
        );
      })}

      {/* 8 Rivet dots in outer band */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad = (angle * Math.PI) / 180;
        const midR = (innerR + outerR) / 2;
        const cx = r4(center + midR * Math.cos(rad));
        const cy = r4(center + midR * Math.sin(rad));
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r={size * 0.013}
            fill={color}
            opacity="0.75"
          />
        );
      })}
    </svg>
  );
}
