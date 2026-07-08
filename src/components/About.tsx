import { motion } from "framer-motion";
import { Boxes, Brain, Cloud, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    body: "End-to-end apps in Python, Flask, React, and Vue — from backend logic and REST APIs to polished, responsive frontends.",
  },
  {
    icon: Brain,
    title: "Applied AI & LLMs",
    body: "Gemini-powered features with prompt chaining, multi-agent workflows, RAG, and cost-aware fallback logic for real uptime.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    body: "Deploying on AWS (EC2, S3, DynamoDB), Supabase, and Render with CI/CD, Docker, Redis caching, and Celery background jobs.",
  },
  {
    icon: Boxes,
    title: "Production Mindset",
    body: "Auth, role-based access, session isolation, caching, and schema-validated APIs — I build for scale, not just the demo.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="About"
        title="I build software that solves real problems"
        subtitle="I'm a full-stack and applied AI engineer who enjoys taking products from idea to production — scalable backends, intuitive frontends, and practical AI integrations, not just localhost demos."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-night">
              <p.icon size={20} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
