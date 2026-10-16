import { useReducedMotion } from "motion/react";

/**
 * Stylized cooling-tower illustration: animated steam wisps rising,
 * animated water flow lines inside, labeled evaporation / blowdown / drift.
 * Pure SVG + CSS, no new deps.
 */
export default function CoolingTower() {
  const reduced = useReducedMotion();
  return (
    <div className="glass overflow-hidden rounded-2xl p-4 md:p-6" aria-hidden="true">
      <svg viewBox="0 0 560 380" className="h-auto w-full" role="img" aria-label="Cooling tower water-loss diagram">
        <defs>
          <linearGradient id="towerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d3a52" />
            <stop offset="1" stopColor="#062335" />
          </linearGradient>
          <linearGradient id="towerRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#67e8f9" stopOpacity="0.55" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="1" stopColor="#0aa5c2" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="steamG" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#e0faff" stopOpacity="0.75" />
            <stop offset="1" stopColor="#e0faff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ground */}
        <ellipse cx="280" cy="352" rx="230" ry="16" fill="#04121d" />
        <ellipse cx="280" cy="348" rx="230" ry="14" fill="none" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="1.5" />

        {/* tower shell (hyperboloid silhouette) */}
        <path
          d="M170,120 C185,190 175,260 150,340 L410,340 C385,260 375,190 390,120 Z"
          fill="url(#towerBody)"
          stroke="#67e8f9"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        {/* rim glow */}
        <ellipse cx="280" cy="120" rx="110" ry="18" fill="none" stroke="url(#towerRim)" strokeWidth="3" />

        {/* internal water flow lines (animated dashes) */}
        {!reduced && (
          <g>
            <path d="M215,160 C225,220 215,280 205,330" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" className="flow-line" opacity="0.8" />
            <path d="M280,165 C280,225 280,285 280,332" fill="none" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" className="flow-line-fast" opacity="0.9" />
            <path d="M345,160 C335,220 345,280 355,330" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" className="flow-line" opacity="0.8" style={{ animationDelay: "-0.5s" }} />
          </g>
        )}
        {/* basin water */}
        <path d="M152,318 L408,318 L404,340 L156,340 Z" fill="url(#waterFill)" opacity="0.75" />

        {/* steam wisps (evaporation) */}
        {!reduced ? (
          <g>
            {[0, 1, 2, 3].map((i) => (
              <g key={i} className="steam" style={{ animationDelay: `${i * 0.85}s` }}>
                <ellipse cx={225 + i * 38} cy={78} rx="26" ry="34" fill="url(#steamG)" />
                <path
                  d={`M${225 + i * 38},100 q-10,-18 4,-32 q12,-12 2,-30`}
                  fill="none"
                  stroke="#e0faff"
                  strokeOpacity="0.5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </g>
        ) : (
          <g opacity="0.5">
            <ellipse cx="280" cy="72" rx="90" ry="30" fill="url(#steamG)" />
          </g>
        )}

        {/* drift: side mist puffs */}
        <g opacity="0.55">
          <circle cx="132" cy="200" r="9" fill="url(#steamG)" className={reduced ? "" : "steam"} style={{ animationDelay: "-1.2s" }} />
          <circle cx="428" cy="230" r="11" fill="url(#steamG)" className={reduced ? "" : "steam"} style={{ animationDelay: "-2.1s" }} />
          <circle cx="120" cy="260" r="7" fill="url(#steamG)" className={reduced ? "" : "steam"} style={{ animationDelay: "-0.4s" }} />
        </g>

        {/* blowdown: bottom drain arrow */}
        <g>
          <line x1="280" y1="340" x2="280" y2="366" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 5" className={reduced ? "" : "flow-line"} />
          <path d="M272,360 L280,370 L288,360" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* labels with leader lines */}
        <g fontFamily="inherit" fontSize="13" fontWeight="800">
          <line x1="390" y1="60" x2="470" y2="40" stroke="#67e8f9" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="390" cy="60" r="3.5" fill="#22d3ee" />
          <text x="476" y="44" fill="#a5f3fc">Evaporation ~75%</text>

          <line x1="424" y1="222" x2="486" y2="210" stroke="#67e8f9" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="424" cy="222" r="3.5" fill="#22d3ee" />
          <text x="492" y="214" fill="#a5f3fc">Drift ~3%</text>

          <line x1="296" y1="352" x2="380" y2="352" stroke="#fbbf24" strokeOpacity="0.7" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="296" cy="352" r="3.5" fill="#fbbf24" />
          <text x="386" y="356" fill="#fcd34d">Blowdown ~22%</text>
        </g>

        {/* sensor nodes */}
        <g>
          <circle cx="205" cy="240" r="7" fill="#03121e" stroke="#22d3ee" strokeWidth="2.5" />
          <circle cx="205" cy="240" r="2.6" fill="#22d3ee" />
          <circle cx="355" cy="290" r="7" fill="#03121e" stroke="#22d3ee" strokeWidth="2.5" />
          <circle cx="355" cy="290" r="2.6" fill="#22d3ee" />
          <text x="150" y="222" fill="#7fa8bb" fontSize="11" fontWeight="700">FLOW</text>
          <text x="368" y="294" fill="#7fa8bb" fontSize="11" fontWeight="700">TDS</text>
        </g>
      </svg>
      <p className="mt-2 text-center text-[12px] text-[#7fa8bb]">
        AquaGrid sensor nodes ride the tower shell — flow + conductivity feed the cycles-of-concentration loop live.
      </p>
    </div>
  );
}
