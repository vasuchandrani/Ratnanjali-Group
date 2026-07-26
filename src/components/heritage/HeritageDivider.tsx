/**
 * HeritageDivider — Configurable SVG Section Divider
 *
 * Variants inspired by different heritage threads:
 * - jali: Jain temple lattice pattern
 * - lotus: Buddhist lotus medallion
 * - chakra: Dharma-chakra wheel dots
 * - wave: Temple arch/gopuram silhouette
 */

interface HeritageDividerProps {
  variant?: "jali" | "lotus" | "chakra" | "wave";
  className?: string;
  color?: string;
}

export function HeritageDivider({
  variant = "jali",
  className = "",
  color = "var(--gold)",
}: HeritageDividerProps) {
  const dividers: Record<string, React.JSX.Element> = {
    jali: (
      <svg
        viewBox="0 0 800 40"
        className={`w-full h-10 ${className}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Central diamond motif */}
        <path
          d="M380 20 L400 5 L420 20 L400 35 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="400" cy="20" r="3" fill={color} opacity="0.4" />
        {/* Left lattice */}
        {[...Array(6)].map((_, i) => (
          <g key={`l${i}`}>
            <path
              d={`M${360 - i * 40} 20 L${370 - i * 40} 10 L${380 - i * 40} 20 L${370 - i * 40} 30 Z`}
              fill="none"
              stroke={color}
              strokeWidth="0.6"
              opacity={0.4 - i * 0.05}
            />
          </g>
        ))}
        {/* Right lattice */}
        {[...Array(6)].map((_, i) => (
          <g key={`r${i}`}>
            <path
              d={`M${420 + i * 40} 20 L${430 + i * 40} 10 L${440 + i * 40} 20 L${430 + i * 40} 30 Z`}
              fill="none"
              stroke={color}
              strokeWidth="0.6"
              opacity={0.4 - i * 0.05}
            />
          </g>
        ))}
        {/* Connecting lines */}
        <line x1="120" y1="20" x2="370" y2="20" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="430" y1="20" x2="680" y2="20" stroke={color} strokeWidth="0.4" opacity="0.2" />
      </svg>
    ),

    lotus: (
      <svg
        viewBox="0 0 800 50"
        className={`w-full h-12 ${className}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Central lotus */}
        {[0, 45, 90, 135].map((angle) => (
          <ellipse
            key={angle}
            cx="400"
            cy="25"
            rx="6"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
            opacity="0.5"
            transform={`rotate(${angle} 400 25)`}
          />
        ))}
        <circle cx="400" cy="25" r="3" fill={color} opacity="0.4" />
        {/* Side lines */}
        <line x1="100" y1="25" x2="380" y2="25" stroke={color} strokeWidth="0.5" opacity="0.2" />
        <line x1="420" y1="25" x2="700" y2="25" stroke={color} strokeWidth="0.5" opacity="0.2" />
        {/* Small dots */}
        {[-3, -2, -1, 1, 2, 3].map((n) => (
          <circle
            key={n}
            cx={400 + n * 60}
            cy="25"
            r="1.5"
            fill={color}
            opacity={0.3 - Math.abs(n) * 0.05}
          />
        ))}
      </svg>
    ),

    chakra: (
      <svg
        viewBox="0 0 800 30"
        className={`w-full h-8 ${className}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Central dot */}
        <circle cx="400" cy="15" r="4" fill={color} opacity="0.5" />
        {/* Radiating dots */}
        {[...Array(11)].map((_, i) => {
          const offset = (i - 5) * 30;
          const op = 0.45 - Math.abs(i - 5) * 0.07;
          return (
            <g key={i}>
              <circle cx={400 + offset} cy="15" r={i === 5 ? 0 : 2} fill={color} opacity={op} />
            </g>
          );
        })}
        {/* Fine connecting lines */}
        <line x1="200" y1="15" x2="370" y2="15" stroke={color} strokeWidth="0.3" opacity="0.15" />
        <line x1="430" y1="15" x2="600" y2="15" stroke={color} strokeWidth="0.3" opacity="0.15" />
      </svg>
    ),

    wave: (
      <svg
        viewBox="0 0 800 40"
        className={`w-full h-10 ${className}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Gopuram/temple arch silhouette */}
        <path
          d="M370 35 Q385 5 400 5 Q415 5 430 35"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M380 35 Q392 12 400 12 Q408 12 420 35"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
          opacity="0.3"
        />
        <circle cx="400" cy="8" r="2" fill={color} opacity="0.4" />
        {/* Side rules */}
        <line x1="100" y1="35" x2="365" y2="35" stroke={color} strokeWidth="0.5" opacity="0.2" />
        <line x1="435" y1="35" x2="700" y2="35" stroke={color} strokeWidth="0.5" opacity="0.2" />
      </svg>
    ),
  };

  return dividers[variant] || dividers.jali;
}
