import Section from "@/components/Section";
import { Timeline } from "@/components/arc/timeline/timeline";

const now = Date.now();
const day = 86400000;
const EVENTS = [
  {
    id: "r1", at: now - 0 * day, title: "Lock team & register",
    meta: "Now → Oct 24",
    detail: "3–6 members; assign the 4 roles from the pitch. Applications deadline Oct 24 at midnight ✅ (official listing).",
    tone: "neutral" as const,
  },
  {
    id: "r2", at: now + 10 * day, title: "Build the demo core",
    meta: "Oct 24 → Nov 3",
    detail: "Simulated dashboard + leak-event flow + ROI calculator (this site is the prototype). Draft challenge statement + value prop.",
    tone: "neutral" as const,
  },
  {
    id: "r3", at: now + 19 * day, title: "Mentor drop-in — get a Verizon quote",
    meta: "Nov 3 ✅",
    detail: "Ask: does a ThingSpace-connected sustainability play fit the Cost & Sustainability pillar? A mentor soundbite in the video is gold.",
    tone: "success" as const,
  },
  {
    id: "r4", at: now + 28 * day, title: "Submit 2-min video",
    meta: "Mid-November ✅ · team calendar: Nov 12",
    detail: "El Reno story (20s) → live demo (60s) → ROI + CA law (30s) → pilot ask (10s). Confirm the exact date against the official listing.",
    tone: "success" as const,
  },
  {
    id: "r5", at: now + 110 * day, title: "Poster → finals",
    meta: "Feb → Mar 📰",
    detail: "$500 stipend if we advance · Winner's Circle at Verizon HQ, Basking Ridge NJ · top 3 × $3,000.",
    tone: "neutral" as const,
  },
];

export default function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Execution · 11 — Roadmap" title="Road to the video pitch">
      <div className="rounded-2xl border glass p-6">
        <Timeline events={EVENTS} now={now} label="Roadmap" />
      </div>
    </Section>
  );
}
