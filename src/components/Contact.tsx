import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manrppzy";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Share your idea or role, and I'll reply with clear next steps and how I can help."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-2"
        >
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-night">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-faint">Email</span>
                <span className="block truncate text-sm text-ink">{profile.email}</span>
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-night">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-faint">
                  Phone / WhatsApp
                </span>
                <span className="block text-sm text-ink">{profile.phone}</span>
              </span>
            </a>

            <div className="mt-auto flex gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <Field label="Subject" name="subject" placeholder="Project or collaboration" />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me a bit about what you're building…"
              className="rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-1 focus:ring-accent/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={16} />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400">
              Thanks — your message is on its way. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-400">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-1 focus:ring-accent/40"
      />
    </div>
  );
}
