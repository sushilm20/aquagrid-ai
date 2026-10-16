import Section from "@/components/Section";

const RISKS = [
  {
    q: "🗣️ “Sensors cost money — where's the funding?”",
    a: "Clamp-on ultrasonic meters install with zero pipe cutting and zero downtime — the cheapest serious metering there is. The pitch demo is 100% simulated ($0 hardware), the $500 late-round stipend covers a real pilot kit, and one avoided El Reno-scale incident pays for the mesh many times over.",
  },
  {
    q: "🏭 “Why would Verizon sell something that cuts its own utility spend?”",
    a: "It wouldn't be cutting revenue — water isn't Verizon's product. It's cutting opex on its own data centers, then productizing the stack: connectivity (SIMs per sensor) + hardware margin + SaaS. Three revenue streams per site, all on Verizon's network.",
  },
  {
    q: "🔒 “Aren't Ecolab and Schneider already here?”",
    a: "They sell chemicals, hardware, and software licenses — none bundles carrier-grade LPWAN + edge-AI shutoff + cross-site WUE benchmarking + ESG reporting. And none can replicate Verizon's connectivity layer without a carrier partner. The wedge is the network.",
  },
  {
    q: "📊 “Simulated data isn't a real pilot.”",
    a: "Correct — and the video round explicitly doesn't require working prototypes. The simulation demonstrates the software IP (detection logic, WUE math, ESG exports), which is the actual product. Hardware is commoditized; the intelligence layer is the moat. The roadmap proposes a real single-site pilot if we advance.",
  },
];

export default function Risks() {
  return (
    <Section id="risks" eyebrow="Research · 10 — Risks, honestly" title="What could go wrong (and our answer)" tint>
      <div className="grid gap-3 md:grid-cols-2">
        {RISKS.map((r) => (
          <div key={r.q} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="font-extrabold text-[#0a0a0b]">{r.q}</div>
            <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{r.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
