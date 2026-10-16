import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import PipeNetwork from "@/components/water/PipeNetwork";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type Phase = "normal" | "leak" | "contained";

function useJitter(base: number, amp: number, ms: number, active: boolean) {
  const [v, setV] = useState(base);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setV(base + (Math.random() - 0.5) * amp), ms);
    return () => clearInterval(id);
  }, [base, amp, ms, active]);
  return v;
}

export default function Demo() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("normal");
  const [saved, setSaved] = useState(0);
  const [leakRate, setLeakRate] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const live = !reduced;
  const flow = useJitter(phase === "leak" ? 148 : 122, 6, 900, live);
  const wue = useJitter(phase === "contained" ? 1.12 : 1.34, 0.06, 1200, live);
  const temp = useJitter(27.4, 0.8, 1500, live);

  const triggerLeak = () => {
    if (phase !== "normal") return;
    setPhase("leak");
    setLeakRate(42); // gal/min simulated
    setSaved(0);
    // edge AI "detects" after ~2.5s, shuts valve, starts counting avoided waste
    setTimeout(() => {
      setPhase("contained");
      setLeakRate(0);
      timer.current = setInterval(() => setSaved((s) => s + 42 / 60), 1000);
    }, 2600);
  };
  const reset = () => {
    if (timer.current) clearInterval(timer.current);
    setPhase("normal"); setSaved(0); setLeakRate(0);
  };
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const phaseColor = phase === "normal" ? "#22d3ee" : phase === "leak" ? "#ff6b6f" : "#34d399";

  return (
    <Section
      id="demo"
      eyebrow="Interactive · 06 — Simulated facility dashboard"
      title="Try it: trigger a leak"
      lead="Fully simulated — $0 of hardware. Watch the mesh catch what a monthly utility bill would miss for 30 days."
      tint
    >
      <div className="glass overflow-hidden rounded-2xl shadow-xl">
        <div className="flex items-center justify-between border-b border-[#22d3ee]/15 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0aa5c2] text-[14px] font-black text-[#03252e]">≋</span>
            <div>
              <div className="text-[14px] font-extrabold text-white">AquaGrid · Facility 07 — Ashburn, VA</div>
              <div className="text-[11px] text-[#7fa8bb]">SIMULATED FEED · 24 sensors · LTE-M</div>
            </div>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-[#22d3ee]/20 px-3 py-1.5 text-[12px] font-bold" style={{ color: phaseColor }}>
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: phaseColor }} />
            {phase === "normal" ? "ALL NOMINAL" : phase === "leak" ? "LEAK DETECTED" : "LEAK CONTAINED"}
          </span>
        </div>

        <AnimatePresence>
          {phase !== "normal" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className={`overflow-hidden border-b border-[#22d3ee]/15 ${phase === "leak" ? "bg-[#cd040b]/15" : "bg-emerald-500/10"}`}
            >
              <div className="px-5 py-3 text-[13.5px] font-semibold text-white">
                {phase === "leak"
                  ? "🚨 Rope sensor R-14 tripped — Zone C cooling loop. Edge AI analyzing flow signature…"
                  : "✅ Edge AI confirmed leak signature → valve V-C3 shut in 0.8s. Counting water that would have been lost…"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* live pipe network */}
        <div className="border-b border-[#22d3ee]/15 bg-[#020d16]/60 px-4 py-4">
          <PipeNetwork phase={phase} />
        </div>

        <div className="grid gap-px bg-[#22d3ee]/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { l: "Loop flow", v: `${flow.toFixed(1)} gpm`, sub: phase === "leak" ? "▲ anomalous rise" : "nominal" },
            { l: "WUE (live)", v: `${wue.toFixed(2)} L/kWh`, sub: phase === "contained" ? "▼ improving" : "fleet avg 1.41" },
            { l: "Supply temp", v: `${temp.toFixed(1)} °C`, sub: "within band" },
            { l: "Leak rate", v: phase === "leak" ? `${leakRate} gal/min` : "0 gal/min", sub: phase === "leak" ? "R-14 zone C" : "no active leaks" },
          ].map((m) => (
            <div key={m.l} className="bg-[#041824]/90 p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7fa8bb]">{m.l}</div>
              <div className="mt-1 font-mono text-2xl font-black tabular-nums" style={{ color: m.l === "Leak rate" && phase === "leak" ? "#ff8a8e" : "#fff" }}>{m.v}</div>
              <div className="mt-1 text-[12px] text-[#7fa8bb]">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#22d3ee]/15 px-5 py-5">
          {phase === "normal" ? (
            <button onClick={triggerLeak} className="ripple-btn rounded-xl bg-[#0aa5c2] px-6 py-3 text-[15px] font-extrabold text-[#03252e] transition hover:bg-[#22d3ee]">
              💧 Trigger leak event
            </button>
          ) : (
            <button onClick={reset} className="rounded-xl border border-[#22d3ee]/25 px-6 py-3 text-[15px] font-bold text-white transition hover:bg-white/5">
              Reset simulation
            </button>
          )}
          <div className="text-[14px] text-[#aecbda]">
            Water that <em>would</em> have been lost:{" "}
            <span className="font-mono text-xl font-black text-[#34d399] tabular-nums">{saved.toFixed(1)} gal</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[12.5px] text-[#7fa8bb]">
        Demo logic: at ~42 gal/min, an undetected leak wastes ~60,000 gal/day. El Reno's 7 MW facility lost 3M+ gallons before anyone acted ✅.
        This is the 30-second moment for the 2-minute video.
      </p>
    </Section>
  );
}
