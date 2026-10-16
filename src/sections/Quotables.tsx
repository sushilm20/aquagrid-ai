import Section from "@/components/Section";
import { CopyButton } from "@/components/arc/copy-button/copy-button";

const QUOTES = [
  {
    q: "In September 2026, one small 7-megawatt data center in El Reno, Oklahoma leaked 3 million gallons of water — shutting schools and the county courthouse.",
    s: "KOCO / KFOR local reporting · ✅",
  },
  {
    q: "Allianz found water damage is the #1 most frequent cause of data-center insurance losses in 2026 — ahead of fire.",
    s: "Allianz Commercial (221 claims, >€700M) via CEOWorld · 📰",
  },
  {
    q: "The IEA estimates a single 100 MW hyperscale data center uses ~500,000 gallons of water a day — as much as 6,500 households.",
    s: "IEA 2025 via h2ozarks.org · 📰",
  },
  {
    q: "In September 2026 California made data-center water disclosure the law — seven bills requiring water-use reporting and drought plans. AquaGrid is the product that makes compliance automatic.",
    s: "gov.ca.gov · ✅",
  },
];

export default function Quotables() {
  return (
    <Section
      id="quotables"
      eyebrow="12 — Quotables"
      title="The four lines that win the 2-minute pitch"
      lead="Open with #1. It's ten seconds, it's local news, and nobody in the room has heard it."
      tint
    >
      <div className="grid gap-3 md:grid-cols-2">
        {QUOTES.map((x, i) => (
          <figure key={i} className="flex flex-col rounded-2xl bg-[#0a0a0b] p-6 text-white">
            <span className="font-mono text-3xl font-black text-[#0aa5c2]">0{i + 1}</span>
            <blockquote className="mt-3 flex-1 text-[16px] font-semibold leading-relaxed">“{x.q}”</blockquote>
            <figcaption className="mt-3 text-[12px] text-neutral-400">— {x.s}</figcaption>
            <div className="mt-4">
              <CopyButton value={`"${x.q}" — ${x.s}`} label="Copy" className="border-white/20 text-white hover:bg-white/10" />
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
