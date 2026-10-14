# Personal Portfolio — Rakesh G R

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://rakeshgr.netlify.app)
[![Vercel Backend](https://img.shields.io/badge/Backend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://rakeshgr.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Live Website**: [rakeshgr.netlify.app](https://rakeshgr.netlify.app)  
**Primary GitHub**: [github.com/Rakeshgr962](https://github.com/Rakeshgr962)  
**Campus Org**: [github.com/Aiet-Unisphere](https://github.com/Aiet-Unisphere)

---

## What it is

The official personal engineering portfolio of **Rakesh G R** — B.Tech Computer Science (Data Science) final-year engineer at Alva's Institute of Engineering and Technology, Mangalore.

Redesigned with a **Thom Midhi-inspired editorial engineering aesthetic**:
* **Editorial visual hierarchy**: Newsreader display serif paired with Plus Jakarta Sans and JetBrains Mono.
* **Warm stone canvas**: High-contrast, typography-first layout with zero generic glowing gamer effects or fabricated metrics.
* **Inspectable, defensible project case studies**: Deep-dive modals covering architectural trade-offs, direct contributions, and honest limitations.
* **Interactive engineering demonstrations**:
  * Live **Dense Matrix Multiplication** compute throughput benchmark chart (ikj vs naive ijk loop ordering).
  * Live **YamlAnchor** NDJSON terminal simulator dry-running local Docker runner pipelines.
  * Live **AIET-UniSphere** PostgreSQL Row Level Security (RLS) multi-role architecture visualizer.

---

## Verified Project Showcase

| Project | Category | Verified Stack | Defensible Metric / Core Signal |
| :--- | :--- | :--- | :--- |
| [**AIET-UniSphere**](https://github.com/Aiet-Unisphere/AIET-UniSphere) | Campus Academic Platform | React 19, TS, Vite, Supabase RLS | **100% Database-enforced authorization** across 4 roles (Student, Faculty, HOD, Admin); zero custom server attack surface |
| [**YamlAnchor**](https://github.com/Rakeshgr962/YamlAnchor) | Developer Tooling / DevOps | Go, Next.js, TS, Docker SDK | **Zero remote test commits**; AST dependency analysis with live NDJSON Docker log streaming |
| [**Dense Matrix Multiplication**](https://github.com/Rakeshgr962/Dense-Matrix-Multiplication) | Systems / HPC | C11, OpenMP, Python, GCC `-O3` | **~12.6x speedup** via `ikj` loop reordering alone; optimal 64/128 tile sizes; 81-test validation suite ($\varepsilon < 10^{-9}$) |
| [**Customer Churn API**](https://github.com/Rakeshgr962/Customer-churn-) | Applied ML / Backend | XGBoost, FastAPI, MLflow, Docker | **81% accuracy, 77% precision, 68% recall** on 7,043 Telco records; strict post-event data leakage elimination |
| [**Waste Classifier & AI-EcoSort**](https://github.com/Rakeshgr962/GarbageClassfication) | Vision & Responsible AI | TensorFlow, EfficientNetB0, React 19, Vitest | **89.24% test accuracy** on 6-class benchmark; deterministic rule-based assistant (1M1B IBM SkillsBuild) |

---

## Supporting Projects Shelf

* [**PriceFlow-Agent**](https://github.com/Rakeshgr962/PriceFlow-Agent) — Dynamic pricing SaaS foundation (FastAPI, React, PostgreSQL, Redis, Docker Compose).
* [**glitrai-mini-content-engine**](https://github.com/Rakeshgr962/glitrai-mini-content-engine) — Async LLM content pipeline (FastAPI, Groq LLM, Pollinations, Postgres queue).
* [**AeroBuy**](https://github.com/Rakeshgr962/AeroBuy) — Flask + MongoDB e-commerce store with session-based authentication.
* [**arthasetu-website**](https://github.com/Rakeshgr962/arthasetu-website) — Client-side SIP calculator and financial portal with monthly iterative compounding.
* [**AR-World**](https://github.com/Rakeshgr962/AR-World) — Research documentation and system specifications for spatial design applications.

---

## Project Structure

```
portfolio/
├── client/
│   ├── index.html         # Single-page editorial portfolio with semantic markup & accessibility
│   ├── style.css          # Thom Midhi-inspired design system: variables, editorial grid, responsive cards
│   ├── app.js             # Interactive case studies, benchmark SVG chart, terminal sim & contact form
│   └── assets/
│       └── resume/
│           └── Rakesh_GR_Resume.pdf
└── server/
    ├── server.js          # Express.js contact endpoint (POST /api/contact)
    ├── package.json
    └── vercel.json        # Vercel serverless routing config
```

---

## How to Run Locally

### 1. Frontend Client
```bash
git clone https://github.com/Rakeshgr962/portfolio.git
cd portfolio/client
```
Open `index.html` in any modern web browser or run with a local static server:
```bash
npx serve .
```

### 2. Backend Server (Optional)
```bash
cd ../server
npm install
npm start
# Server listens on http://localhost:3000
```

---

## Contact & Opportunities

* **Email**: [rakeshgr962@gmail.com](mailto:rakeshgr962@gmail.com)
* **LinkedIn**: [linkedin.com/in/rakesh-gr](https://linkedin.com/in/rakesh-gr)
* **GitHub**: [github.com/Rakeshgr962](https://github.com/Rakeshgr962)
* **Availability**: Open for **AI/ML Engineering, Full-Stack, and Systems Internships from December 2026**.

---

## License

MIT &copy; 2026 Rakesh G R. See [LICENSE](LICENSE) for details.
