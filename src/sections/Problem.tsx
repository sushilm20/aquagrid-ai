import Section from "@/components/Section";
import { MetricCard } from "@/components/arc/metric-card/metric-card";
import { AnimatedCounter } from "@/components/arc/animated-counter/animated-counter";
import { VERIFY_NOTE } from "@/lib/data";

const WHY_NOW = [
  {
    t: "🤖 The AI boom drinks water",
    d: "The IEA estimates a single 100 MW hyperscale data center uses ~500,000 gallons a day — as much as 6,500 households. A majority of new US AI builds are slated for high water-stress zones. Water is now a capacity-planning constraint, not a utility line item. 📰",
  },
  {
    t: "📜 Disclosure just became law",
    d: "On Sept 21, 2026 California signed 7 data-center bills — the nation's most comprehensive. AB 2619 ties water-use reporting to business licenses; AB 2469 requires water-supply assessments and, from Jan 2028, drought scarcity plans. Compliance needs continuous metering, not utility PDFs. ✅",
  },
  {
    t: "💧 Scarcity is local and biting",
    d: "~40% of US data centers sit in high or extremely high water-scarcity areas (WRI). One Meta site equals ~10% of its Georgia county's entire supply. And in Sept 2026, a 7 MW facility in El Reno, OK leaked 3M+ gallons — closing schools and the courthouse. ✅/📰",
  },
  {
    t: "📉 Reporting is voluntary chaos",
    d: "WUE reporting is voluntary and boundaries differ wildly — LBNL found indirect water was 12x direct use in 2023. Companies rarely tell the public exactly how much they use. That inconsistency is itself the pitch: AquaGrid is the standardized measurement layer. 📰",
  },
];

export default function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Research · 01 — The problem"
      title="Data centers are water monsters — and they're flying blind"
      lead={
        <>
          Cooling a data center means evaporating water — a single large facility can pull{" "}
          <strong className="text-white">up to 5 million gallons a day</strong>, the daily demand of a town of 50,000
          📰. The industry metric is <strong className="text-white">WUE (Water Usage Effectiveness)</strong> ✅ — annual water
          liters ÷ IT equipment kWh (The Green Grid 2011, ISO/IEC 30134-9:2022). But most operators track it the way you'd
          track your diet from a monthly grocery receipt.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article className="min-w-0 rounded-2xl border glass p-6 shadow-sm">
          <div className="mb-6 text-[13px] text-[#7fa8bb]">Best published WUE</div>
          <AnimatedCounter value={0.12} decimals={2} suffix=" L/kWh" animateOnView />
          <p className="mt-4 text-[13px] leading-relaxed text-[#7fa8bb]">✅ Amazon 2025 · Microsoft 0.30 · Equinix 0.91 · evaporative band 1.0–2.5 · best-in-class &lt;0.5. Lower is better.</p>
        </article>
        <MetricCard label="100 MW hyperscale daily water" value={500000} suffix=" gal" context="📰 IEA 2025 · ≈ 6,500 households · >60% is indirect (power generation, chip manufacturing)." />
        <MetricCard label="Leak-blind window" value={30} suffix=" days" context="How long a slow leak can run before the next utility bill reveals it. AquaGrid sees it in seconds." />
        <MetricCard label="DOE-verified lever" value={50} suffix="%" context="📰 ~50% blowdown cut raising cycles 3 → 6 (US DOE) · ≈ 20% less makeup water · Ecolab measured 15% site-wide." />
      </div>
      <p className="mt-3 text-[12px] text-[#7fa8bb]">{VERIFY_NOTE}</p>

      <h3 className="mb-4 mt-10 text-xl font-extrabold text-white">Why now — four tailwinds</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {WHY_NOW.map((w) => (
          <div key={w.t} className="rounded-2xl border glass p-5">
            <div className="font-extrabold text-white">{w.t}</div>
            <div className="mt-1.5 text-[14px] text-[#aecbda]">{w.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-r-2xl border border-[#22d3ee]/15 border-l-4 border-l-[#0aa5c2] bg-[#0aa5c2]/[.06] p-5 text-[15px] text-[#c3dcea]">
        💡 <strong className="text-white">Framing rule:</strong> this is not an "anti-data-center" pitch. It's a{" "}
        <em>make-every-gallon-count</em> pitch — the same facilities, dramatically less waste. Verizon the infrastructure
        operator becomes Verizon the sustainability leader.
      </div>
    </Section>
  );
}
