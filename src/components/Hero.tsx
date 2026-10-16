import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/arc/animated-counter/animated-counter";
import { CopyButton } from "@/components/arc/copy-button/copy-button";
import { TextReveal } from "@/components/arc/text-reveal/text-reveal";
import { HERO_STATS, PITCH_TEXT, VERIFY_NOTE } from "@/lib/data";

const rise = {
  hidden: { opacity: 0, y: 26 },
  shown: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <header className="relative overflow-hidden bg-[#0a0a0b] text-white">
      {/* red glow + grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#cd040b]/25 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#0aa5c2]/15 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 25%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 25%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pt-28">
        <motion.div custom={0} initial={reduced ? false : "hidden"} animate="shown" variants={rise}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#cd040b]/50 bg-[#cd040b]/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#ff8a8e]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5d5d]" />
            Verizon Smart Campus Innovation Challenge · 2026–27
          </span>
        </motion.div>

        <motion.div custom={1} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-6">
          <TextReveal
            as="h1"
            text="AquaGrid AI"
            className="text-6xl font-black tracking-tight md:text-8xl"
          />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            A <span className="font-bold text-white">Verizon-connected IoT sensor mesh</span> that watches every drop
            of data-center cooling water — <span className="font-bold text-white">LTE-M sensors</span> on every loop,{" "}
            <span className="font-bold text-white">edge AI</span> that shuts valves in under a second, and a live{" "}
            <span className="font-bold text-white">WUE scoreboard</span> across every site.
          </p>
        </motion.div>

        <motion.div custom={2} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-7 flex flex-wrap gap-2.5">
          {["📅 Oct 24 · registration", "🎥 mid-Nov · video pitch", "👥 Team of 3–6", "🎯 Cost & Sustainability + AI Automation"].map((c) => (
            <span key={c} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-neutral-300">
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div custom={3} initial={reduced ? false : "hidden"} animate="shown" variants={rise} className="mt-8 flex flex-wrap gap-3">
          <CopyButton value={PITCH_TEXT} label="📋 Copy 30-sec pitch" className="bg-[#cd040b] font-extrabold text-white hover:bg-[#a50309]" />
          <a href="#pitch" className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 text-[15px] font-bold text-white transition hover:border-[#cd040b] hover:bg-white/5">
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
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-[#0aa5c2] md:text-4xl">
                <AnimatedCounter value={s.value} decimals={s.decimals ?? 0} prefix={s.prefix} suffix={s.suffix} animateOnView />
              </div>
              <div className="mt-2 text-[13px] font-semibold leading-snug text-neutral-300">{s.label}</div>
              <div className="mt-1 text-[11px] text-neutral-500">{s.sub}</div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-neutral-500">{VERIFY_NOTE}</p>
      </div>
    </header>
  );
}
