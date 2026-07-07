import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I build with"
        subtitle="A pragmatic toolkit spanning full-stack development, applied AI, cloud infrastructure, and DevOps."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
