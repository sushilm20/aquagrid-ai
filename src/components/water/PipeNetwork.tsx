import { useReducedMotion } from "motion/react";

export type PipePhase = "normal" | "leak" | "contained";

/**
 * Animated pipe network: cooling tower -> sensor node -> valve -> return loop.
 * Flow dashes animate; on leak a red breach pulses and downstream flow stops;
 * on contained the valve animates shut and flow resumes past it.
 */
export default function PipeNetwork({ phase }: { phase: PipePhase }) {
  const reduced = useReducedMotion();
  const leak = phase === "leak";
  const contained = phase === "contained";
  const flowCls = (stopped: boolean) =>
    reduced ? "" : stopped ? "flow-stopped" : "flow-line";

  return (
    <svg viewBox="0 0 640 210" className="h-auto w-full" role="img" aria-label="Sensor pipe network diagram">
      <defs>
        <linearGradient id="pipeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d3a52" />
          <stop offset="1" stopColor="#062335" />
        </linearGradient>
        <linearGradient id="waterPipe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0aa5c2" />
          <stop offset="0.5" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#0aa5c2" />
        </linearGradient>
        <radialGradient id="breachG" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff6b6f" stopOpacity="0.9" />
          <stop offset="1" stopColor="#cd040b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* pipe bodies */}
      <g>
        <rect x="90" y="88" width="150" height="34" rx="17" fill="url(#pipeG)" stroke="#67e8f9" strokeOpacity="0.3" strokeWidth="1.5" />
        <rect x="300" y="88" width="130" height="34" rx="17" fill="url(#pipeG)" stroke="#67e8f9" strokeOpacity="0.3" strokeWidth="1.5" />
        <rect x="490" y="88" width="110" height="34" rx="17" fill="url(#pipeG)" stroke="#67e8f9" strokeOpacity="0.3" strokeWidth="1.5" />
      </g>

      {/* water flow inside pipes */}
      <g>
        <line x1="100" y1="105" x2="230" y2="105" stroke="url(#waterPipe)" strokeWidth="7" strokeLinecap="round" className={flowCls(false)} opacity="0.9" />
        <line
          x1="310" y1="105" x2="420" y2="105"
          stroke={leak ? "#ff6b6f" : "url(#waterPipe)"}
          strokeWidth="7"
          strokeLinecap="round"
          className={flowCls(leak)}
          opacity="0.9"
        />
        <line x1="500" y1="105" x2="590" y2="105" stroke="url(#waterPipe)" strokeWidth="7" strokeLinecap="round" className={flowCls(false)} opacity="0.9" />
      </g>

      {/* cooling tower node */}
      <g>
        <circle cx="60" cy="105" r="30" fill="#0d3a52" stroke="#22d3ee" strokeWidth="2" />
        <path d="M48,92 L52,118 L68,118 L72,92 Z" fill="none" stroke="#67e8f9" strokeWidth="2.5" />
        <text x="60" y="162" textAnchor="middle" fill="#7fa8bb" fontSize="11" fontWeight="700">COOLING TOWER</text>
      </g>

      {/* sensor node */}
      <g>
        <rect x="248" y="78" width="52" height="54" rx="10" fill="#03121e" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="274" cy="105" r="9" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        <circle cx="274" cy="105" r="3.5" fill={leak ? "#ff6b6f" : "#22d3ee"}>
          {!reduced && leak && <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />}
        </circle>
        <text x="274" y="152" textAnchor="middle" fill="#7fa8bb" fontSize="11" fontWeight="700">R-14 SENSOR</text>
      </g>

      {/* valve V-C3 */}
      <g>
        <circle cx="460" cy="105" r="24" fill="#03121e" stroke={contained ? "#34d399" : "#67e8f9"} strokeWidth="2.5" />
        <g
          style={{
            transformOrigin: "460px 105px",
            transform: contained ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.8s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <line x1="446" y1="105" x2="474" y2="105" stroke={contained ? "#34d399" : "#a5f3fc"} strokeWidth="5" strokeLinecap="round" />
          <line x1="460" y1="91" x2="460" y2="105" stroke={contained ? "#34d399" : "#a5f3fc"} strokeWidth="5" strokeLinecap="round" />
        </g>
        <text x="460" y="152" textAnchor="middle" fill="#7fa8bb" fontSize="11" fontWeight="700">
          VALVE V-C3 {contained ? "· SHUT" : "· OPEN"}
        </text>
      </g>

      {/* return node */}
      <g>
        <circle cx="620" cy="105" r="14" fill="#0d3a52" stroke="#22d3ee" strokeWidth="2" />
        <text x="620" y="140" textAnchor="middle" fill="#7fa8bb" fontSize="11" fontWeight="700">LOOP</text>
      </g>

      {/* leak breach */}
      {leak && (
        <g>
          <circle cx="365" cy="105" r="26" fill="url(#breachG)" className={reduced ? "" : "pulse-ring"} />
          <circle cx="365" cy="105" r="7" fill="#ff6b6f" className={reduced ? "" : "breach-dot"} />
          {!reduced && (
            <g>
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={358 + i * 7} cy={122 + (i % 2) * 8} r="3.2" fill="#67e8f9" opacity="0.85">
                  <animate attributeName="cy" values="118;142" dur="0.9s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0" dur="0.9s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          )}
          <text x="365" y="52" textAnchor="middle" fill="#ff8a8e" fontSize="13" fontWeight="800">LEAK — ZONE C</text>
        </g>
      )}

      {/* contained check */}
      {contained && !reduced && (
        <g>
          <circle cx="365" cy="105" r="13" fill="#03121e" stroke="#34d399" strokeWidth="2.5" />
          <path d="M358,105 l5,5 l9,-10" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {/* LTE-M link arcs */}
      {!reduced && (
        <g stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.6" fill="none">
          <path d="M274,78 q0,-22 22,-22 q22,0 22,22" className="flow-line" opacity="0.7" />
          <path d="M274,132 q0,20 -20,26" opacity="0.4" />
        </g>
      )}
      <text x="320" y="40" fill="#7fa8bb" fontSize="11" fontWeight="700">LTE-M · edge AI &lt; 1s</text>
    </svg>
  );
}
