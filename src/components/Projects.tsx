import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've shipped"
        subtitle="Production-grade builds focused on reliability, clean interfaces, and real-world AI features — most are live and deployed."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className={`group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/30 ${
              p.featured ? "lg:ring-1 lg:ring-accent/10" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-faint">
                {p.year}
              </span>
            </div>

            {p.featured && (
              <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                <Star size={11} className="fill-accent" />
                Featured
              </span>
            )}

            <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>

            <ul className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-accent/20 bg-accent/[0.06] px-2 py-1 text-xs text-accent/90"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-4">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  <Github size={15} />
                  Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
