import Section from "@/components/Section";
import { CopyButton } from "@/components/arc/copy-button/copy-button";
import { PITCH_TEXT } from "@/lib/data";

const ROLES = [
  { k: "PERSON 1 · HARDWARE / IoT", t: "Sensor mesh", d: "Sensor selection (flow, leak rope, temp, quality), LTE-M connectivity plan, edge shutoff logic" },
  { k: "PERSON 2 · APP + DASHBOARD", t: "Demo build", d: "Simulated facility dashboard, leak-event simulation, WUE gauge, digital-twin view" },
  { k: "PERSON 3 · STORY", t: "Research + pitch", d: "Water data, WUE math, ROI model, 2-min video script, quotables" },
  { k: "PERSON 4–6 · SUPPORT", t: "Design / data / test", d: "Simulated sensor datasets, user interviews with facilities folks, poster" },
];

export default function Pitch() {
  return (
    <Section id="pitch" eyebrow="For the team · read this first" title="The 30-second pitch">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-[17px] leading-relaxed text-neutral-700">“{PITCH_TEXT}”</p>
        <div className="mt-5">
          <CopyButton value={PITCH_TEXT} label="📋 Copy pitch for the team chat" className="bg-[#cd040b] font-extrabold text-white hover:bg-[#a50309]" />
        </div>
      </div>
      <div className="mt-5 rounded-r-2xl border border-neutral-200 border-l-4 border-l-[#cd040b] bg-[#cd040b]/[.04] p-5 text-[15px] text-neutral-700">
        👉 <strong className="text-[#0a0a0b]">Why this wins:</strong> it sits on the <em>Cost &amp; Sustainability Transformation</em> pillar — the
        least crowded lane — with hard measurable numbers (gallons, dollars, WUE). Verizon pilots it on its own data
        centers, so the story is <em>dogfood → product → revenue</em>. And the demo needs <strong>$0 of hardware</strong>:
        everything is simulated software.
      </div>
      <h3 className="mb-3 mt-8 text-lg font-extrabold text-[#0a0a0b]">Who does what</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((r) => (
          <div key={r.k} className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#cd040b]/50 hover:shadow-md">
            <div className="text-[11px] font-extrabold tracking-[0.1em] text-[#cd040b]">{r.k}</div>
            <div className="mt-1.5 font-extrabold text-[#0a0a0b]">{r.t}</div>
            <div className="mt-1 text-[13.5px] text-neutral-600">{r.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
