# Ritik Gupta — Portfolio

Personal portfolio of **Ritik Gupta**, a Full-Stack & Applied AI Engineer.
A modern, animated single-page site showcasing my summary, skills, projects,
journey, and contact details.

🔗 **Live:** https://ritikgupta8.in

---

## 🛠 Tech Stack

- **React 18 + TypeScript** — type-safe, component-driven UI
- **Vite 6** — fast dev server and optimized production builds
- **Tailwind CSS v4** — utility-first styling with a custom theme
- **Framer Motion** — scroll + entrance animations
- **Lucide React** — icon set
- **Formspree** — serverless contact form handling

## 🚀 Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
```

## 📁 Structure

```
├─ index.html                # Vite entry HTML
├─ public/                   # static assets (resume.pdf, favicon, CNAME)
├─ src/
│  ├─ main.tsx               # React entry
│  ├─ App.tsx                # page composition
│  ├─ index.css              # Tailwind theme + global styles
│  ├─ data/content.ts        # all editable content (profile, skills, projects…)
│  └─ components/            # Navbar, Hero, About, Skills, Projects, Timeline, Contact, Footer
├─ vercel.json               # Vercel build config
└─ .github/workflows/        # GitHub Pages build + deploy
```

To update content (projects, skills, experience), edit **`src/data/content.ts`** —
no component changes needed.

## ☁️ Deployment

### Vercel (recommended, free)
1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite — just click **Deploy**. No config required.
4. (Optional) Add the custom domain `ritikgupta8.in` in project settings.

### GitHub Pages
The workflow in `.github/workflows/static.yml` builds the app and deploys `/dist`
automatically on every push to `main`. The `public/CNAME` file keeps the custom
domain working.

## License

Source code licensed under the MIT License.
Personal content, text, and images © 2026 Ritik Gupta. All rights reserved.
