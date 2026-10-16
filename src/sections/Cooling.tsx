import Section from "@/components/Section";
import { motion, useReducedMotion } from "motion/react";

const LOSSES = [
  { name: "Evaporation", pct: 75, color: "#0aa5c2", d: "The intended loss — hot water evaporates to reject heat. The volume is the prize: every degree of cooling-range optimization cuts it. ✅ US DOE names evaporation, blowdown, and drift as the three normal loss paths." },
  { name: "Blowdown", pct: 22, color: "#0787a0", d: "Deliberate draining to control mineral buildup. The big lever: the DOE finds raising cycles of concentration from 3 → 6 cuts makeup water ~20% and blowdown ~50% 📰 — but only with water-quality sensing to run safely at the edge." },
  { name: "Drift", pct: 3, color: "#055f73", d: "Droplets carried out with exhaust air. Small, but drift eliminators degrade — and nobody notices without monitoring." },
];

export default function Cooling() {
  const reduced = useReducedMotion();
  return (
    <Section
      id="cooling"
      eyebrow="Research · 02 — Cooling deep-dive"
      title="Where the water actually goes"
      lead={
        <>
          An evaporative cooling tower loses water through <strong className="text-[#0a0a0b]">three paths</strong> ✅ (US DOE).
          Judges will test whether the team understands the physics — here's the breakdown, and which lever AquaGrid pulls on each.
          <span className="text-neutral-500"> (Shares are typical/illustrative; savings figures are DOE-reported 📰.)</span>
        </>
      }
      tint
    >
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
        {LOSSES.map((l, i) => (
          <div key={l.name} className="mb-7 last:mb-0">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="font-extrabold text-[#0a0a0b]">{l.name} <span className="ml-1 text-[12px] font-bold text-neutral-500">~{l.pct}% of tower loss (typical)</span></span>
            </div>
            <div className="h-3.5 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${l.color}, ${l.color}cc)` }}
                initial={reduced ? false : { width: 0 }}
                whileInView={{ width: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-2 text-[14px] text-neutral-600">{l.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="font-extrabold text-[#0a0a0b]">🔁 Cycles of concentration — the master lever</div>
          <p className="mt-2 text-[14px] text-neutral-600">
            CoC = dissolved-solids ratio of circulating to makeup water, read via conductivity ✅ (e.g. 1500 µS/cm ÷ 500 µS/cm = 3 cycles).
            Most towers run 2–4 cycles on municipal water. Worked example 📰: at 10 gpm evaporation, 3→6 cycles cuts makeup 15→12 gpm ={" "}
            <strong className="text-[#0aa5c2]">~1.58M gallons/year</strong> in 24/7 operation. Gains are front-loaded — 2→5 captures most of it.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="font-extrabold text-[#0a0a0b]">🌡️ The IT-load connection</div>
          <p className="mt-2 text-[14px] text-neutral-600">
            Cooling demand follows compute load with a lag. By correlating <strong>IT power draw + weather + water temperature</strong>,
            AquaGrid predicts demand hours ahead and pre-positions the tower — cutting water <em>and</em> fan/pump energy together.
            (Tradeoff to know 📰: evaporative cooling ↑WUE but ↓PUE; air cooling is the reverse — Equinix.)
          </p>
        </div>
      </div>
    </Section>
  );
}
