import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data/content";

const iconFor = {
  education: GraduationCap,
  experience: Briefcase,
  certification: Award,
} as const;

const labelFor = {
  education: "Education",
  experience: "Experience",
  certification: "Certification",
} as const;

export default function Timeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Education, experience & certifications"
        subtitle="From an IIT Madras Data Science degree to hands-on internships and cloud/AI certifications."
      />

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent md:left-1/2" />

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const Icon = iconFor[item.kind];
            const alignRight = i % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  alignRight ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"
                }`}
              >
                <span
                  className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-base text-accent md:left-auto ${
                    alignRight ? "md:-left-4" : "md:-right-4"
                  }`}
                >
                  <Icon size={15} />
                </span>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-accent/30">
                  <div
                    className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${
                      alignRight ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {labelFor[item.kind]}
                    </span>
                    <span className="text-xs text-faint">{item.period}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-faint">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
