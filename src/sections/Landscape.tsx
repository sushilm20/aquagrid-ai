import Section from "@/components/Section";

const ROWS = [
  { p: "Ecolab (Nalco Water)", w: "3D TRASAR + Water Flow Intelligence; 'Cooling as a Service' (Nov 2025)", g: "Chemical-treatment incumbent going digital — no carrier connectivity, no edge AI" },
  { p: "Schneider Electric", w: "EcoStruxure Water Advisor — AI leak insight, digital twin (AVEVA-based)", g: "Enterprise software licensing model — not a connectivity-native IoT mesh" },
  { p: "RLE / TTK / Aqualeak", w: "Leak-detection rope-sensor hardware", g: "Point hardware — no analytics platform, no benchmarking" },
  { p: "Wint / Xylem / Badger Meter / Mueller", w: "Water-intelligence software + metering hardware", g: "Water-industry players — no telecom or edge story" },
  { p: "Vigilent / Modius / Packet Power", w: "DCIM airflow, power & environmental monitoring", g: "Air/power focus — no water or WUE product at all" },
];

export default function Landscape() {
  return (
    <Section
      id="landscape"
      eyebrow="Research · 04 — Landscape"
      title="Who else plays here (and the gap we own)"
      lead="The category is validated — the global data-center water-leak-detector market is $371.6M (2026) → $925.5M (2032), 16.1% CAGR 📰. But nobody bundles the full stack."
      tint
    >
      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-[11px] uppercase tracking-[0.1em] text-neutral-500">
              <th className="p-4">Player</th><th className="p-4">What they do</th><th className="p-4">Gap vs AquaGrid</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.p} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/60">
                <td className="p-4 font-extrabold text-[#0a0a0b]">{r.p}</td>
                <td className="p-4 text-neutral-600">{r.w}</td>
                <td className="p-4 text-neutral-600">{r.g}</td>
              </tr>
            ))}
            <tr className="bg-[#cd040b]/[.04]">
              <td className="p-4 font-extrabold text-[#cd040b]">AquaGrid AI ✓</td>
              <td className="p-4 font-semibold text-[#0a0a0b]">Carrier-grade LPWAN + edge-AI shutoff + WUE benchmarking + ESG reporting</td>
              <td className="p-4 font-semibold text-[#0a0a0b]">The only connected outcome: gallons saved, WUE improved — on Verizon's network</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5 rounded-r-2xl border border-neutral-200 border-l-4 border-l-[#cd040b] bg-[#cd040b]/[.04] p-5 text-[15px] text-neutral-700">
        🏆 <strong className="text-[#0a0a0b]">The wedge:</strong> incumbents sell chemicals, hardware, or software licenses.
        AquaGrid sells a <em>connected outcome</em> — and it's the only one riding Verizon's LTE-M/NB-IoT + ThingSpace + edge stack,
        which none of them can replicate without a carrier.
      </div>
    </Section>
  );
}
