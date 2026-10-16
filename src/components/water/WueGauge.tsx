import { useReducedMotion } from "motion/react";

/** Band color for a WUE value: cyan (great) -> amber -> red (poor). */
function bandColor(wue: number): string {
  if (wue < 0.5) return "#22d3ee";
  if (wue < 1.0) return "#34d399";
  if (wue < 2.0) return "#fbbf24";
  return "#ff6b6f";
}

/**
 * Circular WUE gauge with an animated wave surface for the fill level.
 * value normalized between min..max.
 */
export default function WueGauge({
  value,
  min = 0,
  max = 2.5,
  size = 190,
  label = "WUE",
}: {
  value: number;
  min?: number;
  max?: number;
  size?: number;
  label?: string;
}) {
  const reduced = useReducedMotion();
  const frac = Math.min(1, Math.max(0, (value - min) / (max - min)));
  const color = bandColor(value);
  const r = 80;
  const c = 100;
  const waterY = 180 - frac * 150; // water surface height inside 200 box

  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 200 200">
        <defs>
          <clipPath id="gaugeClip">
            <circle cx={c} cy={c} r={r} />
          </clipPath>
          <linearGradient id="gaugeWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.85" />
            <stop offset="1" stopColor={color} stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* outer ring */}
        <circle cx={c} cy={c} r={r} fill="#04121d" stroke={color} strokeOpacity="0.5" strokeWidth="3" />
        <circle cx={c} cy={c} r={r - 8} fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />

        {/* water fill with animated wave surface */}
        <g clipPath="url(#gaugeClip)">
          <rect x="0" y={waterY} width="200" height={200 - waterY} fill="url(#gaugeWater)" />
          <g className={reduced ? "" : "gauge-wave"}>
            <path
              d={`M-40,${waterY} C-10,${waterY - 10} 20,${waterY + 10} 50,${waterY} C80,${waterY - 10} 110,${waterY + 10} 140,${waterY} C170,${waterY - 10} 200,${waterY + 10} 230,${waterY} L230,200 L-40,200 Z`}
              fill={color}
              opacity="0.9"
            />
          </g>
          {/* rising shimmer bubbles */}
          {!reduced && (
            <g fill="#ffffff" opacity="0.35">
              <circle cx="70" cy={waterY + 40} r="3">
                <animate attributeName="cy" values={`${waterY + 60};${waterY + 8}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy={waterY + 55} r="2.2">
                <animate attributeName="cy" values={`${waterY + 70};${waterY + 10}`} dur="4s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0" dur="4s" begin="1s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </g>

        {/* band ticks */}
        <g stroke="#7fa8bb" strokeOpacity="0.5" strokeWidth="1.5">
          {[0.5, 1.0, 2.0].map((t) => {
            const f = (t - min) / (max - min);
            const a = Math.PI * (1 - f); // semicircle mapping
            const x1 = c + 86 * Math.cos(a);
            const y1 = c - 86 * Math.sin(a);
            const x2 = c + 94 * Math.cos(a);
            const y2 = c - 94 * Math.sin(a);
            return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* value text */}
        <text x={c} y={c - 2} textAnchor="middle" fill="#ffffff" fontSize="30" fontWeight="900" fontFamily="inherit">
          {value.toFixed(2)}
        </text>
        <text x={c} y={c + 22} textAnchor="middle" fill="#7fa8bb" fontSize="12" fontWeight="700" fontFamily="inherit">
          {label} · L/kWh
        </text>
      </svg>
      <div className="mt-1 flex gap-3 text-[11px] font-bold text-[#7fa8bb]">
        <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#22d3ee]" />&lt;0.5 world-class</span>
        <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#fbbf24]" />1–2 avg</span>
        <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#ff6b6f]" />&gt;2 poor</span>
      </div>
    </div>
  );
}
