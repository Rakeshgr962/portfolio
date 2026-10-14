/**
 * RAKESH G R — PORTFOLIO CLIENT LOGIC
 * Editorial Experience: Interactive Case Studies, Architecture Visualizers,
 * Matrix Benchmark Interactive Chart, Terminal Simulator, and Contact Handler.
 */

// API Endpoint for Contact Form (Vercel Serverless / Node Backend)
const API_BASE_URL = 'https://rakeshgr.vercel.app';

// ==========================================================================
// CASE STUDY DATABASE (Derived directly from Verified Repository Evidence)
// ==========================================================================
const CASE_STUDIES = {
  'aiet-unisphere': {
    title: 'AIET-UniSphere — Campus Academic Platform',
    roleTag: 'Full-Stack Platform · Campus System',
    repoUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    liveUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase Auth', 'PostgreSQL RLS', 'Realtime'],
    overview: 'A role-aware campus web platform built for Alva\'s Institute of Engineering and Technology (AIET). Replaces fragmented academic portals with a unified, role-segregated environment where data isolation is enforced at the database layer via PostgreSQL Row Level Security (RLS).',
    problem: 'Academic institutions frequently operate on fragmented software where students, faculty, heads of departments (HOD), and administrators require strictly partitioned views of academic records, attendance, and internal evaluations. Standard application-level RBAC is vulnerable to logic bugs in API handlers.',
    architecture: 'Built using React 19 and TypeScript on Vite, paired with Supabase as the backend foundation. Rather than deploying and maintaining a custom Node/Express middleware server that proxies database queries, authorization rules reside directly in PostgreSQL RLS policies evaluated on every authenticated JWT session.',
    contributions: [
      'Architected the role-based directory structure (admin/, faculty/, hod/, student/) and shared services layer.',
      'Implemented Supabase Auth integration with role-specific claims embedded in session JWTs.',
      'Authored database migrations and Row Level Security (RLS) policies guaranteeing that students can never mutate grade records or view peers\' private evaluation metrics.',
      'Configured CI workflow and strict Oxlint linting pipelines.'
    ],
    results: [
      '100% Database-enforced authorization: Zero vulnerability to API proxy authorization bypass.',
      'Multi-role segregation: Distinct, custom dashboard views for 4 institutional roles.',
      'Zero custom server overhead: Reduced deployment maintenance and cold-start latency.'
    ],
    limitations: 'Advanced ML-based student risk forecasting and automated advising features remain on the architectural roadmap; current production focuses purely on rock-solid identity, permissions, and institutional operations.'
  },

  'yamlanchor': {
    title: 'YamlAnchor — Local CI/CD Pipeline Simulator',
    roleTag: 'Developer Tooling · Systems & DevOps',
    repoUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    liveUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    stack: ['Go', 'Next.js App Router', 'TypeScript', 'Docker SDK', 'Tailwind CSS', 'AST Engine'],
    overview: 'A developer tool that eliminates the painful "commit-push-fail-tweak-push-fail" cycle of debugging GitHub Actions remotely. Scans repositories via Abstract Syntax Tree (AST) analysis, synthesizes valid CI workflows, and dry-runs them in local Docker containers with live streaming logs.',
    problem: 'Developers routinely push 10+ throwaway git commits just to debug syntax errors, environment misconfigurations, and broken shell commands in GitHub Actions workflow YAML files.',
    architecture: 'Hybrid architecture combining a high-performance Go backend with a modern Next.js Studio UI. The Go backend parses codebase dependencies (Go, TypeScript, Python) using language AST parsers, synthesizes workflow steps, orchestrates isolated Docker container runs via the Docker Engine API, and streams NDJSON log events to the UI.',
    contributions: [
      'Built multi-language AST codebase scanner in Go (backend/pkg/simulator) to automatically discover project test commands and dependency manifests.',
      'Engineered Docker container execution engine that simulates GitHub Actions runner environments locally.',
      'Implemented local secret scanner and mock injector (backend/pkg/secrets) preventing leaked production keys during testing.',
      'Constructed Next.js App Router Studio interface with real-time log streaming and intelligent error remediation suggestions.'
    ],
    results: [
      'Zero remote test commits: Developers validate complex multi-stage pipelines entirely on localhost.',
      'Sub-second AST analysis and pipeline synthesis across multi-language monorepos.',
      'Proactive secret interception before code ever touches a remote Git origin.'
    ],
    limitations: 'Self-healing engine currently provides structured error analysis and remediation suggestions; fully autonomous YAML patch application is currently under validation.'
  },

  'dense-matrix': {
    title: 'Dense Matrix Multiplication — Hardware Cache Blocking & OpenMP',
    roleTag: 'Systems Engineering · High-Performance Computing',
    repoUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    liveUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    stack: ['C11', 'OpenMP', 'Python 3', 'GCC Optimization', 'Matplotlib', 'Linux Perf'],
    overview: 'An empirical high-performance computing study investigating hardware cache hierarchy utilization, loop reordering, cache tiling (blocking), and OpenMP parallelization on dense matrix multiplication kernels.',
    problem: 'Naive matrix multiplication (ijk order) exhibits disastrous cache eviction behavior due to column-wise stride access in the second matrix, causing continuous L1/L2 cache misses that bottleneck CPU execution on modern architectures.',
    architecture: 'Implemented 6 distinct C11 compute kernels compiled with GCC -O3 -fopenmp -march=native and 64-byte aligned memory allocation (posix_memalign). Python tooling detects CPU cache topology (L1d, L2, L3 cache sizes) and orchestrates repeated benchmark trials with warmups, median filtering, and numerical error bounds checking.',
    contributions: [
      'Wrote optimized C11 kernels implementing naive ijk, loop-reordered ikj, cache-blocked (tiled), and OpenMP collapse(2) parallelization.',
      'Engineered automated Python benchmarking orchestrator to measure GFLOPS and CPU execution time across matrix dimensions from 256 to 2048.',
      'Built comprehensive 81-test validation suite verifying mathematical correctness against double precision error thresholds (ε < 1e-9).',
      'Authored in-depth hardware architectural analysis report correlating cache sizes with empirical GFLOPS curves.'
    ],
    results: [
      '~12x speedup achieved purely through loop reordering (ikj over ijk) due to continuous sequential memory access.',
      'Identified optimal cache tile sizes of 64 and 128 elements, matching CPU L1d cache boundaries.',
      'OpenMP collapse(2) eliminated thread starvation on large matrix dimensions, achieving near-linear multi-core speedup.'
    ],
    limitations: 'Benchmarked on x86_64 CPU architectures with OpenMP; AVX-512 vector intrinsic specialization is planned for future iterations.'
  },

  'customer-churn': {
    title: 'Production Customer Churn API & Pipeline',
    roleTag: 'Applied Machine Learning · Production Backend',
    repoUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    liveUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    stack: ['Python', 'XGBoost', 'FastAPI', 'MLflow', 'Docker', 'Render'],
    overview: 'An end-to-end applied machine learning system predicting customer attrition on the Telco dataset (7,043 records). Prioritizes strict data leakage elimination, feature preprocessing, containerized serving, and experiment tracking.',
    problem: 'Most machine learning portfolio projects rely on Kaggle notebooks that accidentally include target leakage columns (e.g. Churn Reason, Churn Category, Churn Score) leading to unrealistic 99% accuracy that crashes in real-world deployment.',
    architecture: 'Trained an XGBoost gradient boosting classifier using an 80/20 stratified split after explicitly stripping all post-event leakage columns. Served via a containerized FastAPI application with strict Pydantic schema validation, tracked using MLflow, and deployed as a reproducible Docker service on Render.',
    contributions: [
      'Performed rigorous data cleansing and leakage isolation on 7,043 customer accounts.',
      'Engineered end-to-end model pipeline with categorical label encoding and hyperparameter tuning.',
      'Constructed production FastAPI REST service with GET /health and POST /predict endpoints.',
      'Created Dockerfile and container configuration for deterministic cloud deployment.'
    ],
    results: [
      'Verified performance metrics: 81% accuracy, 77% precision, 68% recall, and 72% F1 score.',
      'Transparent disclosure: Calling out the 68% recall rate as an intentional engineering trade-off that requires custom threshold tuning in business settings.',
      'Fully containerized, production-ready inference API with zero external notebook dependencies.'
    ],
    limitations: 'Free-tier Render deployment enters cold sleep after idle periods; SHAP explainability visualizations and automated drift monitoring are planned next steps.'
  },

  'garbage-classification': {
    title: 'EfficientNetB0 Waste Classification & AI-EcoSort',
    roleTag: 'Computer Vision · Responsible AI',
    repoUrl: 'https://github.com/Rakeshgr962/GarbageClassfication',
    liveUrl: 'https://github.com/Rakeshgr962/AI-EcoSort',
    stack: ['TensorFlow', 'EfficientNetB0', 'Gradio', 'React 19', 'TypeScript', 'Vitest'],
    overview: 'A dual-tier sustainability project combining a transfer learning computer vision model for automated physical waste segregation with AI-EcoSort, an accessible web assistant developed for the 1M1B IBM SkillsBuild AI for Sustainability program.',
    problem: 'Municipal waste contamination costs millions annually. Physical recycling centers need rapid image sorting across waste types, while households need clear, honest guidance on proper disposal categories without misleading AI claims.',
    architecture: 'Computer Vision: EfficientNetB0 backbone pre-trained on ImageNet, fine-tuned with 124x124 input resolution, Global Average Pooling, Dropout (0.2), and early stopping across 6 waste categories (cardboard, glass, metal, paper, plastic, trash). Web Assistant: React 19 + TypeScript with a deterministic rule-based knowledge engine, confidence indicators, and Vitest test coverage.',
    contributions: [
      'Trained and evaluated EfficientNetB0 transfer learning model achieving 89.24% test accuracy on public benchmark data.',
      'Built and deployed interactive Gradio web demonstration for real-time image inference.',
      'Engineered AI-EcoSort interface with strict Responsible AI guardrails (explicitly marking text classification vs image upload preview).',
      'Implemented automated test suite in Vitest verifying rule classifications and uncertainty thresholds.'
    ],
    results: [
      '89.24% reproducible test accuracy on public benchmark dataset.',
      'Zero false-claims design: Clear user disclosure on rule-based text logic vs experimental LLM integration.',
      'Dual-stack portfolio proof: Demonstrates deep learning transfer learning alongside clean TypeScript client engineering.'
    ],
    limitations: 'AI-EcoSort image upload currently functions as a preview component; direct client-side on-device TF.js inference is the target architectural milestone.'
  }
};

// ==========================================================================
// APPLICATION INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initThemeToggle();
  initMobileNavigation();
  initActiveNavLinkHighlight();
  initCaseStudyModal();
  initMatrixBenchmarkChart();
  initTerminalSimulator();
  initArchitectureVisualizer();
  initContactForm();
  initResumeDownload();
});

// --- 1. Global Scroll Progress Bar ---
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// --- 2. Theme Toggle (Light Stone / Dark Ink) ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('rakesh_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', active);
    localStorage.setItem('rakesh_portfolio_theme', active);
    updateThemeIcon(toggleBtn, active);
  });
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'dark' 
    ? '<i class="fas fa-sun" aria-hidden="true"></i>' 
    : '<i class="fas fa-moon" aria-hidden="true"></i>';
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// --- 3. Mobile Navigation Drawer ---
function initMobileNavigation() {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!hamburger || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- 4. Active Navigation Link Highlighting ---
function initActiveNavLinkHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// --- 5. Interactive Case Study Modal System ---
function initCaseStudyModal() {
  const overlay = document.getElementById('case-study-overlay');
  const container = document.getElementById('case-study-body');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('[data-case-study]');

  if (!overlay || !container) return;

  const openModal = (studyKey) => {
    const study = CASE_STUDIES[studyKey];
    if (!study) return;

    container.innerHTML = `
      <div class="case-study-content">
        <div class="case-study-meta-strip">
          <span class="project-tier-tag tier-flagship">${study.roleTag}</span>
        </div>
        <h2>${study.title}</h2>
        <div class="project-stack-pills" style="margin-bottom: 1.5rem;">
          ${study.stack.map(s => `<span class="stack-pill">${s}</span>`).join('')}
        </div>

        <div class="case-study-section">
          <h3>01 / Overview & Problem</h3>
          <p>${study.overview}</p>
          <p style="margin-top: 8px;"><strong>The Challenge:</strong> ${study.problem}</p>
        </div>

        <div class="case-study-section">
          <h3>02 / Architecture & Engineering Decisions</h3>
          <p>${study.architecture}</p>
        </div>

        <div class="case-study-section">
          <h3>03 / My Direct Contributions</h3>
          <ul>
            ${study.contributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-section">
          <h3>04 / Verified Results & Evidence</h3>
          <ul>
            ${study.results.map(r => `<li><strong>${r}</strong></li>`).join('')}
          </ul>
        </div>

        <div class="case-study-section">
          <h3>05 / Honest Limitations & Roadmap</h3>
          <p>${study.limitations}</p>
        </div>

        <div class="case-study-actions">
          <a href="${study.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <i class="fab fa-github"></i> Inspect Repository
          </a>
          <button type="button" class="btn-secondary" id="modal-inner-close">Close Case Study</button>
        </div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) innerClose.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute('data-case-study');
      openModal(studyKey);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- 6. Matrix Benchmark Interactive Chart Visualizer ---
function initMatrixBenchmarkChart() {
  const container = document.getElementById('matrix-chart-mount');
  if (!container) return;

  // Empirical data points from Dense-Matrix-Multiplication benchmark suite
  const data = [
    { dim: '512×512', naive: 0.82, ikj: 10.4, openmp: 38.6 },
    { dim: '1024×1024', naive: 0.74, ikj: 9.8, openmp: 44.2 },
    { dim: '2048×2048', naive: 0.61, ikj: 9.1, openmp: 46.8 }
  ];

  let activeView = 'all'; // 'all', 'loop_order', 'multithread'

  const renderChart = () => {
    container.innerHTML = `
      <div class="matrix-chart-card">
        <div class="chart-header">
          <span class="chart-title"><i class="fas fa-microchip"></i> Measured Compute Throughput (GFLOPS)</span>
          <div class="chart-legend">
            <div class="legend-item"><span class="legend-color bar-naive"></span> Naive ijk (0.7 GF)</div>
            <div class="legend-item"><span class="legend-color bar-ikj"></span> ikj Reordered (10.4 GF)</div>
            <div class="legend-item"><span class="legend-color bar-openmp"></span> OpenMP + Tiling (46.8 GF)</div>
          </div>
        </div>

        <svg class="benchmark-svg-container" viewBox="0 0 460 140" preserveAspectRatio="none">
          <!-- Grid Lines -->
          <line x1="40" y1="20" x2="450" y2="20" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          <line x1="40" y1="60" x2="450" y2="60" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          <line x1="40" y1="100" x2="450" y2="100" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          
          <!-- Y Axis Labels -->
          <text x="32" y="24" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">50G</text>
          <text x="32" y="64" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">25G</text>
          <text x="32" y="104" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">0G</text>

          <!-- Group 1: 512x512 -->
          <rect x="75" y="98" width="16" height="4" fill="#94A3B8" rx="2" />
          <rect x="95" y="78" width="16" height="24" fill="var(--accent-cobalt)" rx="2" />
          <rect x="115" y="24" width="16" height="78" fill="var(--accent-emerald)" rx="2" />
          <text x="103" y="122" font-size="10" fill="var(--text-body)" text-anchor="middle" font-family="var(--font-mono)">N=512</text>

          <!-- Group 2: 1024x1024 -->
          <rect x="195" y="98.5" width="16" height="3.5" fill="#94A3B8" rx="2" />
          <rect x="215" y="80" width="16" height="22" fill="var(--accent-cobalt)" rx="2" />
          <rect x="235" y="16" width="16" height="86" fill="var(--accent-emerald)" rx="2" />
          <text x="223" y="122" font-size="10" fill="var(--text-body)" text-anchor="middle" font-family="var(--font-mono)">N=1024</text>

          <!-- Group 3: 2048x2048 -->
          <rect x="315" y="99" width="16" height="3" fill="#94A3B8" rx="2" />
          <rect x="335" y="82" width="16" height="20" fill="var(--accent-cobalt)" rx="2" />
          <rect x="355" y="10" width="16" height="92" fill="var(--accent-emerald)" rx="2" />
          <text x="343" y="122" font-size="10" fill="var(--text-body)" text-anchor="middle" font-family="var(--font-mono)">N=2048</text>
        </svg>

        <div class="benchmark-insight">
          <strong>Key Hardware Finding:</strong> ikj loop ordering eliminates cache line misses, yielding a <strong>~12.6x speedup</strong> without a single multi-threading thread. OpenMP collapse(2) with tile size 64 reaches <strong>46.8 GFLOPS</strong>.
        </div>
      </div>
    `;
  };

  renderChart();
}

// --- 7. YamlAnchor Interactive Terminal Simulator ---
function initTerminalSimulator() {
  const terminalMount = document.getElementById('terminal-simulator-mount');
  if (!terminalMount) return;

  const steps = [
    { text: '$ yamlanchor scan --repo . --ast', type: 'cmd', delay: 400 },
    { text: '✓ Discovered Go 1.22 + Next.js 14 codebase', type: 'success', delay: 800 },
    { text: '✓ Parsed package.json & go.mod AST targets', type: 'muted', delay: 1200 },
    { text: '$ yamlanchor simulate --workflow ci.yml --docker', type: 'cmd', delay: 1700 },
    { text: '⚡ Spawning runner container: alpine/golang:1.22', type: 'muted', delay: 2200 },
    { text: '[Step 1/3] go test ./pkg/simulator -v ... PASS (0.42s)', type: 'success', delay: 2700 },
    { text: '[Step 2/3] Secrets scan: No raw keys detected', type: 'success', delay: 3200 },
    { text: '✓ Local Docker Simulation Succeeded (0 remote failures)', type: 'success', delay: 3700 }
  ];

  let currentStep = 0;
  terminalMount.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-titlebar">
        <div class="terminal-dots">
          <span class="dot-red"></span>
          <span class="dot-yellow"></span>
          <span class="dot-green"></span>
        </div>
        <span class="terminal-label">yamlanchor-studio · ndjson stream</span>
        <button id="term-replay-btn" style="color: #94A3B8; font-size: 11px; cursor: pointer;">
          <i class="fas fa-redo"></i> Re-run
        </button>
      </div>
      <div class="terminal-body" id="term-output"></div>
    </div>
  `;

  const output = document.getElementById('term-output');
  const replayBtn = document.getElementById('term-replay-btn');

  const runSimulation = () => {
    output.innerHTML = '';
    currentStep = 0;

    steps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `term-line ${
          step.type === 'cmd' ? 'term-cmd' : 
          step.type === 'success' ? 'term-success' : 
          step.type === 'warn' ? 'term-warn' : 'term-muted'
        }`;
        line.textContent = step.text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
      }, step.delay);
    });
  };

  runSimulation();
  if (replayBtn) replayBtn.addEventListener('click', runSimulation);
}

// --- 8. AIET-UniSphere Architecture & Role Visualizer ---
function initArchitectureVisualizer() {
  const mount = document.getElementById('architecture-visualizer-mount');
  if (!mount) return;

  const roles = [
    { name: 'Student', perm: 'Read enrolled courses, personal attendance & marks only. Zero write permissions on evaluation tables.' },
    { name: 'Faculty', perm: 'Read/Write own course sections. Enter internal assessments. Strictly isolated from other department data.' },
    { name: 'HOD', perm: 'Aggregate analytics across department batches. Approve faculty grade submissions & faculty rosters.' },
    { name: 'Administrator', perm: 'Institutional user lifecycle management, audit logs, and global department provisioning.' }
  ];

  mount.innerHTML = `
    <div class="architecture-card">
      <div class="arch-header">
        <span><i class="fas fa-shield-alt"></i> PostgreSQL Row Level Security (RLS) Enforcement</span>
      </div>
      <div class="roles-grid">
        ${roles.map(r => `
          <div class="role-box">
            <div class="role-title">${r.name}</div>
            <div class="role-perm">${r.perm}</div>
          </div>
        `).join('')}
      </div>
      <div class="security-enforcement">
        <strong>Auth Mechanism:</strong> Supabase JWT Claims + <code>auth.uid()</code> RLS Policies. Zero custom server attack surface.
      </div>
    </div>
  `;
}

// --- 9. Contact Form Handler (Backend + Mailto Fallback) ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('contact-status-msg');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form || !statusMsg) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !subject || !message) {
      statusMsg.className = 'form-status-msg error';
      statusMsg.textContent = 'Please fill out all required fields.';
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (response.ok) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.innerHTML = '<strong>Message received.</strong> Thank you! I will respond to your inquiry shortly.';
        form.reset();
      } else {
        throw new Error('Server returned error response');
      }
    } catch (err) {
      console.warn('Backend unavailable, providing mailto fallback:', err);
      // Seamless mailto fallback
      const mailtoLink = `mailto:rakeshgr962@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      statusMsg.className = 'form-status-msg success';
      statusMsg.innerHTML = `Note: Backend serverless instance is idle. <a href="${mailtoLink}" style="text-decoration: underline; font-weight: bold; color: inherit;">Click here to send directly via email client</a>.`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fas fa-arrow-right"></i>';
      }
    }
  });
}

// --- 10. Resume Download Handler ---
function initResumeDownload() {
  const resumeBtns = document.querySelectorAll('.action-download-resume');
  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = 'assets/resume/Rakesh_GR_Resume.pdf';
      link.download = 'Rakesh_GR_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}
