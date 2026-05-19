# Personal Portfolio — Rakesh G R

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://rakeshgr.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Live**: [rakeshgr.netlify.app](https://rakeshgr.netlify.app)

---

## What it does

This is the source code for my personal developer portfolio website. It serves as a single place that communicates who I am, what I've built, and how to reach me — designed to work for both a recruiter scanning it in 30 seconds and an engineer reading through the technical project details.

**Sections:**
- **Hero** — name, role, and a quick professional summary
- **About** — background, education (B.Tech CSE Data Science, Alva's Institute), and technical focus areas
- **Projects** — 5 featured projects with tech tags, impact metrics, and descriptions (RFID system, Atmos AQI, AeroBuy, Garbage Classification AI, Medical Imaging Detection)
- **Skills** — grouped by Frontend, Backend, Database, ML/AI, and Tools
- **Contact** — email form connected to the Node.js backend that sends messages via a server-side handler

---

## Why it matters

A portfolio website is the first thing a hiring manager opens after reading your resume. This one is designed to do two things well:

1. **Not waste their time** — the information hierarchy is deliberate. The most important things (who I am, what I've shipped, how to reach me) are visible within the first scroll.
2. **Show, don't tell** — each project card includes real metrics (99%+ RFID accuracy, 88% AQI model validation accuracy, 89.24% garbage classifier accuracy) rather than vague descriptions.

The contact form is wired to a real backend — not a mailto link — so messages actually reach me without exposing an email address to scrapers.

---

## How to run it

### Frontend only

```bash
git clone https://github.com/Rakeshgr962/rakeshgr.git
cd rakeshgr/client
```

Open `index.html` in any browser. All UI is static and works without the backend (the contact form will be non-functional without it).

### Full stack (with contact form)

```bash
# Backend server
cd server
npm install
npm start
# Starts on http://localhost:3000
```

Then open `client/index.html`. The contact form submits to `http://localhost:3000/submit`, which the Node.js server handles.

### Deploying to Vercel

The `server/vercel.json` config routes all requests to the serverless handler. Deploy directly:

```bash
cd server
vercel
```

---

## Project structure

```
rakeshgr/
├── client/
│   ├── index.html         # Full single-page portfolio — all sections inline
│   ├── style.css          # Design system: CSS variables, dark theme, animations,
│   │                      # responsive grid, hover effects on project cards
│   ├── app.js             # Interaction logic: scroll animations, form submission,
│   │                      # mobile nav toggle, section active-state tracking
│   └── assets/
│       └── resume/
│           └── Rakesh_GR_Resume.pdf
└── server/
    ├── server.js          # Express.js server — handles POST /submit (contact form)
    ├── package.json
    └── vercel.json        # Vercel serverless routing config
```

---

## Contact

The portfolio is the fastest way to reach me: [rakeshgr.netlify.app](https://rakeshgr.netlify.app)  
Or directly: [rakeshgr223@gmail.com](mailto:rakeshgr223@gmail.com)

---

## License

MIT — see [LICENSE](LICENSE).
