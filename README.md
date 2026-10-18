# Personal Engineering Portfolio — Rakesh G R

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://rakeshgr.netlify.app)
[![Vercel Backend](https://img.shields.io/badge/Backend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://rakeshgr.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Live Website**: [rakeshgr.netlify.app](https://rakeshgr.netlify.app)  
**Primary GitHub**: [github.com/Rakeshgr962](https://github.com/Rakeshgr962)  
**Campus Org**: [github.com/Aiet-Unisphere](https://github.com/Aiet-Unisphere)

---

## Engineering Focus & Positioning

The official engineering portfolio of **Rakesh G R** — Computer Science & Data Science engineering student at Alva's Institute of Engineering and Technology (AIET), Mangalore.

Specifically engineered to position for three target roles:
1. **AI Engineer**
2. **AI Developer**
3. **AI Software Engineer**

### Core Philosophy
> *"Engineering intelligence into real-world software."*  
Building AI-powered applications, machine learning systems, intelligent APIs, and full-stack software products with hardware empathy, strict data integrity, and zero fabricated claims.

---

## Multi-Page Information Architecture

The website is architected as a true multi-page application with direct clean routes, deep-linkable URLs, and static pre-rendering:

* **Page 1 — Home (`/`, `index.html`)**: Cinematic animated hero with split-line typography, Three.js atmospheric dust particle field, 3D interactive tech constellation, flagship project teasers, philosophy, and recruiter CTAs.
* **Page 2 — About (`/about`, `about.html`)**: Personal narrative, engineering approach, academic credentials at AIET Mangalore, verified milestones, and target roles.
* **Page 3 — Skills (`/skills`, `skills.html`)**: Interactive technical capability map across 5 structured domains (AI & ML, AI App Dev, Software Engineering, Data & Databases, Systems & Tools). Explicitly partitions **Shipped in Projects** from **Active Research**. Includes real-time search and domain filter tabs.
* **Page 4 — Projects (`/projects`, `projects.html`)**: Searchable, filterable catalog across 5 domains (AI/ML, Full Stack, Backend, Systems, DevOps) with live search and editorial cards.
* **Page 5 — Dedicated Case Studies (`/projects/<slug>` and `case-study.html?id=<slug>`)**:
  * [`/projects/aiet-unisphere`](client/projects/aiet-unisphere.html) — Campus academic platform with PostgreSQL Row Level Security (RLS).
  * [`/projects/yamlanchor`](client/projects/yamlanchor.html) — Local CI/CD pipeline simulator in Go and Docker.
  * [`/projects/dense-matrix-multiplication`](client/projects/dense-matrix-multiplication.html) — High-performance C11/OpenMP kernel (~12.6x speedup).
  * [`/projects/customer-churn`](client/projects/customer-churn.html) — Production MLOps XGBoost API with MLflow and Docker.
  * [`/projects/garbage-classification`](client/projects/garbage-classification.html) — EfficientNetB0 transfer learning (95.8% test accuracy).
  * [`/projects/ai-ecosort`](client/projects/ai-ecosort.html) — Responsible AI text classifier with confidence guardrails (1M1B Award).
  * [`/projects/glitrai`](client/projects/glitrai.html) — Async LLM + generative vision content engine with fallback handling.
  * [`/projects/priceflow-agent`](client/projects/priceflow-agent.html) — Real-time price tracking foundation with Redis caching.
* **Page 6 — Education & Experience (`/experience`, `experience.html`)**: Chronological timeline of academic milestones at AIET Mangalore (2023–2027), Green AI internships (Edunet/Shell/AICTE), and open-source leadership.
* **Page 7 — Contact (`/contact`, `contact.html`)**: Recruitment intake with verified coordinates, copy-to-clipboard email, PDF resume download, and a validated contact form with serverless submission and mailto fallback.

---

## 8 Tailored Interactive Engineering Visualizations

Each flagship project features an interactive, inspectable technical widget:
1. **AIET-UniSphere**: Multi-role PostgreSQL Row Level Security (RLS) Policy Inspector.
2. **YamlAnchor**: Simulated local Docker workflow runner terminal with streaming NDJSON logs.
3. **Dense Matrix Multiplication**: Interactive GFLOPS compute throughput benchmark chart comparing `ijk` vs `ikj` cache blocking.
4. **Customer Churn API**: Interactive decision boundary and churn probability tester with tenure and monthly charges sliders.
5. **Garbage Classification**: 6-waste category classification inspector with confidence scores.
6. **AI-EcoSort**: Rule-based vs LLM waste recycling assistant with uncertainty notices and confidence meters.
7. **GlitrAI Engine**: Multi-step asynchronous job lifecycle state machine (Prompt Generation &rarr; Image Synthesis &rarr; Persistence).
8. **PriceFlow-Agent**: Real-time moving average threshold simulation with price drop detection.

---

## Design System & Motion

* **Aesthetic**: Thom Midhi-inspired warm stone editorial look (`#FBF9F5` light canvas, `#111215` obsidian dark mode, Newsreader display serif, Plus Jakarta Sans, JetBrains Mono).
* **Atmospheric Motion**: Lightweight Three.js GPU particle system with natural turbulence, pointer parallax, and dark/light mode reactivity.
* **Accessibility**: Full `prefers-reduced-motion` support, semantic landmarks, high-contrast text ratios, and keyboard navigable controls.

---

## Local Development & Testing

### Run Local Clean-URL Dev Server
```bash
node dev-server.js
# Serves at http://localhost:4173 with clean routes matching Netlify _redirects
```

### Regenerate Static Case Studies
```bash
node scripts/generate-case-studies.js
# Pre-renders standalone HTML files into client/projects/
```

### Backend Serverless API (Optional)
```bash
cd server
npm install
npm start
# Listens on http://localhost:3000 (deployed on Vercel)
```

---

## Contact

* **Email**: [rakeshgr962@gmail.com](mailto:rakeshgr962@gmail.com)
* **LinkedIn**: [linkedin.com/in/rakeshgr18](https://www.linkedin.com/in/rakeshgr18)
* **GitHub**: [github.com/Rakeshgr962](https://github.com/Rakeshgr962)
* **Availability**: Open for **AI Engineer, AI Developer, and AI Software Engineer internships starting December 2026**.
