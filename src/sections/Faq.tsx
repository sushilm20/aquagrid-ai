import Section from "@/components/Section";
import { Accordion } from "@/components/arc/accordion/accordion";

const ITEMS = [
  {
    title: "Do you need Verizon's internal APIs?",
    content: (
      <p>
        No. ThingSpace is Verizon's <strong>public</strong> IoT connectivity + device-management platform ✅ — sensors onboard like any
        Cat-M1/NB-IoT device. The demo is fully simulated and needs nothing at all; a real pilot uses standard ThingSpace onboarding,
        the same path as Verizon's 2026 enterprise IoT customers.
      </p>
    ),
  },
  {
    title: "How much does the hardware actually cost?",
    content: (
      <p>
        Clamp-on ultrasonic flow meters are the cheapest serious metering available — no pipe cutting, no downtime to install. Leak rope
        is commodity cable. The video-round demo costs <strong>$0</strong> (simulated), and the $500 late-round stipend covers a real
        single-loop pilot kit. One avoided incident ($5,600–$9,000/min downtime 📰) pays for the mesh many times over.
      </p>
    ),
  },
  {
    title: "What about data privacy and security?",
    content: (
      <p>
        This is operational telemetry — flow rates and temperatures, not personal data. Verizon's LTE-M/NB-IoT carries LTE-grade security ✅,
        and edge processing keeps raw sensor feeds on-site; only aggregates and alerts leave the facility. The attack surface is far smaller
        than a cloud-everything architecture.
      </p>
    ),
  },
  {
    title: "How is this different from Ecolab or Schneider Electric?",
    content: (
      <p>
        Ecolab sells water chemistry, Schneider sells enterprise software licenses. Neither bundles carrier-grade LPWAN connectivity,
        sub-second edge-AI shutoff, cross-site WUE benchmarking, and ESG reporting in one product — and neither can replicate Verizon's
        connectivity layer without a carrier. AquaGrid sells a <em>connected outcome</em> (gallons saved, WUE improved), not chemicals or seats.
      </p>
    ),
  },
  {
    title: "Does it work for air-cooled or liquid-cooled sites?",
    content: (
      <p>
        Yes — and liquid cooling makes the case <em>stronger</em>. An NVL72-class rack has ~125–270 fluid connection pairs, and slow weeps
        can persist for days before pooling enough to trip conventional sensors 📰. That's precisely the failure mode AI pattern detection
        exists for. Air-cooled sites still have makeup loops, pumps, and leak risk worth metering.
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <Section id="faq" eyebrow="13 — FAQ" title="Questions you'll get" lead="Rehearse these before the mentor drop-in on Nov 3.">
      <Accordion items={ITEMS} defaultOpen={-1} size="lg" />
    </Section>
  );
}
