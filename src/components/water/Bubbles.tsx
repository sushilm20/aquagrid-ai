import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

interface BubbleSpec {
  left: number;
  size: number;
  dur: number;
  delay: number;
  op: number;
}

/** Randomized rising bubble particles (CSS animation). */
export default function Bubbles({ count = 22, className = "" }: { count?: number; className?: string }) {
  const reduced = useReducedMotion();
  const bubbles = useMemo<BubbleSpec[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97.3 + 13) % 100,
        size: 4 + ((i * 37) % 14),
        dur: 9 + ((i * 53) % 14),
        delay: -((i * 29) % 20),
        op: 0.25 + ((i * 17) % 40) / 100,
      })),
    [count]
  );
  if (reduced) return null;
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            ["--bop" as string]: b.op,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
