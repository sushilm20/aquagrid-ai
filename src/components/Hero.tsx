import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/arc/animated-counter/animated-counter";
import { CopyButton } from "@/components/arc/copy-button/copy-button";
import { HeroWaves } from "@/components/water/Waves";
import Bubbles from "@/components/water/Bubbles";
import { FishSchool } from "@/components/water/Fish";
import { Droplet } from "@/components/water/Droplet";
import { HERO_STATS, PITCH_TEXT, VERIFY_NOTE } from "@/lib/data";

const rise = {
  hidden: { opacity: 0, y: 26 },
  shown: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <header className="relative overflow-hidden bg-[#03121e] text-white">
      {/* deep-ocean gradient + aqua glows + grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 82% -8%, rgba(10,165,194,0.28) 0%, transparent 60%), radial-gradient(900px 700px at -8% 108%, rgba(34,211,238,0.14) 0%, transparent 55%), linear-gradient(180deg, #041e30 0%, #03121e 70%, #020d16 100%)",
          }}
        />
        <div className="absolute left-1/2 top-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#22d3ee]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(rgba(103,232,249,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 25%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 25%, transparent 75%)",
          }}
        />
      </div>
      <Bubbles count={26} />
      <FishSchool count={6} />

      <div className="relative mx-auto max-w-6xl px-5 pb-32 pt-20 md:pb-40 md:pt-28">
        <motion.div custom={0} initial={reduced ? false : "hidden"} animate="shown" variants={rise}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/40 bg-[#22d3ee]/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#a5f3fc]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee]" />
            Verizon Smart Campus Innovation Challenge · 2026–27
          </span>
        </motion.div>

        <motion.div custom={1} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-6">
          <h1 className="aqua-text text-6xl font-black tracking-tight md:text-8xl">AquaGrid AI</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#aecbda] md:text-xl">
            A <span className="font-bold text-white">Verizon-connected IoT sensor mesh</span> that watches every drop
            of data-center cooling water — <span className="font-bold text-white">LTE-M sensors</span> on every loop,{" "}
            <span className="font-bold text-white">edge AI</span> that shuts valves in under a second, and a live{" "}
            <span className="font-bold text-white">WUE scoreboard</span> across every site.
          </p>
        </motion.div>

        <motion.div custom={2} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-7 flex flex-wrap gap-2.5">
          {["📅 Oct 24 · registration", "🎥 mid-Nov · video pitch", "👥 Team of 3–6", "🎯 Cost & Sustainability + AI Automation"].map((c) => (
            <span key={c} className="rounded-full border border-[#22d3ee]/20 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-[#b9d6e2]">
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div custom={3} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-8 flex flex-wrap gap-3">
          <CopyButton value={PITCH_TEXT} label="Copy 30-sec pitch" className="ripple-btn bg-[#0aa5c2] font-extrabold text-[#03252e] hover:bg-[#22d3ee]" />
          <a href="#pitch" className="inline-flex items-center rounded-xl border border-[#22d3ee]/30 px-6 py-3 text-[15px] font-bold text-white transition hover:border-[#22d3ee] hover:bg-[#22d3ee]/10">
            Read the pitch ↓
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              custom={4 + i}
              initial={reduced ? false : "hidden"}
              animate="shown"
              variants={rise}
              className="glass hoverable rounded-2xl p-5"
            >
              <div className="flex min-w-0 items-center gap-2 text-2xl font-black leading-tight text-[#22d3ee] md:text-3xl">
                <Droplet size={24} className="shrink-0" />
                <span className="min-w-0">
                  <AnimatedCounter value={s.value} decimals={s.decimals ?? 0} prefix={s.prefix} suffix={s.suffix} animateOnView />
                </span>
              </div>
              <div className="mt-2 text-[13px] font-semibold leading-snug text-[#d9edf5]">{s.label}</div>
              <div className="mt-1 text-[11px] text-[#7fa8bb]">{s.sub}</div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-[#7fa8bb]">{VERIFY_NOTE}</p>
      </div>
      <HeroWaves />
    </header>
  );
}
