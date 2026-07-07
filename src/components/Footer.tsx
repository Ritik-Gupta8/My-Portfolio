import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} Ritik Gupta. Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
