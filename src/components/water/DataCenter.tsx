import { useReducedMotion } from "motion/react";

/**
 * Hand-built SVG: a sealed underwater data-center pod (Natick-style)
 * resting on the seabed — glowing server racks visible through portholes,
 * blinking status LEDs, light rays from above, rising vent bubbles.
 */
export default function DataCenterScene({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const leds = [
    { x: 248, y: 178 }, { x: 258, y: 178 }, { x: 268, y: 178 },
    { x: 318, y: 178 }, { x: 328, y: 178 },
    { x: 388, y: 178 }, { x: 398, y: 178 }, { x: 408, y: 178 },
  ];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#22d3ee]/15 bg-[#020d16] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 640 360" className="block h-auto w-full" role="img">
        <defs>
          <linearGradient id="dcHull" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a6b84" />
            <stop offset="0.45" stopColor="#2b4a61" />
            <stop offset="1" stopColor="#16293a" />
          </linearGradient>
          <linearGradient id="dcRay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a5f3fc" stopOpacity="0.28" />
            <stop offset="1" stopColor="#a5f3fc" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="dcGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dcSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#123043" />
            <stop offset="1" stopColor="#081a28" />
          </linearGradient>
        </defs>

        {/* light rays from the surface */}
        {!reduced && (
          <g>
            <polygon className="ray" points="120,-10 200,-10 150,220 60,220" fill="url(#dcRay)" />
            <polygon className="ray" style={{ animationDelay: "-2.4s" }} points="300,-10 360,-10 340,240 260,240" fill="url(#dcRay)" opacity="0.7" />
            <polygon className="ray" style={{ animationDelay: "-4.8s" }} points="470,-10 540,-10 520,210 440,210" fill="url(#dcRay)" opacity="0.5" />
          </g>
        )}

        {/* ambient glow behind pod */}
        <ellipse cx="320" cy="195" rx="230" ry="90" fill="url(#dcGlow)" />

        {/* seabed */}
        <ellipse cx="320" cy="352" rx="360" ry="52" fill="url(#dcSand)" />
        <g fill="#1d3a4f" opacity="0.8">
          <ellipse cx="120" cy="338" rx="26" ry="7" />
          <ellipse cx="520" cy="344" rx="34" ry="8" />
          <ellipse cx="430" cy="330" rx="18" ry="5" />
        </g>

        {/* landing skids */}
        <rect x="215" y="252" width="14" height="42" rx="6" fill="#0e2233" />
        <rect x="411" y="252" width="14" height="42" rx="6" fill="#0e2233" />
        <rect x="200" y="290" width="240" height="12" rx="6" fill="#0a1a28" />

        {/* pod hull */}
        <rect x="170" y="150" width="300" height="104" rx="52" fill="url(#dcHull)" stroke="#67e8f9" strokeOpacity="0.35" strokeWidth="2" />
        {/* end caps */}
        <ellipse cx="170" cy="202" rx="16" ry="52" fill="#0e2233" stroke="#67e8f9" strokeOpacity="0.25" strokeWidth="1.5" />
        <ellipse cx="470" cy="202" rx="16" ry="52" fill="#0e2233" stroke="#67e8f9" strokeOpacity="0.25" strokeWidth="1.5" />
        {/* hull highlight */}
        <rect x="196" y="160" width="248" height="14" rx="7" fill="#ffffff" opacity="0.10" />

        {/* top hatch + beacon */}
        <rect x="306" y="128" width="28" height="24" rx="8" fill="#1d3446" stroke="#67e8f9" strokeOpacity="0.3" />
        <line x1="320" y1="128" x2="320" y2="106" stroke="#67e8f9" strokeWidth="3" />
        {!reduced && <circle cx="320" cy="100" r="6" fill="#22d3ee" className="led" />}

        {/* portholes with glowing server racks */}
        {[232, 320, 408].map((cx, pi) => (
          <g key={cx}>
            <circle cx={cx} cy={202} r="30" fill="#04121d" stroke="#9db9c9" strokeWidth="4" />
            <circle cx={cx} cy={202} r="30" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            {/* rack */}
            <rect x={cx - 16} y={184} width="32" height="36" rx="3" fill="#0a1f2e" stroke="#22d3ee" strokeOpacity="0.5" />
            {[190, 198, 206, 214].map((ry) => (
              <rect key={ry} x={cx - 12} y={ry} width="24" height="5" rx="1.5" fill="#123043" />
            ))}
            {/* blinking status LEDs */}
            {!reduced &&
              leds
                .filter((_, li) => li % 3 === pi % 3)
                .map((l, li) => (
                  <circle
                    key={li}
                    cx={cx - 16 + ((l.x * 7 + pi * 13 + li * 11) % 32)}
                    cy={190 + ((li * 8 + pi * 5) % 28)}
                    r="2.2"
                    fill={li % 2 ? "#34d399" : "#22d3ee"}
                    className="led"
                    style={{ animationDelay: `${(li * 0.5 + pi * 0.7) % 2}s` }}
                  />
                ))}
            {/* glass reflection */}
            <path d={`M${cx - 18},${188} a22,22 0 0 1 14,-12`} stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" fill="none" />
          </g>
        ))}

        {/* hull stencil */}
        <text x="320" y="246" textAnchor="middle" fill="#9db9c9" fontSize="11" fontWeight="800" letterSpacing="4" opacity="0.8" fontFamily="inherit">
          AQUAGRID · POD-07
        </text>

        {/* vent bubbles */}
        {!reduced && (
          <g fill="#a5f3fc">
            <circle cx="205" cy="150" r="3.5" className="svg-bubble" style={{ animationDelay: "0s" }} />
            <circle cx="222" cy="150" r="2.5" className="svg-bubble" style={{ animationDelay: "1.4s" }} />
            <circle cx="430" cy="150" r="3" className="svg-bubble" style={{ animationDelay: "0.8s" }} />
            <circle cx="445" cy="150" r="2" className="svg-bubble" style={{ animationDelay: "2.1s" }} />
          </g>
        )}
      </svg>
      <div className="border-t border-[#22d3ee]/10 bg-[#03121e]/80 px-5 py-3 text-[12.5px] text-[#7fa8bb]">
        Concept visual — a sealed compute pod cooled by the ocean itself. AquaGrid's sensors watch the <em>other</em> 99% of
        facilities: the evaporative-cooled halls on land.
      </div>
    </div>
  );
}
