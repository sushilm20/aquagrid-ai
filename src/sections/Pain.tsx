import Section from "@/components/Section";
import { Accordion } from "@/components/arc/accordion/accordion";

const ITEMS = [
  {
    title: "💧 Undetected leaks — the silent flood",
    content: (
      <p>
        In Sept 2026, a damaged water line at a <strong>7 MW</strong> data center in El Reno, Oklahoma wasted <strong>&gt;3 million gallons</strong> —
        tanking town water pressure and forcing schools and the county courthouse to close ✅ (KOCO/KFOR). Allianz's 2026 analysis of 221
        data-center claims (&gt;€700M) found <strong>water damage is the single most frequent cause of loss — ahead of fire</strong> 📰.
        Worse: an NVL72-class liquid-cooled rack has ~125–270 fluid connection pairs, and slow weeps can persist for <em>days</em> before pooling
        enough to trip conventional sensors 📰 — which is exactly why AquaGrid uses AI pattern detection, not threshold alarms.{" "}
        <strong>→ AquaGrid:</strong> leak-rope sensors + edge AI shutoff in under a second, with the exact zone paged to facilities.
      </p>
    ),
  },
  {
    title: "🚿 Blowdown waste — dumping money down the drain",
    content: (
      <p>
        Operators run towers at low cycles "to be safe," dumping far more water than chemistry requires — because they can't see mineral
        levels in real time. The US DOE finds 3→6 cycles cuts makeup ~20% and blowdown ~50% 📰.{" "}
        <strong>→ AquaGrid:</strong> conductivity/pH/TDS sensing holds cycles at the proven-safe maximum.
      </p>
    ),
  },
  {
    title: "🧾 Monthly-bill blindness",
    content: (
      <p>
        Water arrives as one number, 30 days late, with zero breakdown by loop, zone, or hour — and LBNL found indirect water was 12x direct
        use in 2023 📰. You cannot optimize what you cannot see. <strong>→ AquaGrid:</strong> per-loop, per-minute metering with a live WUE
        scoreboard — the water equivalent of a power meter on every circuit.
      </p>
    ),
  },
  {
    title: "📋 ESG reporting pain",
    content: (
      <p>
        CSRD/GRI demand auditable water disclosures; California's AB 2619 (signed Sept 21, 2026 ✅) now ties water-use reporting to business
        licenses, and AB 2469 requires water-supply assessments plus drought scarcity plans from Jan 2028. Facilities teams stitching utility
        PDFs at audit time won't survive this. <strong>→ AquaGrid:</strong> continuous, timestamped metering exports one-click ESG reports.
      </p>
    ),
  },
  {
    title: "📈 Scarcity scrutiny + a validated market",
    content: (
      <p>
        ~40% of US data centers sit in high/extremely high water-scarcity areas (WRI 📰), and municipalities are questioning new builds.
        The market agrees this is real: the global data-center water-leak-detector market is <strong>$371.6M (2026) → $925.5M (2032), 16.1% CAGR</strong> 📰.{" "}
        <strong>→ AquaGrid:</strong> documented, verifiable reductions — the permit application and the insurance renewal both write themselves.
      </p>
    ),
  },
];

export default function Pain() {
  return (
    <Section
      id="pain"
      eyebrow="Research · 03 — Pain points, documented"
      title="Five ways water disappears today"
      lead="Each pain maps to an AquaGrid feature — the problem→solution traceability judges look for."
    >
      <Accordion items={ITEMS} defaultOpen={0} size="md" />
    </Section>
  );
}
