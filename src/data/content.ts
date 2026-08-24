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
    { value: "IIT", label: "Madras — B.S. (Programming)" },
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
      "Node.js",
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
    title: "OrbitKeeper — Autonomous AI Career Agent",
    year: "2026",
    featured: true,
    blurb:
      "Autonomous, multi-agent career copilot orchestrating six specialized Gemini-powered agents to score job fit, map skill gaps, and manage application deadlines.",
    highlights: [
      "Orchestrated 6 autonomous agents (Job Analysis, Resume Analysis, Career Planning, Interview Prep, Career Memory, Deadline Monitoring) using Gemini 3.5 Flash via Google Agent Platform.",
      "Implemented a custom MongoDB MCP Server with 14 schema-validated tools for long-term database state management, eliminating direct database imports.",
      "Developed a 24/7 background deadline monitor using node-cron and Gmail SMTP to autonomously send 24h & 12h email reminders to users.",
    ],
    tags: ["Google Agent Platform", "Gemini 3.5 Flash", "MongoDB MCP", "React", "Node.js", "Firebase Auth"],
    demo: "https://orbitkeeper.vercel.app",
    github: "https://github.com/Ritik-Gupta8/OrbitKeeper",
  },
  {
    title: "Chaupal.AI — Multilingual Voice AI Agricultural Platform",
    year: "2026",
    featured: true,
    blurb:
      "A voice-first, multilingual AI decision-making platform for climate-resilient farming, featuring crop disease diagnosis, risk scoring, and interactive voice assistant.",
    highlights: [
      "Built an end-to-end voice pipeline using Sarvam Saarika (STT) and Bulbul (TTS) to provide full audio input/output loop in 5 Indian languages.",
      "Designed crop disease vision pipeline with Google Gemini Vision and a multi-agent system in FastAPI for risk calculation and weather intelligence.",
      "Engineered a high-performance analytics dashboard serving a 500K-record BigQuery warehouse, achieving 22.58x data processing speedup using NVIDIA RAPIDS cuDF.",
    ],
    tags: ["FastAPI", "Next.js", "Sarvam AI", "Gemini Vision", "Google BigQuery", "NVIDIA RAPIDS", "TypeScript"],
    demo: "https://chaupal-ai.vercel.app",
    github: "https://github.com/yash0238/Chaupal.AI",
  },
  {
    title: "KrishiRakshak — AI Crop & Livestock Doctor",
    year: "2026",
    blurb:
      "Bilingual (Hindi/Marathi) multimodal disease-detection app built for the AWS AI for Bharat Hackathon, targeting low-connectivity rural farmers.",
    highlights: [
      "Built a bilingual (Hindi/Marathi) multimodal disease-detection app for the AWS AI for Bharat Hackathon, targeting low-connectivity rural users.",
      "Engineered a vision-language pipeline using Gemini 2.5 Flash with two-stage prompt chaining (image validation and structured JSON output); integrated OpenWeather API for weather-based risk alerts; architected AWS backend (S3 + DynamoDB) with client-side image compression for offline-capable PWA delivery.",
      "Delivered a live, EC2-deployed prototype with a Chart.js analytics dashboard tracking diagnosis history and severity trends; accepted as a qualified hackathon submission.",
    ],
    tags: ["Flask", "Gemini 2.5 Flash", "AWS S3", "DynamoDB", "EC2", "PWA", "Chart.js"],
    github: "https://github.com/Ritik-Gupta8",
  },
  {
    title: "Quiz Master — AI-Powered Adaptive Quiz Platform",
    year: "2026",
    blurb:
      "Production-grade, multi-role quiz platform with zero-cost AI generation and robust concurrent session handling.",
    highlights: [
      "Generic quiz tools lack adaptive AI generation, cost reliability, and concurrent multi-user isolation.",
      "Developed a production-grade, multi-role quiz platform with zero-cost AI generation and robust session handling.",
      "Designed an 8-model free-tier fallback chain across Gemini variants to ensure 99%+ AI uptime; implemented SHA-256 SQL response caching to eliminate redundant LLM calls; enforced anti-cache-poisoning headers and session scoping for multi-tenant data isolation; built XP-based leaderboards and real-time Chart.js analytics.",
      "Platform live on Render with Supabase-hosted PostgreSQL supporting multi-user concurrent sessions; caching measurably reduced repeat-query latency.",
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
      "Built a full-stack role-based application featuring responsive design, reservation workflows, dynamic pricing, Redis caching, Celery background jobs, and admin/user dashboards; designed and verified REST APIs via Postman.",
    ],
    tags: ["Flask", "Vue.js", "Redis", "Celery", "SQLite", "Bootstrap", "Render"],
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
  detail: string | string[];
  kind: "education" | "experience" | "certification";
};

export const timeline: TimelineItem[] = [
  {
    kind: "education",
    title: "B.S. (Diploma in Programming)",
    org: "Indian Institute of Technology Madras",
    period: "Sep 2023 – Nov 2025",
    detail: "Chennai, India",
  },
  {
    kind: "experience",
    title: "Full-Stack Web Development Intern",
    org: "Jyesta Corporate Entity",
    period: "Sep – Nov 2025",
    detail: [
      "Strengthened full-stack development fundamentals through hands-on practice with React.js, Node.js, JavaScript (ES6+), SQL, and Git/GitHub during a structured virtual internship.",
      "Built and tested REST APIs, CRUD workflows, responsive UI components, and database operations while following modern software engineering practices and version control workflows.",
      "Improved understanding of frontend-backend integration, debugging, authentication concepts, database design, and collaborative development using Git-based workflows.",
    ],
  },
  {
    kind: "certification",
    title: "Google Cloud Career Launchpad: Generative AI Leader",
    org: "Google Cloud",
    period: "Jan – Apr 2026",
    detail: "Foundation models, RAG, AI agents, responsible AI on GCP.",
  },
  {
    kind: "certification",
    title: "AWS Academy Graduate: Cloud Foundations",
    org: "AWS",
    period: "May 2026",
    detail: "Core AWS services, infrastructure management, and cloud security basics.",
  },
  {
    kind: "education",
    title: "B.Sc. in Mathematics, Physics & Economics",
    org: "Chhatrapati Sahuji Maharaj University",
    period: "Aug 2019 – Sep 2022",
    detail: "Kanpur, India",
  },
];
