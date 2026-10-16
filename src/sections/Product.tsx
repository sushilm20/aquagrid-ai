import Section from "@/components/Section";

const SENSORS = [
  { icon: "🌊", t: "Flow meters", d: "Ultrasonic clamp-on meters — no pipe cutting, no downtime to install. Metered per loop: makeup, recirculation, blowdown. The raw input for live WUE." },
  { icon: "🧵", t: "Leak rope sensors", d: "Water-sensing cable under raised floors and along pipe runs, wired to motorized shutoff valves. Edge AI trips the valve in <1 second — no cloud round-trip." },
  { icon: "🌡️", t: "Temp / humidity / pressure", d: "Correlate IT power draw + weather + water temperature to predict cooling demand hours ahead and pre-position towers — water and energy fall together." },
  { icon: "⚗️", t: "Water-quality sensors", d: "Conductivity / pH / TDS / silica — the live cycles-of-concentration input. This is what lets operators safely run at 6 cycles instead of 3." },
];

const FLOW = ["Sensors", "LTE-M / NB-IoT", "Edge gateway (MEC)", "5G backhaul", "Cloud AI", "Dashboard"];

export default function Product() {
  return (
    <Section
      id="product"
      eyebrow="Product · 05 — How AquaGrid works"
      title="A sensor mesh, a nervous system, a scoreboard"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SENSORS.map((s) => (
          <div key={s.t} className="rounded-2xl border glass p-5 transition hover:-translate-y-1 hover:border-[#0aa5c2]/60 hover:shadow-md">
            <div className="text-2xl">{s.icon}</div>
            <div className="mt-2 font-extrabold text-white">{s.t}</div>
            <div className="mt-1.5 text-[13.5px] leading-relaxed text-[#aecbda]">{s.d}</div>
          </div>
        ))}
      </div>

      <h3 className="mb-3 mt-10 text-lg font-extrabold text-white">Data path — sensor to scoreboard</h3>
      <div className="flex flex-wrap items-center gap-2">
        {FLOW.map((f, i) => (
          <span key={f} className="flex items-center gap-2">
            <span className={`rounded-xl px-4 py-2.5 text-[13px] font-extrabold ${i === 0 ? "bg-[#0aa5c2]/10 text-[#67e8f9] border border-[#0aa5c2]/30" : i === FLOW.length - 1 ? "bg-[#cd040b] text-white" : "border glass text-[#c3dcea]"}`}>
              {f}
            </span>
            {i < FLOW.length - 1 && <span className="text-neutral-400">→</span>}
          </span>
        ))}
      </div>
      <p className="mt-3 max-w-3xl text-[13.5px] text-[#aecbda]">
        Sensors speak <strong>LTE-M/NB-IoT</strong> (battery up to 10 years ✅, deep-indoor penetration where WiFi dies) into
        ThingSpace-managed gateways; the <strong>edge gateway</strong> runs leak inference locally for sub-second shutoff;
        <strong>5G backhaul</strong> carries fused telemetry to <strong>cloud AI</strong> for cross-site WUE benchmarking,
        predictive pump maintenance, and one-click ESG reports.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border glass p-5">
          <div className="font-extrabold text-white">📊 WUE scoreboard</div>
          <p className="mt-1.5 text-[14px] text-[#aecbda]">Live L/kWh per site, ranked across the fleet. Voluntary reporting is inconsistent — AquaGrid becomes the standardized measurement layer.</p>
        </div>
        <div className="rounded-2xl border glass p-5">
          <div className="font-extrabold text-white">🔮 Predictive maintenance</div>
          <p className="mt-1.5 text-[14px] text-[#aecbda]">Pump vibration + flow degradation trends flag failures before they happen. Unplanned downtime runs $5,600–$9,000/minute 📰 — prediction pays for the mesh.</p>
        </div>
        <div className="rounded-2xl border glass p-5">
          <div className="font-extrabold text-white">🏭 Digital twin</div>
          <p className="mt-1.5 text-[14px] text-[#aecbda]">A live 3D facility view with sensor overlays — see the leak's zone pulse red the moment rope sensors trip, before anyone walks the floor.</p>
        </div>
      </div>

      <div className="mt-5 rounded-r-2xl border border-[#22d3ee]/15 border-l-4 border-l-[#0aa5c2] bg-[#0aa5c2]/[.06] p-5 text-[15px] text-[#c3dcea]">
        ⚠️ <strong className="text-white">Why AI pattern detection, not threshold alarms:</strong> slow weeps (microliters/hour on
        liquid-cooled racks) can persist for <em>days</em> before pooling enough to trip a conventional sensor 📰. AquaGrid's edge models
        learn each loop's normal flow signature and flag the drift — the leak El Reno never saw coming.
      </div>
    </Section>
  );
}
