import Section from "@/components/Section";

const CARDS = [
  {
    t: "📡 ThingSpace — Verizon's IoT platform",
    d: "Verified alive in 2026 ✅ (thingspace.verizon.com): connectivity + device management for Cat-M1 and NB-IoT, with a July 2026 enterprise customer story (Cantaloupe). AquaGrid sensors onboard like any ThingSpace device — no custom telco stack to build.",
  },
  {
    t: "🔋 LTE-M / NB-IoT — built for this",
    d: "Verizon's own words ✅: battery life up to 10 years (depending on application), better in-building penetration, LTE-grade security. 3GPP engineering: +15–20 dB link-budget gain = sensors that live for years in concrete mechanical rooms where WiFi dies. LTE covers 99% of the US population ✅.",
  },
  {
    t: "⚡ 5G backhaul + MEC edge inference",
    d: "Gateways fuse sensor streams and backhaul over 5G; Verizon's edge-compute pages are active ✅. Leak inference runs at the edge — sub-second valve shutoff with no cloud round-trip. This is the AI Connect enterprise stack (Jan 2025, Google Cloud/Meta early adopters) doing real work.",
  },
  {
    t: "🤖 The honest boundary",
    d: "No Verizon smart-water case study was found ❓ — we don't claim one exists. The pitch is that AquaGrid becomes the reference deployment: the first flagship sustainability workload on the AI Connect / edge stack.",
  },
];

export default function Tech() {
  return (
    <Section
      id="tech"
      eyebrow="Verizon fit · 08 — Technology"
      title="Why this only works on Verizon's network"
      tint
    >
      <div className="grid gap-3 md:grid-cols-2">
        {CARDS.map((c) => (
          <div key={c.t} className="rounded-2xl border glass p-6">
            <div className="font-extrabold text-white">{c.t}</div>
            <p className="mt-2 text-[14px] leading-relaxed text-[#aecbda]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#34d399]/10 px-4 py-2 text-[13px] font-extrabold text-[#6ee7b7]">Cost &amp; Sustainability Transformation · primary</span>
        <span className="rounded-full bg-[#0aa5c2]/10 px-4 py-2 text-[13px] font-extrabold text-[#67e8f9]">AI-Driven Automation &amp; Efficiency · secondary</span>
      </div>
      <p className="mt-4 max-w-3xl text-[13.5px] text-[#aecbda]">
        The competition demands <em>use of Verizon's network capabilities, scalability, and tangible business outcomes</em> —
        every layer above is a Verizon capability, the mesh scales site-to-site on the same SIM profile, and the outcomes are
        metered in gallons and dollars.
      </p>
    </Section>
  );
}
