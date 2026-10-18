const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'kage-source', 'index.html');
const destPath = path.join(__dirname, '..', 'client', 'index.html');

console.log('Reading kage-source/index.html...');
let html = fs.readFileSync(srcPath, 'utf8');

// 1. Assets path updates: secret-pathways-assets/ -> kage-assets/
html = html.replace(/secret-pathways-assets\//g, 'kage-assets/');

// 2. Title & Meta tags
html = html.replace(/<title>.*?<\/title>/i, '<title>Rakesh G R — AI Engineer & Software Systems</title>');
html = html.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Portfolio of Rakesh G R — AI Engineer, AI Developer, and AI Software Engineer building production machine learning systems, high-performance algorithms, and scalable web software.">'
);

// 3. Preloader Japanese & text
html = html.replace(/<div class="pre-jp jp">.*?<\/div>/, '<div class="pre-jp jp" style="letter-spacing:0.25em;">RAKESH G R · AI SYSTEMS</div>');
html = html.replace(/<span>Raising the mountain temple<\/span>/, '<span>Initializing WebGL Computation Core</span>');

// 4. Navigation brand & links
// Brand
const brandOld = /<a class="brand" href="#top" data-cursor>[\s\S]*?<\/a>/;
const brandNew = `<a class="brand" href="#top" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
      <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      <path d="M14 35.5h16" stroke="#dfe7e0" stroke-width="1.2" stroke-opacity=".6"/>
    </svg>
    <span class="brand-tx"><b>RAKESH G R</b><i>AI ENGINEER & SYSTEMS</i></span>
  </a>`;
html = html.replace(brandOld, brandNew);

// Nav Links
const navLinksOld = /<nav class="nav-links" id="navlinks">[\s\S]*?<\/nav>/;
const navLinksNew = `<nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#hero" data-cursor><span>Home</span><span class="alt">00</span></a>
    <a class="nav-link" href="#gate" data-cursor><span>About Me</span><span class="alt">01</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Projects</span><span class="alt">02</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>Skills</span><span class="alt">03</span></a>
    <a class="nav-link" href="#eternity" data-cursor><span>Experience</span><span class="alt">04</span></a>
    <a class="nav-link" href="#contact" data-cursor><span>Contact</span><span class="alt">05</span></a>
  </nav>`;
html = html.replace(navLinksOld, navLinksNew);

// 5. Hero Section
const heroOld = /<section class="hero" id="hero" data-cam="0">[\s\S]*?<\/section>/;
const heroNew = `<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade">
      <span class="dot"></span> Chapter 00 — Introduction · AI Engineer | AI Developer | AI Software Engineer
    </div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Engineering</span></span>
      <span class="mask-line"><span>Intelligence Into</span></span>
      <span class="mask-line"><span>Real-World Software.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up" style="max-width:440px; margin-bottom:20px;">
      I'm Rakesh G R, a Computer Science and Data Science engineering student building AI-powered applications, machine learning systems, and full-stack software.
    </p>

    <!-- Hero Actions -->
    <div class="kage-hero-actions" data-rv="up">
      <a class="kage-btn-primary" href="#pathways" data-cursor>
        <span>View My Projects</span>
        <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#fff" stroke-width="1.4"/></svg>
      </a>
      <a class="kage-btn-secondary" href="/about" data-cursor>
        <span>About Me</span>
      </a>
      <a class="kage-btn-social" href="https://github.com/Rakeshgr962" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-cursor title="GitHub">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>
      <a class="kage-btn-social" href="https://www.linkedin.com/in/rakeshgr18" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor title="LinkedIn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
    </div>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Explore Chapters</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <a class="chip" href="#gate" data-chip="0" data-rv="up" data-cursor>
        <span class="num">01</span>
        <span class="tx"><b>About Me</b><p>Identity, philosophy, and engineering rigor.</p></span>
      </a>
      <a class="chip" href="#pathways" data-chip="1" data-rv="up" data-cursor>
        <span class="num">02</span>
        <span class="tx"><b>Selected Projects</b><p>Production AI platforms, systems & local CI/CD.</p></span>
      </a>
      <a class="chip" href="#lessons" data-chip="2" data-rv="up" data-cursor>
        <span class="num">03</span>
        <span class="tx"><b>Technical Skills</b><p>ML, High-perf C11, Python, APIs & DevOps.</p></span>
      </a>
      <a class="chip" href="#eternity" data-chip="3" data-rv="up" data-cursor>
        <span class="num">04</span>
        <span class="tx"><b>Education & Exp</b><p>Academic milestones, coursework & engineering.</p></span>
      </a>
    </div>
  </div>

  <a class="peek" href="/projects/aiet-unisphere" data-view="3" data-rv="fade" data-cursor aria-label="Featured: AIET-UniSphere">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b>FLAGSHIP</b><i>AIET-UniSphere Platform</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">RAKESH</div>

  <div class="hero-side" data-rv="up">
    <span class="v jp" style="letter-spacing:0.22em; font-family:'Onest',sans-serif; font-size:11px; text-transform:uppercase;">AI ENGINEER</span>
  </div>
</section>`;
html = html.replace(heroOld, heroNew);

// 6. Chapter I - About Me (#gate)
const gateOld = /<section class="sec" id="gate" data-cam="1">[\s\S]*?<\/section>/;
const gateNew = `<section class="sec" id="gate" data-cam="1">
  <div class="fg" data-fg="gate" aria-hidden="true">
    <span class="fg-el fg-wall" data-fg-in="left">
      <img src="kage-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-pine" data-fg-in="right">
      <img src="kage-assets/foreground/png/pine-tree.webp" alt="" width="1024" height="1438" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="kage-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>01</b> — Chapter 01 · About Me</span><span class="rule"></span><span class="k">ENGINEERING PHILOSOPHY</span>
  </div>
  <div class="gate-grid">
    <h2 class="display h-sec" data-rv="up">Bridging machine learning and production software.</h2>
    <div class="gate-copy">
      <p class="lead" data-rv="up">I believe AI engineering is not about generating disposable prototypes in disconnected notebooks. It is about building resilient, typed, and observable software systems that reliably solve hard problems at scale.</p>
      <p class="body" data-rv="up">From optimizing dense matrix multiplication in C11 using L1/L2 cache tiling and OpenMP (~12.6x speedup), to architecting local-first containerized CI/CD engines (YamlAnchor) and secure institutional ecosystems with PostgreSQL Row Level Security (AIET-UniSphere), I engineer software with uncompromising craftsmanship.</p>
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap; margin-top:28px;">
        <a class="arrowlink" href="/about" data-rv="fade" data-cursor>
          <span>Read Full Biography & Background</span>
          <span class="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        </a>
      </div>
    </div>
  </div>
  <div class="gate-stats" data-rv="up">
    <div><b>04</b><span>Flagship Systems</span></div>
    <div><b>12.6x</b><span>Cache Tiling Speedup</span></div>
    <div><b>89.2%</b><span>Vision Classifier Acc</span></div>
    <div><b>100%</b><span>DB Security via RLS</span></div>
  </div>
</section>`;
html = html.replace(gateOld, gateNew);

// 7. Chapter II - Selected Projects (#pathways)
const pathwaysOld = /<section class="sec" id="pathways" data-cam="2">[\s\S]*?<\/section>/;
const pathwaysNew = `<section class="sec" id="pathways" data-cam="2">
  <div class="fg" data-fg="pathways" aria-hidden="true">
    <span class="fg-el fg-sakura fg-el--sway" data-fg-in="left">
      <img src="kage-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-leaves fg-el--sway" data-fg-in="right">
      <img src="kage-assets/foreground/png/maple-leaves.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-lantern" data-fg-in="up">
      <img src="kage-assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="kage-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Chapter 02 · Selected Projects</span><span class="rule"></span><span class="k">PRODUCTION ARCHITECTURES</span>
  </div>
  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor onclick="window.location.href='/projects/aiet-unisphere'">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:80.2%; --gy:23.9%; --gr:22%; --gt:6.1s; --gt2:9.7s; --gc1:rgba(255,142,108,.50); --gc2:rgba(212,56,38,.24)"></i>
        <div class="card-lab"><b>AIET-UniSphere</b><span class="jp" style="font-family:'Onest',sans-serif; letter-spacing:0.1em;">CAMPUS CORE</span></div>
      </div>
      <div class="card-meta"><span>PostgreSQL RLS · Auth · Realtime</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor onclick="window.location.href='/projects/yamlanchor'">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(226,118,40,.30)"></i>
        <div class="card-lab"><b>YamlAnchor</b><span class="jp" style="font-family:'Onest',sans-serif; letter-spacing:0.1em;">CI/CD ENGINE</span></div>
      </div>
      <div class="card-meta"><span>Python AST · Docker SDK · Runner</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor onclick="window.location.href='/projects/dense-matrix-multiplication'">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,138,104,.52); --gc2:rgba(208,54,36,.24)"></i>
        <div class="card-lab"><b>Dense Matrix Mult</b><span class="jp" style="font-family:'Onest',sans-serif; letter-spacing:0.1em;">HIGH PERF C11</span></div>
      </div>
      <div class="card-meta"><span>Cache Tiling · OpenMP · 12.6x</span><span>03 / 03</span></div>
    </article>
  </div>
  <div style="margin-top:clamp(40px, 6vh, 80px); text-align:center;">
    <a class="cta" href="/projects" data-rv="fade" data-cursor>
      <i></i><span>View All 8+ Verified Engineering Projects</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>
  </div>
</section>`;
html = html.replace(pathwaysOld, pathwaysNew);

// 8. Chapter III - Technical Skills (#lessons)
const lessonsOld = /<section class="sec" id="lessons" data-cam="3">[\s\S]*?<\/section>/;
const lessonsNew = `<section class="sec" id="lessons" data-cam="3">
  <div class="fg" data-fg="lessons" aria-hidden="true">
    <span class="fg-el fg-wall fg-el--flip" data-fg-in="right">
      <img src="kage-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="kage-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="kage-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — Chapter 03 · Technical Skills</span><span class="rule"></span><span class="k">CORE COMPETENCIES</span>
  </div>
  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Engineered for depth, speed, and real-world execution.</h2>
    <p class="body-lg" data-rv="up">A rigorous stack balancing low-level computational efficiency with modern machine learning pipelines, typed backend frameworks, and secure database layers.</p>
  </div>
  <div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor onclick="window.location.href='/skills'">
      <span class="k">01</span>
      <h3>Languages & Systems<em class="jp" style="font-family:'Onest',sans-serif;">FOUNDATIONS</em></h3>
      <p>Python 3.11+, C11 (GCC/Clang), Go 1.22, TypeScript, SQL, Bash.</p>
      <span class="t">Low-Level & Core</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor onclick="window.location.href='/skills'">
      <span class="k">02</span>
      <h3>Machine Learning & AI<em class="jp" style="font-family:'Onest',sans-serif;">INTELLIGENCE</em></h3>
      <p>Scikit-Learn, XGBoost, TensorFlow, EfficientNetB0, LangChain, Groq API, MLflow.</p>
      <span class="t">Modeling & Inference</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor onclick="window.location.href='/skills'">
      <span class="k">03</span>
      <h3>Backend & API Services<em class="jp" style="font-family:'Onest',sans-serif;">SERVICES</em></h3>
      <p>FastAPI, Pydantic v2, Docker SDK, Node.js, Express, Next.js, REST & WebSockets.</p>
      <span class="t">High Throughput</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor onclick="window.location.href='/skills'">
      <span class="k">04</span>
      <h3>Databases & Data Security<em class="jp" style="font-family:'Onest',sans-serif;">STORAGE</em></h3>
      <p>PostgreSQL, Supabase (Row Level Security), MongoDB, Redis, Schema Migrations.</p>
      <span class="t">ACID & RLS</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor onclick="window.location.href='/skills'">
      <span class="k">05</span>
      <h3>DevOps, Containers & Tooling<em class="jp" style="font-family:'Onest',sans-serif;">OPERATIONS</em></h3>
      <p>Docker, Docker Compose, Linux Administration, Git, CI/CD, Vite, Oxlint, Vitest.</p>
      <span class="t">Automated Delivery</span><i class="bar"></i>
    </div>
  </div>
</section>`;
html = html.replace(lessonsOld, lessonsNew);

// 9. Chapter IV - Education & Experience (#eternity)
const eternityOld = /<section class="sec fin" id="eternity" data-cam="4">[\s\S]*?<\/section>/;
const eternityNew = `<section class="sec fin" id="eternity" data-cam="4">
  <div class="fg" data-fg="eternity" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img src="kage-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left">
      <img src="kage-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="kage-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-sakura" data-fg-in="left">
      <img src="kage-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="eyebrow" data-rv="fade">Chapter 04 — Education & Experience</div>
  <h2 class="display" data-rv="up" style="letter-spacing:-0.02em;">ACADEMIC & TIMELINE</h2>
  <p class="body-lg" data-rv="up" style="max-width:560px;">
    B.Tech in Computer Science & Engineering (Data Science) at Alva's Institute of Engineering & Technology (2023–2027). Dedicated to building scalable software systems and practical AI integrations.
  </p>
  <div style="display:flex; gap:16px; margin-top:36px; flex-wrap:wrap; justify-content:center;">
    <a class="cta" href="/experience" data-rv="fade" data-cursor>
      <i></i><span>View Experience & Education Timeline</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>
    <a class="cta" href="/contact" data-rv="fade" data-cursor style="background:rgba(224,35,28,0.15); border-color:var(--vermilion);">
      <i></i><span>Get in Touch</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>
  </div>
</section>`;
html = html.replace(eternityOld, eternityNew);

// 10. Footer Section
const footOld = /<footer class="foot" data-cam="5">[\s\S]*?<\/footer>/;
const footNew = `<footer class="foot" id="contact" data-cam="5">
  <div class="fg" data-fg="foot" aria-hidden="true">
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="kage-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="kage-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="kage-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="foot-grid">
    <div class="foot-brand">
      <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
        <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      </svg>
      <p>Rakesh G R — AI Engineer & Software Developer. Transforming complex machine learning algorithms and systems into resilient, high-speed software.</p>
    </div>
    <div><h4>Navigation</h4><ul>
      <li><a href="/" data-cursor>Home</a></li>
      <li><a href="/about" data-cursor>About Me</a></li>
      <li><a href="/projects" data-cursor>Projects</a></li>
      <li><a href="/skills" data-cursor>Skills</a></li>
      <li><a href="/experience" data-cursor>Experience</a></li>
      <li><a href="/contact" data-cursor>Contact</a></li>
    </ul></div>
    <div><h4>Flagship Projects</h4><ul>
      <li><a href="/projects/aiet-unisphere" data-cursor>AIET-UniSphere</a></li>
      <li><a href="/projects/yamlanchor" data-cursor>YamlAnchor</a></li>
      <li><a href="/projects/dense-matrix-multiplication" data-cursor>Dense Matrix Mult</a></li>
      <li><a href="/projects/priceflow-agent" data-cursor>PriceFlow-Agent</a></li>
      <li><a href="/projects/customer-churn" data-cursor>Customer Churn</a></li>
      <li><a href="/projects/garbage-classification" data-cursor>AI-EcoSort</a></li>
    </ul></div>
    <div><h4>Connect</h4><ul>
      <li><a href="https://github.com/Rakeshgr962" target="_blank" rel="noopener noreferrer" data-cursor>GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/rakeshgr18" target="_blank" rel="noopener noreferrer" data-cursor>LinkedIn</a></li>
      <li><a href="mailto:rakeshgr962@gmail.com" data-cursor>Email</a></li>
    </ul></div>
  </div>
  <div class="foot-base">
    <span>© 2026 Rakesh G R — All rights reserved</span>
    <span class="jp" style="font-family:'Onest',sans-serif; letter-spacing:0.12em;">AI ENGINEER · SYSTEMS CRAFTSMANSHIP</span>
    <span>Mangalore, Karnataka, India</span>
  </div>
</footer>`;
html = html.replace(footOld, footNew);

// 11. Rail names in script
html = html.replace(
  "const names = ['The Hidden Gate', 'The Sanmon', 'Still Gardens', 'Sacred Craft', 'Afterlight', 'Colophon'];",
  "const names = ['Introduction', 'About Me', 'Selected Projects', 'Technical Skills', 'Experience', 'Contact'];"
);

// 12. Three.js Wordmark string in script
html = html.replace(/const word = 'KAGE'/, "const word = 'RAKESH'");
html = html.replace(/'Kage — Kage no Michi'/, "'Rakesh G R — AI Engineering Portfolio'");

// 13. Write transformed output
fs.writeFileSync(destPath, html, 'utf8');
console.log('Successfully wrote client/index.html with updated nav and section anchors!');
