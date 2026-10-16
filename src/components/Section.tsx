import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { TextReveal } from "@/components/arc/text-reveal/text-reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  tint?: boolean;
}

/** Shared dossier section: eyebrow, animated title, lead, content. */
export default function Section({ id, eyebrow, title, lead, children, tint }: SectionProps) {
  const reduced = useReducedMotion();
  return (
    <section id={id} className={`scroll-mt-20 ${tint ? "bg-neutral-50/70" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#cd040b]">{eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#cd040b]/30 to-transparent" />
          </div>
          <TextReveal as="h2" text={title} className="max-w-3xl text-3xl font-black tracking-tight text-[#0a0a0b] md:text-4xl" />
          {lead && <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-neutral-600">{lead}</p>}
        </motion.div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
