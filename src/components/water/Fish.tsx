import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

interface FishSpec {
  top: number;
  size: number;
  dur: number;
  delay: number;
  op: number;
  reverse: boolean;
  hue: number;
}

/** A single stylized fish (side view, facing right). Tail wags via CSS. */
export function Fish({
  size = 30,
  color = "#67e8f9",
  className = "",
  style,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 40 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* tail (wags) */}
      <g className="fish-tail">
        <path d="M9,12 L-1,4 L-1,20 Z" fill={color} opacity="0.85" />
      </g>
      {/* body */}
      <path
        d="M9,12 C14,5 26,4 35,12 C26,20 14,19 9,12 Z"
        fill={color}
        opacity="0.9"
      />
      {/* dorsal fin */}
      <path d="M18,7 L23,2 L26,7 Z" fill={color} opacity="0.7" />
      {/* belly highlight */}
      <path d="M12,14 C18,17 26,17 32,13" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* eye */}
      <circle cx="29" cy="10.5" r="2" fill="#ffffff" opacity="0.95" />
      <circle cx="29.5" cy="10.5" r="1" fill="#062335" />
    </svg>
  );
}

const HUES = ["#67e8f9", "#22d3ee", "#a5f3fc", "#5eead4", "#7dd3fc"];

/**
 * A school of fish swimming across a container, looping seamlessly.
 * Each fish varies in depth (scale/opacity), speed, and vertical position.
 * Respects prefers-reduced-motion (renders nothing).
 */
export function FishSchool({ count = 5, className = "" }: { count?: number; className?: string }) {
  const reduced = useReducedMotion();
  const fish = useMemo<FishSpec[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        top: 12 + ((i * 53 + 7) % 68),
        size: 20 + ((i * 31) % 26),
        dur: 22 + ((i * 47) % 20),
        delay: -((i * 37) % 30),
        op: 0.35 + ((i * 23) % 45) / 100,
        reverse: i % 3 === 2,
        hue: i % HUES.length,
      })),
    [count]
  );
  if (reduced) return null;
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {fish.map((f, i) => (
        <div
          key={i}
          className={`fish-swimmer${f.reverse ? " rev" : ""}`}
          style={{
            top: `${f.top}%`,
            opacity: f.op,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <div style={f.reverse ? { transform: "scaleX(-1)" } : undefined}>
            <Fish size={f.size} color={HUES[f.hue]} />
          </div>
        </div>
      ))}
    </div>
  );
}
