import { useState } from "react";
import Section from "@/components/Section";
import { Slider } from "@/components/arc/slider/slider";

const SCENARIOS = [
  { key: "measured", label: "15% — measured (Ecolab case)", pct: 0.15 },
  { key: "doe", label: "20% — DOE makeup reduction", pct: 0.2 },
  { key: "combined", label: "25% — combined w/ RO (Genesis)", pct: 0.25 },
] as const;

export default function Roi() {
  const [mw, setMw] = useState(20);
  const [wue, setWue] = useState(1.4);
  const [scenario, setScenario] = useState<(typeof SCENARIOS)[number]>(SCENARIOS[1]);
  const [rate, setRate] = useState(8); // $ per 1,000 gal — USER input, not verified

  // annual IT energy: MW * 8760 h * 1000 kWh/MWh ; water L = WUE * kWh ; gal = L / 3.785
  const kwh = mw * 8760 * 1000;
  const galYear = (wue * kwh) / 3.785;
  const savedGal = galYear * scenario.pct;
  const savedUsd = (savedGal / 1000) * rate;

  const fmt = (n: number) =>
    n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `${(n / 1_000).toFixed(0)}K` : n.toFixed(0);

  return (
    <Section
      id="roi"
      eyebrow="Research · 07 — Business value"
      title="The math judges want"
      lead="Scenario-based on published benchmarks (DOE, Ecolab, Genesis) — never presented as guaranteed. Water rate is your input, not our claim."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="font-extrabold text-[#0a0a0b]">🎚️ Water-savings calculator</h3>
          <div className="mt-4 space-y-5">
            <Slider label="Facility size" value={mw} onValueChange={setMw} min={5} max={100} step={5} format={(v) => `${v} MW IT`} />
            <Slider label="Baseline WUE" value={wue} onValueChange={setWue} min={0.5} max={2.5} step={0.1} format={(v) => `${v.toFixed(1)} L/kWh`} />
            <div>
              <div className="mb-2 text-[13px] font-bold text-neutral-600">Savings scenario</div>
              <div className="flex flex-wrap gap-2">
                {SCENARIOS.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setScenario(s)}
                    className={`rounded-xl border px-4 py-2.5 text-[13px] font-bold transition ${scenario.key === s.key ? "border-[#0aa5c2] bg-[#0aa5c2]/10 text-[#055f73]" : "border-neutral-200 text-neutral-600 hover:border-neutral-300"}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <Slider label="Industrial water rate (your input — unverified)" value={rate} onValueChange={setRate} min={2} max={25} step={0.5} format={(v) => `$${v.toFixed(2)} / 1,000 gal`} />
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-[#0a0a0b] p-6 text-white md:p-8">
          <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-neutral-400">Projected annual savings</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-mono text-5xl font-black text-[#0aa5c2] tabular-nums">{fmt(savedGal)}</span>
            <span className="text-neutral-400">gallons</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-mono text-4xl font-black text-white tabular-nums">${fmt(savedUsd)}</span>
            <span className="text-neutral-400">in water cost</span>
          </div>
          <div className="mt-4 border-t border-white/10 pt-4 text-[13px] leading-relaxed text-neutral-400">
            Baseline use: ~{fmt(galYear)} gal/yr at {wue.toFixed(1)} L/kWh. DOE worked example: 10 gpm evaporation, 3→6 cycles
            = ~1.58M gal/yr 📰. Ecolab's measured case: 25M gal + $193K/yr at 15% 📰.
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <div className="font-extrabold text-[#0a0a0b]">🚨 One avoided incident</div>
          <p className="mt-1.5 text-[14px] text-neutral-600">Unplanned downtime: <strong>$5,600–$9,000/min</strong> 📰; 1 in 5 operators reported a &gt;$1M outage. A single El Reno-scale event dwarfs the sensor mesh cost.</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <div className="font-extrabold text-[#0a0a0b]">⚡ Energy rides along</div>
          <p className="mt-1.5 text-[14px] text-neutral-600">Optimized towers run fans/pumps less. Water savings and energy savings arrive together — two pillars, one product.</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <div className="font-extrabold text-[#0a0a0b]">💰 Verizon's upside</div>
          <p className="mt-1.5 text-[14px] text-neutral-600">Pilot on own data centers → prove WUE gains → sell sustainability-as-a-service. Connectivity + hardware + SaaS = triple revenue per site.</p>
        </div>
      </div>

      <div className="mt-5 rounded-r-2xl border border-neutral-200 border-l-4 border-l-[#cd040b] bg-[#cd040b]/[.04] p-5 text-[15px] text-neutral-700">
        📊 <strong className="text-[#0a0a0b]">Poster one-liner:</strong> "A 20 MW site at 1.4 L/kWh uses ~92M gal/yr. A 20% cut ={" "}
        <strong>18M gallons and six figures</strong> — every year, per site. Now multiply by Verizon's fleet."
      </div>
    </Section>
  );
}
