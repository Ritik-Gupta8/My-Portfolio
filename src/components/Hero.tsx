import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/content";

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

export default function Hero() {
  const rotating = useRotatingText(profile.taglines);

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-5 pt-36 pb-20 md:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to SDE, Full-Stack & AI Engineering roles
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-gradient">Ritik Gupta</span>
        </h1>

        <div className="mt-4 flex items-center gap-2 font-display text-xl text-accent sm:text-2xl">
          <Sparkles size={20} className="shrink-0" />
          <span>{rotating}</span>
          <span className="inline-block h-6 w-0.5 animate-pulse bg-accent" />
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
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-base shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
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
          <div className="flex items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-accent/30"
          >
            <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1.5 text-xs leading-snug text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
