import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/content";
import { useSpotlight } from "../hooks/useSpotlight";

function useRotatingText(items: string[], speed = 65, pause = 1600) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index];
    let delay = deleting ? speed / 2 : speed;

    if (!deleting && text === current) {
      delay = pause;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % items.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, items, speed, pause]);

  return text;
}

const marqueeItems = [
  "Python",
  "React",
  "TypeScript",
  "Flask",
  "AWS",
  "Gemini API",
  "PostgreSQL",
  "Vue.js",
  "Docker",
  "Tailwind CSS",
];

export default function Hero() {
  const rotating = useRotatingText(profile.taglines);
  const onMove = useSpotlight();

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 md:pt-40">
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
        {/* Main intro tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseMove={onMove}
          className="spotlight-card col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to SDE, Full-Stack & AI Engineering roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gradient">Ritik Gupta</span>
          </h1>

          <div className="mt-4 flex items-center gap-2 font-display text-xl text-accent-2 sm:text-2xl">
            <Sparkles size={20} className="shrink-0" />
            <span>{rotating}</span>
            <span className="inline-block h-6 w-0.5 animate-pulse bg-accent-2" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-faint">
            <MapPin size={15} />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download="Ritik-Gupta-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Socials + availability tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseMove={onMove}
          className="spotlight-card flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 via-white/[0.03] to-accent-3/10 p-7 backdrop-blur-xl"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-faint">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40"
              >
                <Github size={17} className="text-accent-2" />
                GitHub
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40"
              >
                <Linkedin size={17} className="text-accent-2" />
                LinkedIn
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-night/40 p-4">
            <p className="font-display text-2xl font-bold text-gradient">2026</p>
            <p className="mt-1 text-xs leading-snug text-muted">
              Graduating IIT Madras — B.S. Data Science
            </p>
          </div>
        </motion.div>

        {/* Stats tiles */}
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
            onMouseMove={onMove}
            className="spotlight-card rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
          >
            <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1.5 text-xs leading-snug text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Tech marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pause-on-hover mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4"
      >
        <div className="animate-marquee flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-2 text-sm font-medium text-faint"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2/70" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
