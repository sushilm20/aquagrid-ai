import { useState } from "react";
import Section from "@/components/Section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/arc/tabs/tabs";
import { CHALLENGE_QUESTION, PILLARS } from "@/lib/data";

const RUBRIC = [
  { c: "Impact", a: "Gallons + dollars + WUE — the most measurable story in the room. El Reno proves the cost of doing nothing.", e: "IEA, DOE, Allianz, El Reno reporting" },
  { c: "Feasibility", a: "App-only demo: simulated dashboard + leak event. Sensors are COTS; the IP is the Verizon-connected software layer.", e: "Demo §06, product §05" },
  { c: "Content", a: "WUE physics, DOE cycle math, CA law, insurance data, leak-market CAGR — researched end to end.", e: "This dossier" },
  { c: "Creativity", a: "\"The water bill is the product\" — nobody pitches the cooling tower.", e: "Landscape §04" },
  { c: "Presentation", a: "30-sec demo: trigger leak → valve shuts → gallons-saved counter ticks. Instantly legible.", e: "Interactive demo §06" },
];

export default function Judges() {
  const [tab, setTab] = useState("challenge");
  return (
    <Section
      id="judges"
      eyebrow="Competition · 09 — Judging"
      title="How we win on every criterion"
      lead={
        <>
          ✅ Verified from the official NJIT listing: <em>"{CHALLENGE_QUESTION}"</em> — entries must deliver{" "}
          <strong className="text-[#0a0a0b]">"clear, measurable business value"</strong> and align with one of three pillars.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {PILLARS.map((p, i) => (
          <span key={p} className={`rounded-full px-4 py-2 text-[13px] font-extrabold ${i === 1 ? "bg-[#cd040b] text-white" : "border border-neutral-200 bg-white text-neutral-600"}`}>
            {i === 1 && "★ "}{p}
          </span>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-[11px] uppercase tracking-[0.1em] text-neutral-500">
              <th className="p-4">Criterion</th><th className="p-4">Our answer</th><th className="p-4">Evidence</th>
            </tr>
          </thead>
          <tbody>
            {RUBRIC.map((r) => (
              <tr key={r.c} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/60">
                <td className="p-4 font-extrabold text-[#0a0a0b]">{r.c}</td>
                <td className="p-4 text-neutral-600">{r.a}</td>
                <td className="p-4 text-[13px] text-neutral-500">{r.e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="challenge">Challenge statement</TabsTrigger>
            <TabsTrigger value="value">Value proposition</TabsTrigger>
            <TabsTrigger value="video">2-min video beats</TabsTrigger>
          </TabsList>
          <TabsContent value="challenge" className="pt-4 text-[15px] leading-relaxed text-neutral-700">
            "Data centers vaporize millions of gallons of cooling water a year — a 100 MW site uses ~500,000 gal/day (IEA 📰) —
            and operators find out from a monthly bill. In Sept 2026 one 7 MW facility leaked 3M gallons and closed schools (✅).
            Water damage is the #1 data-center insurance loss cause (Allianz 📰), and California just made water disclosure law (✅)."
          </TabsContent>
          <TabsContent value="value" className="pt-4 text-[15px] leading-relaxed text-neutral-700">
            "AquaGrid AI is a Verizon-connected IoT sensor mesh — LTE-M sensors with 10-year batteries on every cooling loop,
            edge AI that shuts valves in under a second, and a live WUE scoreboard. Verizon pilots it on its own data centers,
            proves ~20% water savings (DOE 📰), then sells sustainability-as-a-service to every enterprise running a data center."
          </TabsContent>
          <TabsContent value="video" className="pt-4 text-[15px] leading-relaxed text-neutral-700">
            0:00–0:20 the El Reno story (3M gallons, closed schools) → 0:20–1:20 live simulated demo (trigger leak → shutoff →
            gallons-saved counter) → 1:20–1:50 business value (ROI calculator + CA law = compliance product) → 1:50–2:00 the ask
            ("pilot on one Verizon edge site").
          </TabsContent>
        </Tabs>
      </div>

      <p className="mt-4 text-[13px] text-neutral-500">
        Structure 📰 (prior-year pattern, expect similar): teams of 3–6 · 2-min video round 1 · ~15 teams → poster · ~7 → finals ·
        $500 stipend for late rounds · top 3 × $3,000 · Winner's Circle at Verizon HQ, Basking Ridge NJ. Deadlines: Oct 24 applications (✅ official),
        Nov 3 drop-in (✅ official), video "mid-November" (✅ official — Nov 12 is the team's calendar date, confirm against the listing).
      </p>
    </Section>
  );
}
