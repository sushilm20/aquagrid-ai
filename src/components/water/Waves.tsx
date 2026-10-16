import { useReducedMotion } from "motion/react";
import { Fish } from "./Fish";

const WAVE_PATH =
  "M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 C1680,96 1920,32 2160,64 C2400,96 2640,32 2880,64 L2880,160 L0,160 Z";

/** Three drifting wave layers for the hero (pure CSS animation). */
export function HeroWaves() {
  const reduced = useReducedMotion();
  const layers = [
    { fill: "rgba(10,165,194,0.16)", dur: "26s", bottom: 0, opacity: 1 },
    { fill: "rgba(34,211,238,0.10)", dur: "18s", bottom: 18, opacity: 1 },
    { fill: "rgba(103,232,249,0.07)", dur: "12s", bottom: 36, opacity: 1 },
  ];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 overflow-hidden" aria-hidden="true">
      {layers.map((l, i) => (
        <svg
          key={i}
          className="wave-layer"
          style={{ bottom: l.bottom, animationDuration: reduced ? "0.01ms" : l.dur, opacity: l.opacity }}
          viewBox="0 0 2880 160"
          preserveAspectRatio="none"
        >
          <path d={WAVE_PATH} fill={l.fill} />
        </svg>
      ))}
    </div>
  );
}

/** Wave divider between sections. `fill` = color of the section ABOVE (paints the wave).
 *  `fish` = number of small fish swimming through the divider. */
export function WaveDivider({ fill, flip = false, className = "", fish = 0 }: { fill: string; flip?: boolean; className?: string; fish?: number }) {
  const reduced = useReducedMotion();
  return (
    <div className={`pointer-events-none relative h-[64px] w-full overflow-hidden md:h-[88px] ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,0 L2880,0 L2880,40 C2640,90 2400,20 2160,55 C1920,90 1680,25 1440,60 C1200,95 960,30 720,62 C480,94 240,34 0,66 Z"
          fill={fill}
        />
      </svg>
      {!reduced && fish > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: fish }, (_, i) => (
            <div
              key={i}
              className={`fish-swimmer${i % 2 ? " rev" : ""}`}
              style={{
                top: `${28 + ((i * 31) % 44)}%`,
                opacity: 0.55,
                animationDuration: `${26 + i * 7}s`,
                animationDelay: `${-i * 11}s`,
              }}
            >
              <div style={i % 2 ? { transform: "scaleX(-1)" } : undefined}>
                <Fish size={20 + (i % 2) * 8} color={i % 2 ? "#5eead4" : "#67e8f9"} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
