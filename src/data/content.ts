export const profile = {
  name: "Ritik Gupta",
  role: "Full-Stack & Applied AI Engineer",
  location: "Kanpur, Uttar Pradesh, India",
  email: "porwal2000ritik@gmail.com",
  phone: "+91-8923937302",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Ritik-Gupta8",
    linkedin: "https://www.linkedin.com/in/ritikgupta-rp/",
    website: "https://ritikgupta8.in/",
  },
  // Rotating headline shown in the hero
  taglines: [
    "I ship production-grade web apps.",
    "I wire LLMs into real products.",
    "I build end-to-end, not just demos.",
    "Python · React · AWS · Gemini.",
  ],
  summary:
    "Full-stack and applied AI engineer building end-to-end, production-grade LLM-powered web applications. From a bilingual AI crop-disease app deployed on AWS to a multi-agent quiz platform with an 8-model fallback chain, I'm comfortable across the full stack: Python backends, React/Vue frontends, cloud infrastructure, and generative AI integration.",
  stats: [
    { value: "8-model", label: "AI fallback chain built for 99%+ uptime" },
    { value: "15+", label: "REST API endpoints designed & stress-tested" },
    { value: "$0", label: "Cost AI generation at production scale" },
    { value: "IIT", label: "Madras — B.S. Data Science" },
  ],
};

export type Skill = { name: string };

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "Flask",
      "React.js",
      "Vue.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI & LLM Engineering",
    skills: [
      "Google Gemini API",
      "Prompt Engineering",
      "Prompt Chaining",
      "Multi-Agent Systems",
      "Gemini ADK",
      "RAG",
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      "AWS (EC2, S3, DynamoDB)",
      "Google Cloud",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "SQLite",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Celery",
      "Postman",
      "Git",
      "Vercel",
      "Render",
      "Linux / WSL",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  year: string;
  demo?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "KrishiRakshak — AI Crop & Livestock Doctor",
    year: "2026",
    featured: true,
    blurb:
      "Bilingual (Hindi/Marathi) multimodal disease-detection app built for the AWS AI for Bharat Hackathon, targeting low-connectivity rural farmers.",
    highlights: [
      "Vision-language pipeline on Gemini 2.5 Flash with two-stage prompt chaining: image validation then structured JSON (disease, severity, treatment, prevention).",
      "Integrated OpenWeather API for humidity/temperature-based risk alerts.",
      "AWS backend (S3 + DynamoDB) with client-side image compression for offline-capable delivery, deployed live on EC2.",
    ],
    tags: ["Flask", "Gemini 2.5 Flash", "AWS S3", "DynamoDB", "EC2", "PWA", "Chart.js"],
    github: "https://github.com/Ritik-Gupta8",
  },
  {
    title: "Quiz Master — AI-Powered Adaptive Quiz Platform",
    year: "2026",
    featured: true,
    blurb:
      "Production-grade, multi-role quiz platform with zero-cost AI generation and robust concurrent session handling.",
    highlights: [
      "8-model free-tier fallback chain across Gemini variants for 99%+ AI uptime at $0 cost.",
      "SHA-256 SQL response caching to eliminate redundant LLM calls and cut repeat-query latency.",
      "Anti-cache-poisoning headers, session scoping for multi-user isolation, XP leaderboard, and real-time Chart.js analytics.",
    ],
    tags: ["Flask", "PostgreSQL", "Supabase", "Gemini API", "Tailwind", "Render"],
    demo: "https://quiz-master-058v.onrender.com/",
    github: "https://github.com/Ritik-Gupta8/Quiz_Master_App",
  },
  {
    title: "Smart Parking Management System",
    year: "2025",
    blurb:
      "Full-stack, role-based parking management app with reservation workflows, dynamic pricing, caching, and admin dashboards.",
    highlights: [
      "Real-time spot tracking, automatic allocation, reservation history, and cost calculation.",
      "Designed, versioned, and stress-tested 15+ REST API endpoints in Postman with schema validation and edge-case guards.",
      "Background jobs with Celery + Redis across reservation, billing, and release workflows.",
    ],
    tags: ["Flask", "Vue.js", "Redis", "Celery", "SQLite", "REST API"],
    demo: "https://parking-lot-app1.onrender.com/",
    github: "https://github.com/Ritik-Gupta8/Parking_Lot_v2",
  },
  {
    title: "AI-Driven Personal Daily Planner",
    year: "2025",
    blurb:
      "Multi-agent daily planner built with Google's Agent Development Kit and Gemini models, featuring resumable automation flows.",
    highlights: [
      "Task-oriented agents coordinated through multi-agent workflows.",
      "Resumable automation flows built on the Gemini ADK.",
    ],
    tags: ["Google ADK", "Gemini", "Python", "AI Agents", "Automation"],
    demo: "https://www.kaggle.com/code/ritikgupta001/ai-driven-personal-daily-planner-with-multi-agent",
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  kind: "education" | "experience" | "certification";
};

export const timeline: TimelineItem[] = [
  {
    kind: "education",
    title: "B.S. in Data Science and Applications",
    org: "Indian Institute of Technology, Madras",
    period: "Sep 2023 – Nov 2025",
    detail: "Chennai, India — Diploma in Programming.",
  },
  {
    kind: "experience",
    title: "Full-Stack Web Development Intern",
    org: "Jyesta Corporate Entity",
    period: "Sep – Nov 2025",
    detail:
      "Built and shipped backend features: REST API design, database schema, and third-party API integration.",
  },
  {
    kind: "certification",
    title: "Generative AI Leader — Career Launchpad",
    org: "Google Cloud",
    period: "Jan – Apr 2026",
    detail: "Foundation models, RAG, AI agents, and responsible AI on GCP.",
  },
  {
    kind: "certification",
    title: "AWS Academy Graduate: Cloud Foundations",
    org: "Amazon Web Services",
    period: "May 2026",
    detail: "Cloud fundamentals, core AWS services, and architecture basics.",
  },
  {
    kind: "education",
    title: "B.Sc. in Mathematics, Physics & Economics",
    org: "Chhatrapati Sahuji Maharaj University",
    period: "Aug 2019 – Aug 2022",
    detail: "Kanpur, India.",
  },
];
