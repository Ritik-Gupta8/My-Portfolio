import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
    </motion.div>
  );
}
