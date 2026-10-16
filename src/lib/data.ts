/**
 * Central content + stats for the AquaGrid AI dossier.
 * Evidence labels: ✅ VERIFIED (primary/on-record) · 📰 PRESS-REPORTED (credible secondary) · ❓ UNVERIFIED.
 * "~" marks press-reported figures; hard claims are avoided where unverified.
 */

export const PITCH_TEXT = `Data centers vaporize millions of gallons of cooling water a year, and operators find out from a monthly utility bill. AquaGrid AI is a Verizon-connected IoT sensor mesh — LTE-M sensors on every cooling loop, edge AI that shuts valves in under a second when a leak hits, and a live WUE scoreboard across every site. Verizon pilots it on its own data centers, proves the water savings, then sells sustainability-as-a-service to every enterprise running a data center.`;

export const CHALLENGE_QUESTION =
  "How can you leverage Verizon's next-gen network to create a smarter, more efficient world and drive real growth?";

export const PILLARS = [
  "AI-Driven Automation & Efficiency",
  "Cost & Sustainability Transformation",
  "Next-Gen Products & Services to Enhance Customer Experience",
] as const;

export interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}

/** Hero stats — all from the verified research report. */
export const HERO_STATS: Stat[] = [
  { value: 500000, suffix: " gal/day", label: "Water a 100 MW hyperscale data center uses daily", sub: "📰 IEA 2025 · ≈ 6,500 households" },
  { value: 3, prefix: "~", suffix: "M gal", label: "Leaked by ONE 7 MW facility in El Reno, OK (Sept 2026)", sub: "✅ KOCO/KFOR · schools + courthouse closed" },
  { value: 1, prefix: "#", label: "Most frequent data-center insurance loss cause: water damage", sub: "📰 Allianz 2026 · ahead of fire · 221 claims, >€700M" },
  { value: 50, prefix: "~", suffix: "%", label: "Blowdown cut by raising cycles 3 → 6", sub: "📰 US DOE · ≈ 20% less makeup water" },
];

export const NAV_LINKS = [
  { href: "#pitch", label: "Pitch" },
  { href: "#problem", label: "Problem" },
  { href: "#cooling", label: "Cooling" },
  { href: "#pain", label: "Pain" },
  { href: "#landscape", label: "Landscape" },
  { href: "#product", label: "Product" },
  { href: "#demo", label: "Live demo" },
  { href: "#roi", label: "ROI" },
  { href: "#tech", label: "Verizon tech" },
  { href: "#judges", label: "Judges" },
  { href: "#risks", label: "Risks" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: "#quotables", label: "Quotables" },
  { href: "#sources", label: "Sources" },
];

export const VERIFY_NOTE =
  "Evidence labels: ✅ verified primary/on-record · 📰 credible press-reported · ~ preliminary. Full citations in Sources.";
