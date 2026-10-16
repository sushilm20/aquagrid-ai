import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { TextReveal } from "@/components/arc/text-reveal/text-reveal";
import { WaveDivider } from "@/components/water/Waves";
import { DropletDivider } from "@/components/water/Droplet";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  tint?: boolean;
}

/** Shared dossier section: wave divider, eyebrow, animated title, lead, content. */
export default function Section({ id, eyebrow, title, lead, children, tint }: SectionProps) {
  const reduced = useReducedMotion();
  const bg = tint ? "#062335" : "#03121e";
  return (
    <section id={id} className="relative scroll-mt-20" style={{ background: bg }}>
      <WaveDivider fill="#020d16" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-2 md:pb-20 md:pt-4">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">
            <span>{eyebrow}</span>
          </div>
          <TextReveal as="h2" text={title} className="aqua-text max-w-3xl text-3xl font-black tracking-tight md:text-4xl" />
          {lead && <p className="lead mt-4 max-w-3xl">{lead}</p>}
        </motion.div>
        <div className="mt-8">{children}</div>
        {tint && <DropletDivider />}
      </div>
    </section>
  );
}
