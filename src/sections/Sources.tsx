import Section from "@/components/Section";

const GROUPS: { t: string; items: { label: string; url: string }[] }[] = [
  {
    t: "💧 Water consumption",
    items: [
      { label: "✅/📰 IEA 2025 via h2ozarks.org — 100 MW ≈ 500K gal/day", url: "https://h2ozarks.org/how-much-water-is-ai-using/" },
      { label: "📰 LBNL 2024 US Data Center Energy Usage Report (176 TWh 2023 → 325–580 by 2028)", url: "https://www.powerinfotoday.com/news-press-releases/how-data-center-growth-is-tying-power-demand-to-water-supply/" },
      { label: "📰 Hyperscaler water figures (Google 7.7B gal 2024, Meta, Amazon, Microsoft)", url: "https://thenetworkinstallers.com/blog/data-center-water-usage/" },
      { label: "📰 US direct water 17.4B gal (2023) → 38–73B by 2028; 5M gal/day single facility", url: "https://www.webpronews.com/ai-data-centers-drink-deep-but-barely-dent-the-nations-water-supply/" },
    ],
  },
  {
    t: "📐 WUE definition & benchmarks",
    items: [
      { label: "✅ Water usage effectiveness — The Green Grid 2011 definition, L/kWh", url: "https://en.wikipedia.org/wiki/Water_usage_effectiveness" },
      { label: "📰 WUE bands, cooling-tower vs dry cooler, operator values", url: "https://kvrm.in/data-centre-wue-cooling-tower-adiabatic-dry-cooler/" },
      { label: "📰 Voluntary/inconsistent reporting; indirect water 12x direct (LBNL)", url: "https://www.nakedcapitalism.com/2025/08/data-centers-consume-massive-amounts-of-water-companies-rarely-tell-the-public-exactly-how-much.html" },
    ],
  },
  {
    t: "🏭 Cooling physics & cycle math",
    items: [
      { label: "✅ US DOE — evaporation / blowdown / drift loss paths", url: "https://bitcoinversus.tech/2026/10/09/osdcec-008-data-center-water-systems-cooling-loops-towers-water-quality-blowdown-wue/" },
      { label: "✅ Cycles of concentration via conductivity (complete-water.com)", url: "https://complete-water.com" },
      { label: "📰 DOE: 3→6 cycles = ~20% makeup / ~50% blowdown reduction; 1.58M gal/yr example", url: "https://techbullion.com/the-overlooked-variable-in-data-center-water-efficiency-cooling-tower-cycles-of-concentration/" },
    ],
  },
  {
    t: "🚨 Leaks & damage",
    items: [
      { label: "✅ El Reno OK Sept 2026 — 7 MW facility, >3M gallons, schools/courthouse closed (KOCO/KFOR)", url: "https://ceoworld.biz/2026/09/16/the-hidden-risk-in-the-ai-buildout-why-leak-detection-is-the-next-frontier-in-uptime/" },
      { label: "📰 Allianz 2026: water #1 loss cause (221 claims, >€700M); NVL72 weep detail", url: "https://ceoworld.biz/2026/09/16/the-hidden-risk-in-the-ai-buildout-why-leak-detection-is-the-next-frontier-in-uptime/" },
      { label: "📰 Uptime Institute downtime costs $5,600–$9,000/min", url: "https://envigilance.com/water-leak-detection/data-center-water-leak-detection/" },
      { label: "📰 Leak-detector market $371.6M → $925.5M (2032), 16.1% CAGR", url: "https://www.globenewswire.com/news-release/2026/01/29/3228271/28124/en/Global-Data-Center-Water-Leak-Detector-Market-Set-to-Reach-925-Million-by-2032-with-a-16-10-CAGR-Growth.html" },
    ],
  },
  {
    t: "📡 Verizon IoT",
    items: [
      { label: "✅ Verizon LTE-M & NB-IoT — 10-yr battery, in-building penetration, 99% LTE coverage", url: "https://www.verizon.com/business/products/internet-of-things/iot-networks/lte-m-narrowband-iot/" },
      { label: "✅ ThingSpace — IoT connectivity & device management (2026 customer stories)", url: "https://thingspace.verizon.com" },
    ],
  },
  {
    t: "💰 Savings benchmarks",
    items: [
      { label: "📰 Ecolab Water Flow Intelligence — 15%, 25M gal, $193K/yr", url: "https://www.ecolab.com/news/2021/05/ecolab-launches-digital-solution-for-companies-facing-water-scarcity" },
    ],
  },
  {
    t: "📜 Regulation",
    items: [
      { label: "✅ California Sept 21 2026 — 7 data-center bills (AB 2469, AB 2619 water provisions)", url: "https://www.gov.ca.gov/2026/09/21/governor-newsom-signs-most-comprehensive-data-center-laws-in-the-nation-providing-communities-more-control-on-water-electricity-and-land-use/" },
    ],
  },
  {
    t: "🏆 Competition",
    items: [
      { label: "✅ NJIT Entrepreneurship Center — Smart Campus Challenge listing (pillars, Oct 24)", url: "https://entrepreneurship.njit.edu/events" },
      { label: "📰 Prior-year structure: NJIT News winners recap", url: "https://news.njit.edu/verizon-5g-smart-competition-presented-challenge-students-njit-had-solutions" },
    ],
  },
];

export default function Sources() {
  return (
    <Section
      id="sources"
      eyebrow="Appendix · 14 — Sources"
      title="Receipts"
      lead="Every number on this page traces to one of these. ✅ = verified primary/on-record · 📰 = credible press-reported · items without a mark are team analysis."
      tint
    >
      <div className="grid gap-3 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.t} className="rounded-2xl border glass p-5">
            <div className="mb-3 font-extrabold text-white">{g.t}</div>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.url + it.label} className="text-[13.5px]">
                  <a href={it.url} target="_blank" rel="noreferrer" className="text-[#0aa5c2] underline decoration-[#0aa5c2]/30 underline-offset-2 hover:decoration-[#0aa5c2]">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[13px] text-[#7fa8bb]">
        Dossier v1 · Built for Pardha's team — share it, don't forward the raw chat. Research verified Oct 16, 2026. Good luck 🚀
      </p>
    </Section>
  );
}
