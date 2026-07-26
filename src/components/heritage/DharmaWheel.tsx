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
  const spokes = 24;
  const center = size / 2;
  const outerR = size / 2 - 2;
  const innerR = size / 2 - 14;
  const hubR = size * 0.12;
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
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* Inner rim */}
      <circle
        cx={center}
        cy={center}
        r={innerR}
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Hub */}
      <circle
        cx={center}
        cy={center}
        r={hubR}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.9"
      />
      <circle
        cx={center}
        cy={center}
        r={hubR * 0.4}
        fill={color}
        opacity="0.6"
      />

      {/* Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        const x1 = r4(center + hubR * Math.cos(rad));
        const y1 = r4(center + hubR * Math.sin(rad));
        const x2 = r4(center + innerR * Math.cos(rad));
        const y2 = r4(center + innerR * Math.sin(rad));

        // Alternating spoke styles for dharma-chakra authenticity
        const isMain = i % 3 === 0;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={isMain ? "1.2" : "0.5"}
            opacity={isMain ? 0.8 : 0.4}
          />
        );
      })}

      {/* Decorative dots between inner and outer rim */}
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
            r="2"
            fill={color}
            opacity="0.35"
          />
        );
      })}
    </svg>
  );
}
