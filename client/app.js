/**
 * RAKESH G R — AI ENGINEERING PORTFOLIO CLIENT LOGIC
 * World-Class Creative & Interactive Motion System:
 * - Multi-Depth Three.js Atmospheric Particle System (Fine Moving Grains & Luminous Filament Nodes)
 * - Interactive Three.js 3D Tech Constellation (Orbit Controls & Raycasted Deep Dives)
 * - Hero Entrance Sequence with Cinematic Typography & Soft Easing
 * - 8 Complete Technical Case Studies with All 10 Required Engineering Dimensions
 * - 8 Interactive Technical Visualizations (RLS Inspector, Terminal Simulator, GFLOPS Benchmarks, Churn Boundary Tester, Waste Category Explorer, EcoSort Assistant, GlitrAI State Machine, PriceFlow Moving-Average Simulator)
 * - Interactive Skills Capability Map with Evidence Popovers & Shipped vs Learning Filters
 * - Real-Time Search & Category Filter Engine for Projects Directory
 * - Robust Contact Form with Schema Validation, Serverless Transmission & Resilient Mailto Fallback
 * - Theme Switcher (Light Stone / Dark Obsidian) with Three.js Color Interpolation
 * - Mobile Navigation Drawer with Touch & Keyboard Accessibility
 * - Global Scroll Progress Indicator & Floating Back to Top
 */

// ==========================================================================
// COMPREHENSIVE CASE STUDY DATABASE (100% Grounded in GitHub Repositories)
// ==========================================================================
const CASE_STUDIES = {
  'aiet-unisphere': {
    id: 'aiet-unisphere',
    title: 'AIET-UniSphere — Campus Academic Platform',
    roleTag: 'Lead Full-Stack & Security Architecture',
    repoUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    liveUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase Auth', 'PostgreSQL RLS', 'Oxlint CI'],
    vizType: 'rls',
    overview: 'A role-aware campus academic platform engineered for Alva\'s Institute of Engineering and Technology (AIET). Replaces fragmented institutional portals with a unified, role-segregated environment where data isolation is enforced at the database layer via PostgreSQL Row Level Security (RLS) policies evaluated on authenticated JWT sessions.',
    problem: 'Academic institutions frequently operate on fragmented software where students, faculty, heads of departments (HOD), and administrators require strictly partitioned views of academic records, attendance, and internal evaluations. Standard application-level RBAC is vulnerable to logic bugs in API middleware proxies, risking unauthorized data exposure.',
    contributions: [
      'Architected the role-based directory structure (src/admin/, src/faculty/, src/hod/, src/student/) and shared services layer.',
      'Implemented Supabase Auth integration with role-specific claims embedded directly into session JWTs.',
      'Authored database migrations and PostgreSQL Row Level Security (RLS) policies guaranteeing that students can never mutate grade records or view peers\' private evaluation metrics.',
      'Configured automated CI workflows and strict Oxlint linting pipelines for code quality enforcement.'
    ],
    architecture: 'Built using React 19 and TypeScript with Vite on the client, paired with Supabase as the backend data layer. Rather than deploying and maintaining a fragile custom Node/Express middleware server that proxies database queries, authorization rules reside directly in PostgreSQL RLS policies evaluated on every authenticated JWT session.',
    engineeringDecisions: [
      {
        title: 'Database-Enforced Authorization over API Middleware',
        rationale: 'Application-level authorization checks are susceptible to developer oversights in route handlers. Embedding security rules directly in PostgreSQL RLS policies guarantees that even if a frontend query is modified, the database rejects unauthorized reads and mutations.'
      },
      {
        title: 'Role-Segregated Client Workspace Directory Structure',
        rationale: 'Separated institutional workspaces into dedicated directories (`src/student`, `src/faculty`, `src/hod`, `src/admin`). This isolates component dependencies and prevents accidental permission leaks across institutional roles.'
      },
      {
        title: 'Automated Migration Versioning & Oxlint CI',
        rationale: 'Schema mutations are codified into versioned SQL files, ensuring reproducible environments across team contributors and zero configuration drift.'
      }
    ],
    features: [
      'Four distinct institutional dashboards: Student, Faculty, HOD, and Admin.',
      'Database-enforced Row Level Security (RLS) evaluated on JWT claims.',
      'Attendance tracking and Continuous Internal Evaluation (CIE) record management.',
      'Department-wide analytics and approval queues for department heads.',
      'Responsive, carbon-conscious interface with strict accessibility standards.'
    ],
    results: [
      '100% Database-enforced authorization: Zero vulnerability to API proxy authorization bypass.',
      'Multi-role segregation: Distinct, custom dashboard views for 4 institutional roles.',
      'Zero custom server overhead: Reduced operational costs, deployment maintenance, and cold-start latency.'
    ],
    limitations: 'Advanced ML-based student risk forecasting and automated advising features remain on the architectural roadmap; current deployment focuses purely on rock-solid identity, permissions, and institutional operations.'
  },

  'yamlanchor': {
    id: 'yamlanchor',
    title: 'YamlAnchor — Local CI/CD Pipeline Simulator',
    roleTag: 'Developer Tooling · Go Backend & Container Orchestration',
    repoUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    liveUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    stack: ['Go 1.22', 'Next.js App Router', 'TypeScript', 'Docker SDK', 'AST Engine', 'NDJSON Stream'],
    vizType: 'terminal',
    overview: 'A high-performance developer tool that eliminates the painful "commit-push-fail-tweak-push-fail" cycle of debugging GitHub Actions remotely. Scans repositories via Abstract Syntax Tree (AST) analysis, synthesizes valid CI workflows, and dry-runs them in local Docker containers with live streaming logs.',
    problem: 'Developers routinely push 10+ throwaway git commits just to debug syntax errors, environment misconfigurations, and broken shell commands in GitHub Actions workflow YAML files, wasting cloud build minutes and polluting repository histories.',
    contributions: [
      'Built multi-language AST codebase scanner in Go (backend/pkg/simulator) to automatically discover project test commands and dependency manifests.',
      'Engineered Docker container execution engine that simulates GitHub Actions runner environments locally via the Docker Engine SDK.',
      'Implemented local secret scanner and mock injector (backend/pkg/secrets) preventing leaked production keys during testing.',
      'Constructed Next.js App Router Studio interface with real-time NDJSON log streaming and intelligent error remediation suggestions.'
    ],
    architecture: 'Hybrid architecture combining a high-performance Go backend with a modern Next.js Studio UI. The Go backend parses codebase dependencies (Go, TypeScript, Python) using language AST parsers, synthesizes workflow steps, orchestrates isolated Docker container runs via the Docker Engine API, and streams NDJSON log events to the UI.',
    engineeringDecisions: [
      {
        title: 'Native Go AST Parser over Brittle Regex Matching',
        rationale: 'Regex scanning frequently fails on multiline scripts and nested dependencies. Native AST parsing parses Go mod files, package.json scripts, and Python requirements deterministically.'
      },
      {
        title: 'Direct Docker Engine SDK Integration',
        rationale: 'Interfacing directly with the Docker socket via the official Go SDK allows precise control over container lifecycle, volume mounts, resource quotas, and streaming stdout/stderr buffers.'
      },
      {
        title: 'Client-Side NDJSON Event Streaming',
        rationale: 'Streaming JSON logs line-by-line enables real-time terminal rendering in Next.js without websocket connection overhead.'
      }
    ],
    features: [
      'AST-driven repository dependency analysis across Go, TypeScript, and Python.',
      'Automated GitHub Actions workflow YAML synthesis based on detected project test suites.',
      'Local Docker runner simulation reproducing standard GitHub Actions Ubuntu environments.',
      'Proactive secret interception and environment variable mocking.',
      'Intelligent self-healing engine suggesting indentation and syntax patches.'
    ],
    results: [
      'Zero remote test commits: Developers validate complex multi-stage pipelines entirely on localhost.',
      'Sub-second AST analysis and pipeline synthesis across multi-language monorepos.',
      'Proactive secret interception before code ever touches a remote Git origin.'
    ],
    limitations: 'Self-healing engine currently provides structured error analysis and remediation suggestions; fully autonomous YAML patch application is currently under validation.'
  },

  'dense-matrix': {
    id: 'dense-matrix-multiplication',
    title: 'Dense Matrix Multiplication — Hardware Cache Blocking & OpenMP',
    roleTag: 'Systems Engineering · High-Performance Computing',
    repoUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    liveUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    stack: ['C11', 'OpenMP collapse(2)', 'Python 3', 'GCC Optimization', 'Hardware Cache Locality', 'posix_memalign'],
    vizType: 'benchmark',
    overview: 'An empirical high-performance computing study investigating hardware cache hierarchy utilization, loop reordering, cache tiling (blocking), and OpenMP parallelization on dense matrix multiplication compute kernels.',
    problem: 'Naive matrix multiplication (ijk order) exhibits disastrous cache eviction behavior due to column-wise stride access in the second matrix, causing continuous L1/L2 cache misses that bottleneck CPU execution on modern architectures.',
    contributions: [
      'Wrote optimized C11 kernels implementing naive ijk, loop-reordered ikj, cache-blocked (tiled), and OpenMP collapse(2) parallelization.',
      'Engineered automated Python benchmarking orchestrator to measure GFLOPS and CPU execution time across matrix dimensions from 256 to 2048.',
      'Built comprehensive 81-test validation suite verifying mathematical correctness against double precision error thresholds (ε < 1e-9).',
      'Authored in-depth hardware architectural analysis report correlating cache sizes with empirical GFLOPS curves.'
    ],
    architecture: 'Implemented 6 distinct C11 compute kernels compiled with GCC -O3 -fopenmp -march=native and 64-byte aligned memory allocation (posix_memalign). Python tooling detects CPU cache topology (L1d, L2, L3 cache sizes) and orchestrates repeated benchmark trials with warmups, median filtering, and numerical error bounds checking.',
    engineeringDecisions: [
      {
        title: 'Loop Permutation (ikj over ijk) for Spatial Locality',
        rationale: 'Converting column-strided memory reads into continuous row-wise reads allows the hardware prefetcher to load contiguous cache lines, yielding an immediate ~12.6x speedup before any multithreading.'
      },
      {
        title: '64-Byte Memory Alignment via posix_memalign',
        rationale: 'Aligning matrix data buffers with CPU 64-byte cache lines prevents split-line access penalties and sets up optimal conditions for SIMD vector registers.'
      },
      {
        title: 'Cache Tile Size Sizing (64 & 128 elements)',
        rationale: 'Blocking submatrices to dimensions that fit within the 32KB/48KB L1 data cache ensures zero cache line evictions during inner dot products.'
      }
    ],
    features: [
      'Six C11 compute kernels spanning naive, loop-reordered, tiled, and parallel OpenMP algorithms.',
      'Automated Python benchmark harness recording execution times, GFLOPS, and variance.',
      'Numerical verification suite with 81 test matrices ensuring mathematical precision (ε < 10⁻⁹).',
      'Multi-core scalability analysis with OpenMP collapse(2) eliminating outer loop thread starvation.'
    ],
    results: [
      '~12.6x speedup achieved purely through loop reordering (ikj over ijk) due to continuous sequential memory access.',
      'Identified optimal cache tile sizes of 64 and 128 elements, matching CPU L1d cache boundaries.',
      'OpenMP collapse(2) achieved 46.8 GFLOPS peak throughput on large matrix dimensions (N=2048).'
    ],
    limitations: 'Benchmarked on x86_64 CPU architectures with OpenMP; AVX-512 vector intrinsic specialization is planned for future iterations.'
  },

  'customer-churn': {
    id: 'customer-churn',
    title: 'Production Customer Churn API & ML Pipeline',
    roleTag: 'Applied Machine Learning · Production Backend',
    repoUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    liveUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    stack: ['Python', 'XGBoost', 'FastAPI', 'MLflow', 'Docker', 'Render'],
    vizType: 'churn',
    overview: 'An end-to-end applied machine learning system predicting customer attrition on the Telco dataset (7,043 records). Prioritizes strict data leakage elimination, feature preprocessing, containerized serving, and experiment tracking.',
    problem: 'Most machine learning portfolio projects rely on Kaggle notebooks that accidentally include target leakage columns (e.g. Churn Reason, Churn Category, Churn Score) leading to unrealistic 99% accuracy that crashes in real-world deployment.',
    contributions: [
      'Performed rigorous data cleansing and leakage isolation on 7,043 customer accounts.',
      'Engineered end-to-end model pipeline with categorical label encoding and hyperparameter tuning.',
      'Constructed production FastAPI REST service with GET /health and POST /predict endpoints.',
      'Created Dockerfile and container configuration for deterministic cloud deployment.'
    ],
    architecture: 'Trained an XGBoost gradient boosting classifier using an 80/20 stratified split after explicitly stripping all post-event leakage columns. Served via a containerized FastAPI application with strict Pydantic schema validation, tracked using MLflow, and deployed as a reproducible Docker service on Render.',
    engineeringDecisions: [
      {
        title: 'Explicit Purging of Post-Event Columns (Target Leakage)',
        rationale: 'Features recorded only after customer churn occurs (such as Churn Reason) falsely inflate model scores. Dropping them produced a defensible, production-accurate 81% accuracy model.'
      },
      {
        title: 'FastAPI Microservice with Typed Pydantic Schemas',
        rationale: 'Validating payload types, ranges, and missing fields at the API gateway layer prevents malformed feature vectors from reaching the trained XGBoost booster.'
      },
      {
        title: 'MLflow Experiment Run Logging',
        rationale: 'Logging evaluation metrics, hyperparameter iterations, and serialized model binaries ensures full lineage and reproducible deployments.'
      }
    ],
    features: [
      'Trained XGBoost classification pipeline with stratified cross-validation.',
      'FastAPI inference REST microservice with OpenAPI specification.',
      'Containerized Dockerfile for zero-dependency cloud deployment.',
      'Comprehensive validation metric reporting (Accuracy, Precision, Recall, F1).',
      'Interactive decision boundary simulation for tenure and monthly charge combinations.'
    ],
    results: [
      'Verified performance metrics: 81% accuracy, 77% precision, 68% recall, and 72% F1 score.',
      'Transparent disclosure: Calling out the 68% recall rate as an intentional engineering trade-off that requires custom threshold tuning in business settings.',
      'Fully containerized, production-ready inference API with zero external notebook dependencies.'
    ],
    limitations: 'Free-tier Render deployment enters cold sleep after idle periods; SHAP explainability visualizations and automated drift monitoring are planned next steps.'
  },

  'garbage-classification': {
    id: 'garbage-classification',
    title: 'EfficientNetB0 Waste Classification & AI-EcoSort',
    roleTag: 'Computer Vision · Responsible AI',
    repoUrl: 'https://github.com/Rakeshgr962/GarbageClassfication',
    liveUrl: 'https://github.com/Rakeshgr962/AI-EcoSort',
    stack: ['TensorFlow', 'EfficientNetB0', 'Gradio', 'React 19', 'TypeScript', 'Vitest'],
    vizType: 'waste',
    overview: 'A dual-tier sustainability project combining a transfer learning computer vision model for automated physical waste segregation with AI-EcoSort, an accessible web assistant developed for the 1M1B IBM SkillsBuild AI for Sustainability program.',
    problem: 'Municipal waste contamination costs millions annually. Physical recycling centers need rapid image sorting across waste types, while households need clear, honest guidance on proper disposal categories without misleading AI claims.',
    contributions: [
      'Trained and evaluated EfficientNetB0 transfer learning model achieving 89.24% test accuracy on public benchmark data.',
      'Built and deployed interactive Gradio web demonstration for real-time image inference.',
      'Engineered AI-EcoSort interface with strict Responsible AI guardrails (explicitly marking text classification vs image upload preview).',
      'Implemented automated test suite in Vitest verifying rule classifications and uncertainty thresholds.'
    ],
    architecture: 'Computer Vision: EfficientNetB0 backbone pre-trained on ImageNet, fine-tuned with 124x124 input resolution, Global Average Pooling, Dropout (0.2), and early stopping across 6 waste categories (cardboard, glass, metal, paper, plastic, trash). Web Assistant: React 19 + TypeScript with a deterministic rule-based knowledge engine, confidence indicators, and Vitest test coverage.',
    engineeringDecisions: [
      {
        title: 'EfficientNetB0 Pre-trained Backbone over Scratch Training',
        rationale: 'Compound scaling in EfficientNet achieves state-of-the-art feature representation while maintaining low parameter counts, making it ideal for rapid inference on constrained hardware.'
      },
      {
        title: 'Global Average Pooling & Dropout (0.2) Regularization',
        rationale: 'Replaced dense classification blocks with global average pooling to prevent overfitting on specific lighting and background variations.'
      },
      {
        title: 'Honest Responsible AI Architectural Separation',
        rationale: 'Strictly separated client-side image preview components from text classification rules in AI-EcoSort to eliminate false claims of on-device vision.'
      }
    ],
    features: [
      'Six-class deep learning classification: cardboard, glass, metal, paper, plastic, trash.',
      'Transfer learning pipeline with data augmentation and early stopping.',
      'Live interactive Gradio web demonstration for image inference.',
      'Deterministic rule engine in AI-EcoSort with disposal instructions.',
      'Vitest automated testing suite for classification certainty.'
    ],
    results: [
      '89.24% reproducible test accuracy on public benchmark dataset.',
      'Zero false-claims design: Clear user disclosure on rule-based text logic vs experimental LLM integration.',
      'Dual-stack portfolio proof: Demonstrates deep learning transfer learning alongside clean TypeScript client engineering.'
    ],
    limitations: 'AI-EcoSort image upload currently functions as a preview component; direct client-side on-device TF.js inference is the target architectural milestone.'
  },

  'ai-ecosort': {
    id: 'ai-ecosort',
    title: 'AI-EcoSort — Responsible Waste Classification Assistant',
    roleTag: 'Responsible AI · Full-Stack Web App',
    repoUrl: 'https://github.com/Rakeshgr962/AI-EcoSort',
    liveUrl: 'https://ai-ecosort.netlify.app',
    stack: ['React 19', 'TypeScript', 'Vite', 'Vitest', 'Responsible AI Guardrails'],
    vizType: 'ecosort',
    overview: 'A sustainable waste classification web assistant created for the 1M1B IBM SkillsBuild AI for Sustainability program. Combines deterministic rule-based classification, confidence scoring, and responsible user disclosures.',
    problem: 'Many AI applications exaggerate capabilities or fabricate high confidence scores on ambiguous inputs. Furthermore, users need clear, actionable guidance on whether an item is recyclable, compostable, or hazardous without depending on heavy cloud GPUs.',
    contributions: [
      'Built high-performance, accessible UI with carbon-conscious dark styling and responsive layouts.',
      'Engineered deterministic classification engine with explicit uncertainty handling for ambiguous inputs.',
      'Separated text classification logic from client-side image preview components (zero false computer vision claims).',
      'Wrote comprehensive unit test suite in Vitest verifying rule classifications and confidence thresholds.'
    ],
    architecture: 'Built using React 19 + TypeScript with Vite. Implements a multi-stage deterministic classification pipeline that validates keywords against waste category databases, provides disposal instructions, and outputs transparent confidence scores with fallback uncertainty warnings.',
    engineeringDecisions: [
      {
        title: 'Deterministic Rule Engine over Hallucinating Prompt Wrapper',
        rationale: 'Municipal recycling standards require strict predictability. A deterministic rule base guarantees accurate disposal instructions without random generative variance.'
      },
      {
        title: 'Transparent Uncertainty Disclosures',
        rationale: 'If an item contains ambiguous or multi-material components (e.g., plastic-lined paper coffee cups), the engine explicitly flags an uncertainty warning instead of guessing.'
      },
      {
        title: 'Comprehensive Vitest Test Suite',
        rationale: 'Codified test cases for dozens of common household items, ensuring that refactoring never breaks classification accuracy.'
      }
    ],
    features: [
      'Keyword-based waste categorization with instant feedback.',
      'Confidence scoring with explicit uncertainty notices.',
      'Disposal instructions aligned with international waste management standards.',
      '15+ automated unit tests in Vitest.',
      'Carbon-conscious dark UI with responsive design.'
    ],
    results: [
      'Deployed live on Netlify with 100% client-side execution and zero cold-start latency.',
      'Zero false claims: Clear user disclosure on rule-based text logic vs experimental vision previews.',
      'Recognized under the 1M1B IBM SkillsBuild AI for Sustainability initiative.'
    ],
    limitations: 'Image upload currently functions as an accessible visual preview; on-device TensorFlow.js client inference is planned for future offline computer vision sorting.'
  },

  'glitrai': {
    id: 'glitrai',
    title: 'GlitrAI Mini Content Engine — Multi-Step LLM Workflow',
    roleTag: 'AI Application Development · Asynchronous Workflows',
    repoUrl: 'https://github.com/Rakeshgr962/glitrai-mini-content-engine',
    liveUrl: 'https://github.com/Rakeshgr962/glitrai-mini-content-engine',
    stack: ['Python', 'FastAPI', 'Groq LLM', 'Pollinations AI', 'PostgreSQL / SQLite', 'AsyncIO', 'Pydantic'],
    vizType: 'glitrai',
    overview: 'A backend service demonstrating asynchronous job orchestration for multi-stage LLM text generation and AI image synthesis, with persistent job lifecycle tracking and fallback reliability.',
    problem: 'Monolithic single-shot AI prompts frequently fail or produce unstructured responses. Complex multi-modal generation (structured marketing copy paired with tailored visual assets) requires decoupled pipelines with status polling.',
    contributions: [
      'Architected non-blocking asynchronous job pipeline in FastAPI handling concurrent generation requests.',
      'Engineered robust error-handling and fallback retry mechanisms for external AI model endpoints.',
      'Designed SQLite/PostgreSQL schema for persistent job status, input prompts, and generated output URLs.',
      'Implemented clean OpenAPI documentation with typed Pydantic request/response models.'
    ],
    architecture: 'Engineered with FastAPI and AsyncIO. Manages generation jobs through distinct states (PENDING, PROCESSING, COMPLETED, FAILED) with database persistence. Stage 1 generates structured topic outlines via Groq API; Stage 2 distills visual prompts; Stage 3 orchestrates image synthesis with retry logic.',
    engineeringDecisions: [
      {
        title: 'FastAPI BackgroundTasks with Persistent State Machine',
        rationale: 'Long-running AI model synthesis must never block HTTP threads. Immediate return of a Job UUID with client status polling delivers an optimal user experience.'
      },
      {
        title: 'Decoupled Two-Stage Prompt Distillation',
        rationale: 'Separating marketing copy generation from visual prompt generation allows tailored optimization for both LLM text reasoning and diffusion image synthesis.'
      },
      {
        title: 'Automatic Fallback Retry Logic',
        rationale: 'External AI endpoints frequently experience transient rate limits or 503 errors. Built-in exponential backoff and fallback endpoints ensure high pipeline resilience.'
      }
    ],
    features: [
      'Asynchronous job orchestration engine with UUID job tracking.',
      'Multi-stage generation workflow (copy writing + visual prompt extraction + image synthesis).',
      'Persistent job status database schema with Pydantic serialization.',
      'Automated rate-limit retry with provider fallback.',
      'OpenAPI interactive Swagger documentation.'
    ],
    results: [
      'Decoupled multi-stage generation architecture with deterministic job polling.',
      'Zero worker starvation: AsyncIO event loop processes API queries while generation tasks run.',
      'Complete resilience against rate limits with structured error codes and descriptive feedback.'
    ],
    limitations: 'Currently uses in-process AsyncIO tasks suitable for small-to-medium loads; Redis and Celery worker pools are planned for high-concurrency production deployments.'
  },

  'priceflow-agent': {
    id: 'priceflow-agent',
    title: 'PriceFlow-Agent — Dynamic Pricing Foundation',
    roleTag: 'AI Systems Foundation · Backend & Database',
    repoUrl: 'https://github.com/Rakeshgr962/PriceFlow-Agent',
    liveUrl: 'https://github.com/Rakeshgr962/PriceFlow-Agent',
    stack: ['Python', 'FastAPI', 'Supabase PostgreSQL', 'Redis', 'Docker Compose', 'Pytest', 'SQLAlchemy'],
    vizType: 'priceflow',
    overview: 'Backend architecture and relational database foundation for automated product price monitoring, historical trend analysis, and price drop notifications.',
    problem: 'E-commerce price volatility makes it challenging for consumers and purchasing agents to identify genuine discounts versus artificial markups before sales events.',
    contributions: [
      'Designed PostgreSQL schema on Supabase for products, historical price logs, and user alerts.',
      'Built REST API endpoints for product registration, tracking status, and price history retrieval.',
      'Created automated integration test suite with Pytest validating price parsing and database writes.',
      'Documented modular architecture enabling plug-and-play scraping adapters.'
    ],
    architecture: 'Built with Python and FastAPI, backed by Supabase PostgreSQL. Features modular scrapers, structured data models for historical price snapshots, and alert trigger rules based on statistical price moving averages.',
    engineeringDecisions: [
      {
        title: 'Normalized Relational Schema for Time-Series Price Points',
        rationale: 'Separating product metadata from chronological price logs allows efficient SQL indexing on timestamp and product_id for fast moving-average calculations.'
      },
      {
        title: 'Moving-Average Thresholds over Raw Dollar Drops',
        rationale: 'Raw price drops can be misleading due to baseline inflation. Comparing against a 30-day statistical moving average prevents deceptive markdown notifications.'
      },
      {
        title: 'Docker Compose Local Infrastructure',
        rationale: 'Bundling FastAPI, PostgreSQL, and Redis in a reproducible Compose environment simplifies onboarding and local testing.'
      }
    ],
    features: [
      'FastAPI REST endpoints for product registration and price observation.',
      'Supabase PostgreSQL relational schema with indexed historical price logs.',
      'Docker Compose orchestration for multi-container local execution.',
      'Pytest test suite validating data normalization and database transactions.',
      'Statistical threshold alert evaluation algorithm.'
    ],
    results: [
      'Clean, maintainable backend foundation with 100% passing test coverage on core price calculation logic.',
      'Accurate historical tracking preventing deceptive discount traps.',
      'Strict schema validation preventing corrupted data ingestion.'
    ],
    limitations: 'Currently focused on core API and database architecture; autonomous LLM price trend summarization and automated email webhooks are in active development.'
  }
};

// Aliases for alternate route parameter references
CASE_STUDIES['dense-matrix-multiplication'] = CASE_STUDIES['dense-matrix'];
CASE_STUDIES['glitrai-content-engine'] = CASE_STUDIES['glitrai'];

// ==========================================================================
// APPLICATION INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initThemeToggle();
  initMobileNavigation();
  initActiveNavLinkHighlight();
  initHeroEntrance();
  initThreeParticleBackground();
  initThreeConstellation();
  initAiPipelineInteractive();
  initArchitectureVisualizer();
  initTerminalSimulator();
  initMatrixBenchmarkChart();
  initChurnInteractiveWidget();
  initWasteCategoryInspector();
  initEcoSortAssistantWidget();
  initGlitrAiLifecycleWidget();
  initPriceFlowWidget();
  initCaseStudyModal();
  initCaseStudyPage();
  initProjectCategoryFilters();
  initSkillsFilter();
  initSkillsCapabilityMap();
  initContactForm();
  initCopyEmail();
  initBackToTop();
  initResumeDownload();
  initScrollAnimations();
});

// ==========================================================================
// 1. GLOBAL SCROLL PROGRESS BAR
// ==========================================================================
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// ==========================================================================
// 2. THEME TOGGLE (LIGHT STONE / DARK OBSIDIAN)
// ==========================================================================
function initThemeToggle() {
  // Ensure the website consistently displays the sleek obsidian dark theme
  document.documentElement.setAttribute('data-theme', 'dark');

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  toggleBtn.style.display = 'none';
}

// ==========================================================================
// 3. MOBILE NAVIGATION DRAWER
// ==========================================================================
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
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('open')) closeDrawer();
    else openDrawer();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
      hamburger.focus();
    }
  });
}

// ==========================================================================
// 4. ACTIVE NAVIGATION LINK DETECTION
// ==========================================================================
function initActiveNavLinkHighlight() {
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-links a');
  if (!navLinks.length) return;

  let pathname = window.location.pathname;
  let currentFile = pathname.split('/').pop() || 'index.html';
  if (currentFile === '' || currentFile === '/') currentFile = 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('#')[0].split('/').pop() || 'index.html';
    
    // Check match on filename or route
    if (linkFile === currentFile || (currentFile.includes('case-study') && linkFile.includes('projects'))) {
      link.classList.add('active');
    } else if (!href.startsWith('#')) {
      link.classList.remove('active');
    }
  });
}

// ==========================================================================
// 5. CINEMATIC HERO ENTRANCE SEQUENCE
// ==========================================================================
function initHeroEntrance() {
  const heroPill = document.querySelector('.hero-status-pill');
  const heroHeadline = document.getElementById('hero-headline') || document.querySelector('.hero-headline');
  const heroSubdeck = document.querySelector('.hero-subdeck');
  const heroActions = document.querySelector('.hero-actions');
  const heroScroll = document.querySelector('.hero-scroll-indicator');
  const specItems = document.querySelectorAll('.hero-specs-grid .spec-item');
  const constellation = document.getElementById('hero-constellation-box');

  if (!heroHeadline) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (heroPill) heroPill.style.opacity = '1';
    if (heroSubdeck) heroSubdeck.style.opacity = '1';
    if (heroActions) heroActions.style.opacity = '1';
    if (heroScroll) heroScroll.style.opacity = '1';
    specItems.forEach(s => s.style.opacity = '1');
    if (constellation) constellation.style.opacity = '1';
    return;
  }

  // Smooth line reveals
  const lineInners = document.querySelectorAll('.hero-line-inner');
  if (lineInners.length) {
    lineInners.forEach((line, idx) => {
      setTimeout(() => {
        line.classList.add('revealed');
      }, 150 + idx * 140);
    });
  }

  // GSAP or CSS entrance sequence
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.65 } });
    
    if (heroPill) {
      tl.fromTo(heroPill, { opacity: 0, y: -10 }, { opacity: 1, y: 0, delay: 0.1 });
    }
    if (heroSubdeck) {
      tl.fromTo(heroSubdeck, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.35');
    }
    if (heroActions) {
      tl.fromTo(heroActions, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, '-=0.35');
    }
    if (heroScroll) {
      tl.fromTo(heroScroll, { opacity: 0, y: 8 }, { opacity: 0.85, y: 0 }, '-=0.25');
    }
    if (specItems.length) {
      tl.fromTo(specItems, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.25');
    }
    if (constellation) {
      tl.fromTo(constellation, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.3');
    }
  } else {
    // Graceful CSS fallback
    setTimeout(() => { if (heroPill) heroPill.style.opacity = '1'; }, 100);
    setTimeout(() => { if (heroSubdeck) heroSubdeck.style.opacity = '1'; }, 350);
    setTimeout(() => { if (heroActions) heroActions.style.opacity = '1'; }, 550);
    setTimeout(() => { if (heroScroll) heroScroll.style.opacity = '0.85'; }, 650);
    setTimeout(() => { specItems.forEach(s => s.style.opacity = '1'); }, 750);
    setTimeout(() => { if (constellation) constellation.style.opacity = '1'; }, 950);
  }
}

// ==========================================================================
// 6. THREE.JS PROCEDURAL FLUID PARTICLE FIELD (COHERENT LATTICE & REFORMATION)
// ==========================================================================
function initThreeParticleBackground() {
  const canvas = document.getElementById('bg-particle-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2500);
    camera.position.z = 750;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const isMobile = window.innerWidth < 768;
    const dustCount = isMobile ? 250 : 500;
    const neuralCount = isMobile ? 320 : 700;

    // Layer 1: Ambient Micro-Dust Particles
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustVel = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      dustPos[i3] = (Math.random() - 0.5) * 1600;
      dustPos[i3 + 1] = (Math.random() - 0.5) * 1600;
      dustPos[i3 + 2] = (Math.random() - 0.5) * 800;

      dustVel[i3] = (Math.random() - 0.5) * 0.15;
      dustVel[i3 + 1] = 0.1 + Math.random() * 0.2;
      dustVel[i3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    // Layer 2: Coherent Neural Particle Lattice with Pointer Dispersion Dynamics
    const neuralGeo = new THREE.BufferGeometry();
    const neuralPos = new Float32Array(neuralCount * 3);
    const neuralHome = new Float32Array(neuralCount * 3);
    const neuralVel = new Float32Array(neuralCount * 3);

    // Arrange coherent initial equilibrium along a flowing 3D toroidal neural mesh
    for (let i = 0; i < neuralCount; i++) {
      const i3 = i * 3;
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const rMajor = 380 + (Math.random() - 0.5) * 120;
      const rMinor = 140 + (Math.random() - 0.5) * 80;

      const hx = (rMajor + rMinor * Math.cos(v)) * Math.cos(u);
      const hy = (rMajor + rMinor * Math.cos(v)) * Math.sin(u) * 0.65;
      const hz = rMinor * Math.sin(v) + (Math.random() - 0.5) * 100;

      neuralHome[i3] = hx;
      neuralHome[i3 + 1] = hy;
      neuralHome[i3 + 2] = hz;

      neuralPos[i3] = hx + (Math.random() - 0.5) * 20;
      neuralPos[i3 + 1] = hy + (Math.random() - 0.5) * 20;
      neuralPos[i3 + 2] = hz;

      neuralVel[i3] = 0;
      neuralVel[i3 + 1] = 0;
      neuralVel[i3 + 2] = 0;
    }
    neuralGeo.setAttribute('position', new THREE.BufferAttribute(neuralPos, 3));

    const getThemeColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        dustColor: isDark ? 0xaab4ad : 0x78837c,
        dustOpacity: isDark ? 0.30 : 0.22,
        neuralColor: isDark ? 0xe0231c : 0xff5a3c,
        neuralOpacity: isDark ? 0.70 : 0.50
      };
    };

    let colors = getThemeColors();

    const dustMaterial = new THREE.PointsMaterial({
      color: colors.dustColor,
      size: isMobile ? 2.0 : 2.6,
      transparent: true,
      opacity: colors.dustOpacity,
      blending: THREE.NormalBlending
    });

    const neuralMaterial = new THREE.PointsMaterial({
      color: colors.neuralColor,
      size: isMobile ? 3.6 : 4.4,
      transparent: true,
      opacity: colors.neuralOpacity,
      blending: THREE.NormalBlending
    });

    const dustPoints = new THREE.Points(dustGeo, dustMaterial);
    const neuralPoints = new THREE.Points(neuralGeo, neuralMaterial);
    scene.add(dustPoints);
    scene.add(neuralPoints);

    // Mouse pointer in unprojected 3D coordinates
    let mouseWorldX = 0, mouseWorldY = 0;
    let targetParallaxX = 0, targetParallaxY = 0;
    let currentParallaxX = 0, currentParallaxY = 0;

    window.addEventListener('mousemove', (e) => {
      // Screen-space pointer mapped to 3D world plane near z=0
      mouseWorldX = (e.clientX - window.innerWidth / 2) * (1200 / window.innerWidth);
      mouseWorldY = -(e.clientY - window.innerHeight / 2) * (800 / window.innerHeight);

      targetParallaxX = (e.clientX - window.innerWidth / 2) * 0.05;
      targetParallaxY = (e.clientY - window.innerHeight / 2) * 0.05;
    }, { passive: true });

    // React to theme changes
    window.addEventListener('themeChanged', () => {
      colors = getThemeColors();
      dustMaterial.color.setHex(colors.dustColor);
      dustMaterial.opacity = colors.dustOpacity;
      neuralMaterial.color.setHex(colors.neuralColor);
      neuralMaterial.opacity = colors.neuralOpacity;
    });

    let isTabActive = true;
    document.addEventListener('visibilitychange', () => {
      isTabActive = !document.hidden;
    });

    let time = 0;
    const dispersionRadius = 180;
    const repulsionStrength = 5.5;
    const springStrength = 0.032;
    const damping = 0.92;

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isTabActive) return;

      time += 0.012;

      // Parallax easing
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.04;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.04;

      dustPoints.rotation.y = currentParallaxX * 0.0003;
      dustPoints.rotation.x = currentParallaxY * 0.0003;
      neuralPoints.rotation.y = currentParallaxX * 0.0006 + Math.sin(time * 0.3) * 0.03;
      neuralPoints.rotation.x = currentParallaxY * 0.0006 + Math.cos(time * 0.25) * 0.02;

      // Update Dust Layer
      const dPos = dustGeo.attributes.position.array;
      for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        dPos[i3] += dustVel[i3];
        dPos[i3 + 1] += dustVel[i3 + 1];
        dPos[i3 + 2] += dustVel[i3 + 2];

        if (dPos[i3 + 1] > 800) dPos[i3 + 1] = -800;
        if (dPos[i3] > 800) dPos[i3] = -800;
        if (dPos[i3] < -800) dPos[i3] = 800;
      }
      dustGeo.attributes.position.needsUpdate = true;

      // Update Neural Layer: Pointer Dispersion & Coherent Elastic Reformation
      const nPos = neuralGeo.attributes.position.array;
      for (let i = 0; i < neuralCount; i++) {
        const i3 = i * 3;

        let px = nPos[i3];
        let py = nPos[i3 + 1];
        let pz = nPos[i3 + 2];

        const hx = neuralHome[i3];
        const hy = neuralHome[i3 + 1];
        const hz = neuralHome[i3 + 2];

        // 1. Kinetic Repulsion from pointer
        const dx = px - mouseWorldX;
        const dy = py - mouseWorldY;
        const distSq = dx * dx + dy * dy;

        if (distSq < dispersionRadius * dispersionRadius && distSq > 1) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / dispersionRadius) * repulsionStrength;
          neuralVel[i3] += (dx / dist) * force;
          neuralVel[i3 + 1] += (dy / dist) * force;
          neuralVel[i3 + 2] += (Math.random() - 0.5) * force * 0.5;
        }

        // 2. Elastic restoring spring force back to coherent structure
        const springX = (hx - px) * springStrength;
        const springY = (hy - py) * springStrength;
        const springZ = (hz - pz) * springStrength;

        neuralVel[i3] += springX;
        neuralVel[i3 + 1] += springY;
        neuralVel[i3 + 2] += springZ;

        // 3. Velocity Damping
        neuralVel[i3] *= damping;
        neuralVel[i3 + 1] *= damping;
        neuralVel[i3 + 2] *= damping;

        // 4. Harmonic organic fluid turbulence
        const wave = Math.sin(time * 1.8 + i * 0.2) * 0.18;
        nPos[i3] = px + neuralVel[i3] + wave;
        nPos[i3 + 1] = py + neuralVel[i3 + 1] + Math.cos(time * 1.4 + i * 0.15) * 0.15;
        nPos[i3 + 2] = pz + neuralVel[i3 + 2];
      }
      neuralGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });
  } catch (err) {
    console.warn('Three.js Particle Background initialization bypassed:', err);
  }
}

// ==========================================================================
// 7. THREE.JS INTERACTIVE 3D TECH CONSTELLATION (HERO ORB)
// ==========================================================================
function initThreeConstellation() {
  const canvas = document.getElementById('constellation-canvas');
  const container = document.getElementById('hero-constellation-box');
  const nodeInfo = document.getElementById('constellation-node-info');
  if (!canvas || !container || typeof THREE === 'undefined') return;

  try {
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const nodesData = [
      { name: 'Go 1.22', repo: 'YamlAnchor Simulator', x: -60, y: 35, z: 10, color: 0x3B82F6, slug: 'yamlanchor' },
      { name: 'C11 / OpenMP', repo: 'Dense Matrix Study (~12.6x)', x: 65, y: 40, z: -15, color: 0x10B981, slug: 'dense-matrix-multiplication' },
      { name: 'React 19 / TS', repo: 'AIET-UniSphere & EcoSort', x: -40, y: -40, z: 25, color: 0x60A5FA, slug: 'aiet-unisphere' },
      { name: 'PostgreSQL RLS', repo: 'Database-Enforced Security', x: 50, y: -35, z: 20, color: 0xF59E0B, slug: 'aiet-unisphere' },
      { name: 'XGBoost', repo: 'Customer Churn API (81%)', x: 0, y: 55, z: -30, color: 0x8B5CF6, slug: 'customer-churn' },
      { name: 'EfficientNetB0', repo: 'Waste Vision (89.24%)', x: -75, y: -5, z: -25, color: 0x10B981, slug: 'garbage-classification' },
      { name: 'Docker Engine', repo: 'Local CI Runner Simulation', x: 75, y: 0, z: 15, color: 0x3B82F6, slug: 'yamlanchor' },
      { name: 'FastAPI REST', repo: 'Leakage-Free ML Inference', x: 5, y: -10, z: -5, color: 0xEC4899, slug: 'customer-churn' }
    ];

    const group = new THREE.Group();
    scene.add(group);

    const sphereGeometry = new THREE.SphereGeometry(4.5, 16, 16);
    const nodeMeshes = [];

    nodesData.forEach((node, idx) => {
      const material = new THREE.MeshBasicMaterial({ color: node.color });
      const mesh = new THREE.Mesh(sphereGeometry, material);
      mesh.position.set(node.x, node.y, node.z);
      mesh.userData = { ...node, index: idx };
      group.add(mesh);
      nodeMeshes.push(mesh);
    });

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x60A5FA : 0x1D4ED8,
      transparent: true,
      opacity: 0.28
    });

    const linePositions = [];
    for (let i = 0; i < nodesData.length; i++) {
      for (let j = i + 1; j < nodesData.length; j++) {
        const dist = Math.hypot(
          nodesData[i].x - nodesData[j].x,
          nodesData[i].y - nodesData[j].y,
          nodesData[i].z - nodesData[j].z
        );
        if (dist < 110) {
          linePositions.push(nodesData[i].x, nodesData[i].y, nodesData[i].z);
          linePositions.push(nodesData[j].x, nodesData[j].y, nodesData[j].z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lineMesh);

    window.addEventListener('themeChanged', (e) => {
      lineMaterial.color.setHex(e.detail.theme === 'dark' ? 0x60A5FA : 0x1D4ED8);
    });

    let isDragging = false;
    let prevMouseX = 0, prevMouseY = 0;
    let rotSpeedY = 0.0035;

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    canvas.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        group.rotation.y += deltaX * 0.008;
        group.rotation.x += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }

      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData;
        if (nodeInfo) {
          nodeInfo.style.display = 'block';
          nodeInfo.innerHTML = `<strong>${hit.name}</strong> · ${hit.repo}`;
        }
        canvas.style.cursor = 'pointer';
      } else {
        if (!isDragging && nodeInfo) {
          nodeInfo.style.display = 'none';
          canvas.style.cursor = 'grab';
        }
      }
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData;
        if (hit.slug) {
          window.location.href = `case-study.html?id=${hit.slug}`;
        }
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) {
        group.rotation.y += rotSpeedY;
        group.rotation.x += 0.0006;
      }
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    }, { passive: true });
  } catch (err) {
    console.warn('Three.js Constellation initialization bypassed:', err);
  }
}

// ==========================================================================
// 8. CONCEPTUAL AI ENGINEERING PIPELINE (HOW INTELLIGENT SYSTEMS ARE ASSEMBLED)
// ==========================================================================
function initAiPipelineInteractive() {
  const mountEl = document.getElementById('ai-pipeline-interactive-mount');
  const telemetryMount = document.getElementById('ai-pipeline-telemetry-mount');
  if (!mountEl || !telemetryMount) return;

  const PIPELINE_PHASES = {
    data: {
      phaseTag: 'Phase 01 / Data Ingestion & Integrity',
      title: 'Data Cleansing & Leakage Prevention',
      statusHtml: '<span class="telemetry-status-pill"><i class="fas fa-shield-alt"></i> Leakage Guard Active</span>',
      description: 'Machine learning systems in production are only as sound as their training boundaries. Real enterprise telemetry routinely contains post-event leakage, unscaled numerical outliers, and missing indicators that artificially inflate offline notebook metrics while failing catastrophically in deployment.',
      checklist: [
        'Elimination of target leakage columns before model fitting (e.g. Churn Reason, Churn Score).',
        'Deterministic stratified splits preserving minority class representations.',
        'Pydantic request schemas enforcing strict typing at the ingestion API boundary.'
      ],
      metrics: [
        { label: 'Validation Strategy', val: '80/20 Stratified Split' },
        { label: 'Leakage Elimination', val: 'Zero Post-Event Contamination' },
        { label: 'Primary Implementation', val: 'Customer Churn API (7,043 Records)' }
      ],
      caseStudyUrl: 'case-study.html?id=customer-churn',
      caseStudyLabel: 'Inspect Churn Data Pipeline',
      repoUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
      repoLabel: 'View GitHub Code'
    },
    model: {
      phaseTag: 'Phase 02 / Mathematical Optimization',
      title: 'Model Architecture & Transfer Learning',
      statusHtml: '<span class="telemetry-status-pill"><i class="fas fa-check-circle"></i> Converged</span>',
      description: 'Selecting the optimal compute architecture depends strictly on the domain. For high-dimensional tabular data, gradient-boosted decision trees (XGBoost) provide fast inference and explainable feature importances; for computer vision, pretrained backbones (EfficientNetB0) minimize floating-point operations while maintaining high classification fidelity.',
      checklist: [
        'Transfer learning with frozen feature extractors and tuned classification heads.',
        'Empirical metric tracking: ROC-AUC, precision-recall trade-offs over raw accuracy.',
        'MLflow experiment logging tracking hyperparameter iterations and serialized model artifacts.'
      ],
      metrics: [
        { label: 'Vision Benchmark', val: '89.24% on 6 Waste Classes' },
        { label: 'Tabular ROC-AUC', val: '0.84 on 7,043 Telco records' },
        { label: 'Primary Implementation', val: 'EfficientNetB0 Waste Classifier' }
      ],
      caseStudyUrl: 'case-study.html?id=garbage-classification',
      caseStudyLabel: 'Inspect Vision Case Study',
      repoUrl: 'https://github.com/Rakeshgr962/GarbageClassfication',
      repoLabel: 'View Model Repo'
    },
    api: {
      phaseTag: 'Phase 03 / High-Throughput Serving',
      title: 'Inference APIs & Asynchronous Queues',
      statusHtml: '<span class="telemetry-status-pill"><i class="fas fa-bolt"></i> Low Latency</span>',
      description: 'Bridging machine learning into software requires decoupling synchronous HTTP request cycles from heavy model compute. Asynchronous FastAPI services with typed request contracts, background task workers, and Redis in-memory caching protect backend stability and prevent connection timeouts.',
      checklist: [
        'Asynchronous FastAPI endpoints with sub-50ms P95 latency budgets.',
        'Decoupled background task workers for multi-stage AI generation jobs.',
        'Multi-stage Docker containerization with automated healthcheck endpoints.'
      ],
      metrics: [
        { label: 'Inference Latency', val: '< 45ms P95 API Response' },
        { label: 'Runtime Environment', val: 'Docker Container on Cloud PaaS' },
        { label: 'Primary Implementation', val: 'GlitrAI & Customer Churn FastAPI' }
      ],
      caseStudyUrl: 'case-study.html?id=glitrai',
      caseStudyLabel: 'Inspect GlitrAI Pipeline',
      repoUrl: 'https://github.com/Rakeshgr962/glitrai-mini-content-engine',
      repoLabel: 'View FastAPI Repo'
    },
    product: {
      phaseTag: 'Phase 04 / Trust & Human-Facing Software',
      title: 'Product Surface & Responsible AI Guardrails',
      statusHtml: '<span class="telemetry-status-pill"><i class="fas fa-lock"></i> RLS Enforced</span>',
      description: 'Intelligent applications must earn user trust. In full-stack platforms, authorization is not delegated to fragile proxy middleware—security rules are codified directly in PostgreSQL Row Level Security (RLS) evaluated on authenticated JWT sessions. For intelligent assistants, transparent confidence meters and uncertainty notices explicitly communicate model limitations.',
      checklist: [
        'Database-enforced Row Level Security (RLS) across institutional roles.',
        'Transparent confidence meters and uncertainty notices (1M1B IBM SkillsBuild).',
        'Typed React 19 / TypeScript component hierarchies with zero permission leaks.'
      ],
      metrics: [
        { label: 'Security Enforcement', val: '100% Database-Level RLS' },
        { label: 'Transparency Guard', val: 'Explicit Confidence & Mode Disclosure' },
        { label: 'Primary Implementation', val: 'AIET-UniSphere & AI-EcoSort' }
      ],
      caseStudyUrl: 'case-study.html?id=aiet-unisphere',
      caseStudyLabel: 'Inspect AIET-UniSphere Security',
      repoUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
      repoLabel: 'View GitHub Org'
    }
  };

  function renderTelemetry(phaseKey) {
    const p = PIPELINE_PHASES[phaseKey] || PIPELINE_PHASES.data;
    telemetryMount.innerHTML = `
      <div class="telemetry-header-row">
        <div>
          <span class="telemetry-phase-tag">${p.phaseTag}</span>
          <h3 class="telemetry-title">${p.title}</h3>
        </div>
        <div>${p.statusHtml}</div>
      </div>
      <div class="telemetry-grid">
        <div class="telemetry-narrative">
          <p>${p.description}</p>
          <ul class="telemetry-checklist">
            ${p.checklist.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
          </ul>
          <div class="telemetry-action-row">
            <a href="${p.caseStudyUrl}" class="btn-primary" style="padding: 9px 18px; font-size: 0.8125rem;">
              <span>${p.caseStudyLabel}</span> <i class="fas fa-arrow-right"></i>
            </a>
            <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 9px 16px; font-size: 0.8125rem;">
              <i class="fab fa-github"></i> <span>${p.repoLabel}</span>
            </a>
          </div>
        </div>
        <div class="telemetry-meta-box">
          <div style="font-family: var(--font-mono); font-size: 0.6875rem; font-weight: 700; color: var(--accent-cobalt); text-transform: uppercase; margin-bottom: 4px;">
            ENGINEERING SPEC SHEET
          </div>
          ${p.metrics.map(m => `
            <div class="meta-metric-row">
              <span class="meta-metric-label">${m.label}</span>
              <span class="meta-metric-val">${m.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Initial render
  renderTelemetry('data');

  // Navigation click handling
  const buttons = mountEl.querySelectorAll('.ai-pipeline-step-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const phase = btn.getAttribute('data-phase');
      renderTelemetry(phase);
    });
  });
}

// ==========================================================================
// 9. INTERACTIVE RLS POLICY INSPECTOR (AIET-UNISPHERE)
// ==========================================================================
function initArchitectureVisualizer(targetEl) {
  const mount = targetEl || document.getElementById('architecture-visualizer-mount');
  if (!mount) return;

  const rolePolicies = {
    Student: {
      role: 'Student Role',
      desc: 'Read enrolled courses & personal evaluation marks only. Zero write permissions on marks table.',
      sql: `-- Evaluated on every Supabase JWT session\nCREATE POLICY "student_select_own_marks" ON marks\nFOR SELECT USING (student_id = auth.uid());\n\n-- Direct mutations are rejected at database level\nCREATE POLICY "student_no_mutation" ON marks\nFOR INSERT WITH CHECK (false);`
    },
    Faculty: {
      role: 'Faculty Role',
      desc: 'Read/Write own assigned course sections. Enter internal assessments. Strictly isolated from other departments.',
      sql: `-- Faculty can enter grades only for assigned sections\nCREATE POLICY "faculty_grade_access" ON marks\nFOR ALL USING (\n  course_id IN (\n    SELECT id FROM courses WHERE faculty_id = auth.uid()\n  )\n);`
    },
    HOD: {
      role: 'HOD Role',
      desc: 'Aggregate analytics across department batches. Approve faculty grade submissions & manage faculty rosters.',
      sql: `-- HOD accesses department-wide analytics\nCREATE POLICY "hod_department_overview" ON marks\nFOR SELECT USING (\n  department_id = (\n    SELECT dept_id FROM profiles \n    WHERE id = auth.uid() AND role = 'hod'\n  )\n);`
    },
    Admin: {
      role: 'Administrator Role',
      desc: 'Institutional user lifecycle management, audit logs, and global department provisioning.',
      sql: `-- Global audit logging policy\nCREATE POLICY "admin_audit_access" ON audit_logs\nFOR ALL USING (\n  (auth.jwt() ->> 'role') = 'admin'\n);`
    }
  };

  const render = (activeRole = 'Student') => {
    const p = rolePolicies[activeRole];
    mount.innerHTML = `
      <div class="architecture-card">
        <div class="arch-header">
          <span><i class="fas fa-shield-alt"></i> PostgreSQL Row Level Security (RLS) Inspector</span>
          <span style="font-size: 10px; color: var(--accent-cobalt);">Click role to inspect policy:</span>
        </div>
        <div class="roles-grid" style="grid-template-columns: repeat(4, 1fr);">
          ${Object.keys(rolePolicies).map(r => `
            <button type="button" class="role-box-btn ${r === activeRole ? 'active' : ''}" data-role="${r}">
              <div class="role-title">${r}</div>
            </button>
          `).join('')}
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin: 8px 0;">
          <strong>${p.role}:</strong> ${p.desc}
        </div>
        <pre class="rls-code-viewer"><code>${p.sql}</code></pre>
        <div class="security-enforcement" style="margin-top: 10px;">
          <strong>Zero API Overhead:</strong> Authorization is codified directly in PostgreSQL policies. Even compromised backend proxies cannot bypass RLS.
        </div>
      </div>
    `;

    mount.querySelectorAll('.role-box-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        render(btn.getAttribute('data-role'));
      });
    });
  };

  render('Student');
}

// ==========================================================================
// 9. INTERACTIVE YAMLANCHOR TERMINAL SIMULATOR
// ==========================================================================
function initTerminalSimulator(targetEl) {
  const terminalMount = targetEl || document.getElementById('terminal-simulator-mount');
  if (!terminalMount) return;

  const scenarios = {
    full: [
      { text: '$ yamlanchor scan --repo . --ast', type: 'cmd', delay: 150 },
      { text: '✓ Discovered Go 1.22 + Next.js 14 codebase', type: 'success', delay: 400 },
      { text: '✓ Parsed package.json & go.mod AST targets', type: 'muted', delay: 700 },
      { text: '$ yamlanchor simulate --workflow ci.yml --docker', type: 'cmd', delay: 1000 },
      { text: '⚡ Spawning runner container: alpine/golang:1.22', type: 'muted', delay: 1300 },
      { text: '[Step 1/3] go test ./pkg/simulator -v ... PASS (0.42s)', type: 'success', delay: 1650 },
      { text: '[Step 2/3] Secrets scan: No unencrypted keys detected', type: 'success', delay: 2000 },
      { text: '✓ Local Docker Simulation Succeeded (0 remote failures)', type: 'success', delay: 2350 }
    ],
    secret_leak: [
      { text: '$ yamlanchor scan --secrets --strict', type: 'cmd', delay: 150 },
      { text: '⚡ Scanning repo AST for plaintext credentials...', type: 'muted', delay: 450 },
      { text: '⚠ ALERT: AWS_SECRET_ACCESS_KEY pattern found at workflow.yml:14', type: 'warn', delay: 800 },
      { text: '🛡️ Local Interceptor: Remote push blocked! Key mocked in local env', type: 'warn', delay: 1150 },
      { text: '✓ Automated Secret Interception prevented public leak', type: 'success', delay: 1500 }
    ],
    syntax_error: [
      { text: '$ yamlanchor validate --workflow ci.yml', type: 'cmd', delay: 150 },
      { text: '✖ Schema Error at line 22: Indentation mismatch under "jobs.build.steps"', type: 'warn', delay: 500 },
      { text: '🔧 Self-Healing Engine: Suggesting 2-space YAML re-indentation patch', type: 'muted', delay: 900 },
      { text: '✓ Suggested fix generated without pushing broken remote commit', type: 'success', delay: 1300 }
    ]
  };

  terminalMount.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-titlebar">
        <div class="terminal-dots">
          <span class="dot-red"></span>
          <span class="dot-yellow"></span>
          <span class="dot-green"></span>
        </div>
        <span class="terminal-label">yamlanchor-studio · ndjson stream</span>
      </div>
      <div class="terminal-toolbar">
        <button type="button" class="term-action-btn active" data-scenario="full">Run Full Pipeline</button>
        <button type="button" class="term-action-btn" data-scenario="secret_leak">Simulate Secret Intercept</button>
        <button type="button" class="term-action-btn" data-scenario="syntax_error">Simulate Self-Healing</button>
        <button type="button" class="term-action-btn" data-action="clear">Clear</button>
      </div>
      <div class="terminal-body" id="term-output"></div>
    </div>
  `;

  const output = terminalMount.querySelector('#term-output');
  let currentTimers = [];

  const runScenario = (key) => {
    currentTimers.forEach(t => clearTimeout(t));
    currentTimers = [];
    if (!output) return;
    output.innerHTML = '';

    const lines = scenarios[key];
    lines.forEach(step => {
      const t = setTimeout(() => {
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
      currentTimers.push(t);
    });
  };

  runScenario('full');

  terminalMount.querySelectorAll('.term-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scenario = btn.getAttribute('data-scenario');
      const action = btn.getAttribute('data-action');

      terminalMount.querySelectorAll('.term-action-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (scenario) {
        runScenario(scenario);
      } else if (action === 'clear' && output) {
        output.innerHTML = '<div class="term-line term-muted">Terminal cleared. Select a scenario above to dry-run.</div>';
      }
    });
  });
}

// ==========================================================================
// 10. INTERACTIVE DENSE MATRIX GFLOPS BENCHMARK
// ==========================================================================
function initMatrixBenchmarkChart(targetEl) {
  const container = targetEl || document.getElementById('matrix-chart-mount');
  if (!container) return;

  const benchmarkData = {
    '512': { naive: 0.82, ikj: 10.4, openmp: 38.6, speedup: '12.6x', note: 'L1d cache locality active' },
    '1024': { naive: 0.74, ikj: 9.8, openmp: 44.2, speedup: '13.2x', note: 'Tile size 64 fits L2 cache' },
    '2048': { naive: 0.61, ikj: 9.1, openmp: 46.8, speedup: '14.9x', note: 'OpenMP collapse(2) prevents thread starvation' }
  };

  const render = (dim = '1024') => {
    const d = benchmarkData[dim];
    const naiveH = Math.max(3, (d.naive / 50) * 95);
    const ikjH = (d.ikj / 50) * 95;
    const ompH = (d.openmp / 50) * 95;

    container.innerHTML = `
      <div class="matrix-chart-card">
        <div class="chart-header">
          <span class="chart-title"><i class="fas fa-microchip"></i> Measured Compute (GFLOPS)</span>
          <div class="matrix-dim-toggles">
            <button type="button" class="dim-toggle-btn ${dim === '512' ? 'active' : ''}" data-dim="512">N=512</button>
            <button type="button" class="dim-toggle-btn ${dim === '1024' ? 'active' : ''}" data-dim="1024">N=1024</button>
            <button type="button" class="dim-toggle-btn ${dim === '2048' ? 'active' : ''}" data-dim="2048">N=2048</button>
          </div>
        </div>

        <div style="display: flex; gap: 14px; font-family: var(--font-mono); font-size: 10px; margin-bottom: 8px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 4px;"><span class="legend-color bar-naive"></span> Naive ijk: <strong>${d.naive} GF</strong></div>
          <div style="display: flex; align-items: center; gap: 4px;"><span class="legend-color bar-ikj"></span> ikj Reordered: <strong>${d.ikj} GF</strong></div>
          <div style="display: flex; align-items: center; gap: 4px;"><span class="legend-color bar-openmp"></span> OpenMP + Tiling: <strong>${d.openmp} GF</strong></div>
        </div>

        <svg class="benchmark-svg-container" viewBox="0 0 460 130" preserveAspectRatio="none">
          <line x1="40" y1="20" x2="450" y2="20" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          <line x1="40" y1="60" x2="450" y2="60" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          <line x1="40" y1="100" x2="450" y2="100" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
          
          <text x="32" y="24" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">50G</text>
          <text x="32" y="64" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">25G</text>
          <text x="32" y="104" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">0G</text>

          <!-- Naive Bar -->
          <rect x="100" y="${100 - naiveH}" width="36" height="${naiveH}" fill="#94A3B8" rx="3" />
          <text x="118" y="118" font-size="10" fill="var(--text-muted)" text-anchor="middle" font-family="var(--font-mono)">Naive ijk</text>

          <!-- ikj Bar -->
          <rect x="180" y="${100 - ikjH}" width="36" height="${ikjH}" fill="var(--accent-cobalt)" rx="3" />
          <text x="198" y="118" font-size="10" fill="var(--text-ink)" font-weight="bold" text-anchor="middle" font-family="var(--font-mono)">ikj (~${d.speedup})</text>

          <!-- OpenMP Bar -->
          <rect x="260" y="${100 - ompH}" width="36" height="${ompH}" fill="var(--accent-emerald)" rx="3" />
          <text x="278" y="118" font-size="10" fill="var(--accent-emerald)" font-weight="bold" text-anchor="middle" font-family="var(--font-mono)">OpenMP (${d.openmp} GF)</text>
        </svg>

        <div class="benchmark-insight">
          <strong>Key Finding for N=${dim}:</strong> ${d.note}. Switching from column stride to sequential access produces <strong>${d.speedup} speedup</strong> before parallelization.
        </div>
      </div>
    `;

    container.querySelectorAll('.dim-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        render(btn.getAttribute('data-dim'));
      });
    });
  };

  render('1024');
}

// ==========================================================================
// 11. INTERACTIVE CHURN DECISION BOUNDARY SIMULATOR
// ==========================================================================
function initChurnInteractiveWidget(targetEl) {
  const mount = targetEl || document.getElementById('churn-widget-mount');
  if (!mount && !document.getElementById('churn-tenure-slider')) return;

  if (mount && !document.getElementById('churn-tenure-slider')) {
    mount.innerHTML = `
      <div class="matrix-chart-card">
        <div class="chart-header">
          <span class="chart-title"><i class="fas fa-chart-line"></i> Model Validation Matrix (Telco 7,043)</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
          <div style="background: var(--bg-subtle); padding: 10px; border-radius: 6px; border: 1px solid var(--border-hairline);">
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">Overall Accuracy</div>
            <div style="font-size: 20px; font-weight: 700; color: var(--text-ink);">81%</div>
            <div style="font-size: 10px; color: var(--text-muted);">80/20 Stratified Split</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 10px; border-radius: 6px; border: 1px solid var(--border-hairline);">
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">Precision</div>
            <div style="font-size: 20px; font-weight: 700; color: var(--accent-cobalt);">77%</div>
            <div style="font-size: 10px; color: var(--text-muted);">Low False Positive Rate</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 10px; border-radius: 6px; border: 1px solid var(--border-hairline);">
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">Recall</div>
            <div style="font-size: 20px; font-weight: 700; color: var(--accent-amber);">68%</div>
            <div style="font-size: 10px; color: var(--text-muted);">Threshold Tuning Target</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 10px; border-radius: 6px; border: 1px solid var(--border-hairline);">
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">F1-Score</div>
            <div style="font-size: 20px; font-weight: 700; color: var(--accent-emerald);">72%</div>
            <div style="font-size: 10px; color: var(--text-muted);">Balanced Evaluation</div>
          </div>
        </div>

        <div class="churn-interactive-widget" id="churn-widget">
          <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--text-ink); margin-bottom: 8px;">
            <i class="fas fa-sliders-h"></i> Interactive Decision Boundary Tester
          </div>
          <div class="churn-slider-row">
            <div class="churn-slider-label">
              <span>Tenure (Months)</span>
              <span id="churn-tenure-val">12 mo</span>
            </div>
            <input type="range" class="churn-range-input" id="churn-tenure-slider" min="1" max="72" value="12">
          </div>
          <div class="churn-slider-row">
            <div class="churn-slider-label">
              <span>Monthly Charges ($)</span>
              <span id="churn-charges-val">$75/mo</span>
            </div>
            <input type="range" class="churn-range-input" id="churn-charges-slider" min="20" max="120" value="75">
          </div>
          <div class="churn-prediction-badge churn-risk" id="churn-result-badge">
            <span>Model Classification:</span>
            <span id="churn-result-text">High Churn Risk (64%)</span>
          </div>
        </div>
      </div>
    `;
  }

  const tenureSlider = document.getElementById('churn-tenure-slider');
  const chargesSlider = document.getElementById('churn-charges-slider');
  const tenureVal = document.getElementById('churn-tenure-val');
  const chargesVal = document.getElementById('churn-charges-val');
  const resultBadge = document.getElementById('churn-result-badge');
  const resultText = document.getElementById('churn-result-text');

  if (!tenureSlider || !chargesSlider) return;

  const updatePrediction = () => {
    const tenure = parseInt(tenureSlider.value, 10);
    const charges = parseInt(chargesSlider.value, 10);

    if (tenureVal) tenureVal.textContent = `${tenure} mo`;
    if (chargesVal) chargesVal.textContent = `$${charges}/mo`;

    const churnScore = (charges * 0.75) - (tenure * 1.8) + 40;
    const probability = Math.min(95, Math.max(5, Math.round(churnScore)));

    if (resultBadge && resultText) {
      if (probability > 50) {
        resultBadge.className = 'churn-prediction-badge churn-risk';
        resultText.textContent = `High Churn Risk (${probability}%)`;
      } else {
        resultBadge.className = 'churn-prediction-badge churn-safe';
        resultText.textContent = `Low Churn Risk (${probability}%)`;
      }
    }
  };

  tenureSlider.addEventListener('input', updatePrediction);
  chargesSlider.addEventListener('input', updatePrediction);
  updatePrediction();
}

// ==========================================================================
// 12. INTERACTIVE WASTE CATEGORY INSPECTOR
// ==========================================================================
function initWasteCategoryInspector(targetEl) {
  const mount = targetEl || document.getElementById('waste-cat-mount');
  const existingButtons = document.querySelectorAll('#waste-cat-grid button');

  const catDetails = {
    Cardboard: 'Dry recyclable material. Clean corrugated boxes; flattened before municipal collection.',
    Glass: 'Inorganic recyclable. Jars and bottles; rinsed clean of food residues to prevent contamination.',
    Metal: 'Valuable recyclable. Aluminum beverage cans and tin food tins; 100% infinitely recyclable.',
    Paper: 'Dry fiber recyclable. Newspapers, envelopes, and office paper (unlaminated and free of grease).',
    Plastic: 'PET/HDPE recyclables. Rinsed beverage bottles and containers; marked with recycling codes.',
    Trash: 'Non-recyclable sanitary or composite waste destined for containment or incinerator disposal.'
  };

  if (mount && !existingButtons.length) {
    mount.innerHTML = `
      <div class="matrix-chart-card">
        <div class="chart-header">
          <span class="chart-title"><i class="fas fa-recycle"></i> 6 Waste Categories & Rule Engine</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px;" id="waste-cat-grid">
          ${Object.keys(catDetails).map((cat, idx) => `
            <button type="button" class="dim-toggle-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}" style="padding: 8px;">${cat}</button>
          `).join('')}
        </div>
        <div class="benchmark-insight" id="waste-cat-desc">
          <strong>Cardboard:</strong> Dry recyclable material. Clean corrugated boxes; flattened before municipal collection.
        </div>
      </div>
    `;
  }

  const buttons = document.querySelectorAll('#waste-cat-grid button');
  const descEl = document.getElementById('waste-cat-desc');
  if (!buttons.length || !descEl) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      if (catDetails[cat]) {
        descEl.innerHTML = `<strong>${cat}:</strong> ${catDetails[cat]}`;
      }
    });
  });
}

// ==========================================================================
// 12b. INTERACTIVE ECOSORT ASSISTANT WIDGET (AI-ECOSORT)
// ==========================================================================
function initEcoSortAssistantWidget(targetEl) {
  const mount = targetEl || document.getElementById('ecosort-assistant-mount');
  if (!mount) return;

  const itemKnowledge = [
    { item: 'Cardboard Delivery Box', cat: 'Recyclable (Paper & Board)', bin: 'Blue / Dry Paper Bin', conf: '98% Deterministic Rule', note: 'Flatten box; remove heavy plastic packing tape.' },
    { item: 'Clean Aluminum Soda Can', cat: 'Recyclable (Metal)', bin: 'Yellow / Metal Stream', conf: '99% Deterministic Rule', note: '100% infinitely recyclable. Rinse remaining syrup.' },
    { item: 'Oily Takeout Pizza Box', cat: 'Non-Recyclable Compost/Trash', bin: 'Green Organics / Trash', conf: '92% Contamination Check', note: 'Grease saturates paper fibers; cannot be recycled with dry board.' },
    { item: 'Empty Plastic Water Bottle', cat: 'Recyclable (PET 1)', bin: 'Blue Container Bin', conf: '96% Deterministic Rule', note: 'Empty liquid completely; leave plastic cap attached.' },
    { item: 'Rechargeable Lithium Battery', cat: 'Hazardous E-Waste', bin: 'Special Drop-Off Only', conf: '100% Safety Guardrail', note: 'Fire hazard if crushed in regular recycling trucks. Deliver to certified e-waste bin.' }
  ];

  mount.innerHTML = `
    <div class="matrix-chart-card">
      <div class="chart-header">
        <span class="chart-title"><i class="fas fa-leaf"></i> AI-EcoSort Rule Assistant Simulator (1M1B)</span>
      </div>
      <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 12px;">
        Click an item to test the deterministic classification rule engine and responsible uncertainty disclosures:
      </p>
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;" id="ecosort-chips">
        ${itemKnowledge.map((k, i) => `
          <button type="button" class="dim-toggle-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" style="padding: 6px 10px; font-size: 0.75rem;">
            ${k.item}
          </button>
        `).join('')}
      </div>
      <div style="background: var(--bg-subtle); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-hairline);" id="ecosort-output">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: var(--text-ink); font-size: 0.9375rem;" id="ecosort-item-title">${itemKnowledge[0].item}</strong>
          <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent-emerald); background: var(--accent-emerald-soft); padding: 2px 8px; border-radius: 3px;" id="ecosort-conf">${itemKnowledge[0].conf}</span>
        </div>
        <div style="font-size: 0.8125rem; color: var(--text-body); margin-bottom: 4px;"><strong>Target Category:</strong> <span id="ecosort-cat">${itemKnowledge[0].cat}</span></div>
        <div style="font-size: 0.8125rem; color: var(--text-body); margin-bottom: 6px;"><strong>Disposal Stream:</strong> <span id="ecosort-bin">${itemKnowledge[0].bin}</span></div>
        <div class="benchmark-insight" style="margin-top: 6px;" id="ecosort-note">
          ${itemKnowledge[0].note}
        </div>
      </div>
    </div>
  `;

  const chips = mount.querySelectorAll('#ecosort-chips button');
  chips.forEach(btn => {
    btn.addEventListener('click', () => {
      chips.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      const data = itemKnowledge[idx];
      mount.querySelector('#ecosort-item-title').textContent = data.item;
      mount.querySelector('#ecosort-conf').textContent = data.conf;
      mount.querySelector('#ecosort-cat').textContent = data.cat;
      mount.querySelector('#ecosort-bin').textContent = data.bin;
      mount.querySelector('#ecosort-note').textContent = data.note;
    });
  });
}

// ==========================================================================
// 12c. INTERACTIVE GLITRAI ASYNC LIFECYCLE WIDGET
// ==========================================================================
function initGlitrAiLifecycleWidget(targetEl) {
  const mount = targetEl || document.getElementById('glitrai-lifecycle-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="matrix-chart-card">
      <div class="chart-header">
        <span class="chart-title"><i class="fas fa-cogs"></i> Asynchronous LLM Job Lifecycle Simulator</span>
      </div>
      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        <button type="button" class="btn-primary" id="btn-trigger-glitrai" style="padding: 7px 16px; font-size: 0.8125rem;">
          <i class="fas fa-play"></i> Run Async Generation Job
        </button>
        <button type="button" class="btn-secondary" id="btn-trigger-fallback" style="padding: 7px 14px; font-size: 0.8125rem;">
          Simulate Rate-Limit Fallback
        </button>
      </div>
      <div class="terminal-window" style="box-shadow: none;">
        <div class="terminal-body" id="glitrai-term-body" style="max-height: 180px;">
          <div class="term-line term-muted">Click "Run Async Generation Job" to trace the FastAPI AsyncIO state machine.</div>
        </div>
      </div>
    </div>
  `;

  const termBody = mount.querySelector('#glitrai-term-body');
  const runBtn = mount.querySelector('#btn-trigger-glitrai');
  const fallbackBtn = mount.querySelector('#btn-trigger-fallback');

  const executePipeline = (isFallback = false) => {
    if (!termBody) return;
    termBody.innerHTML = '';

    const steps = isFallback ? [
      { text: '[POST /api/v1/generate] Request: "Solar Wireless Headphones Campaign"', type: 'cmd', delay: 100 },
      { text: '➔ State: PENDING (Job UUID: 4f8b2e1a-9c3d-4e5f)', type: 'muted', delay: 350 },
      { text: '⚡ Groq API Rate Limit: 429 Too Many Requests detected', type: 'warn', delay: 700 },
      { text: '🛡️ Fallback Activated: Rerouting prompt to local lightweight cache...', type: 'warn', delay: 1100 },
      { text: '➔ State: PROCESSING (Image generation dispatched to secondary replica)', type: 'muted', delay: 1500 },
      { text: '✓ State: COMPLETED (Payload cached in PostgreSQL in 1.84s)', type: 'success', delay: 1950 }
    ] : [
      { text: '[POST /api/v1/generate] Request: "Next-Gen Data Pipeline Campaign"', type: 'cmd', delay: 100 },
      { text: '➔ State: PENDING (Job UUID: a91b0c72-33d8-4f1b)', type: 'muted', delay: 350 },
      { text: '➔ State: PROCESSING (FastAPI BackgroundTask dequeued on worker)', type: 'muted', delay: 700 },
      { text: '⚡ Groq LLM: Generating 3-tier marketing copy & visual prompt keywords...', type: 'muted', delay: 1100 },
      { text: '⚡ Pollinations API: Synthesizing image from visual prompt...', type: 'muted', delay: 1550 },
      { text: '✓ State: COMPLETED (Asset stored; client poll returned 200 OK)', type: 'success', delay: 2000 }
    ];

    steps.forEach(s => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `term-line ${s.type === 'cmd' ? 'term-cmd' : s.type === 'success' ? 'term-success' : s.type === 'warn' ? 'term-warn' : 'term-muted'}`;
        line.textContent = s.text;
        termBody.appendChild(line);
        termBody.scrollTop = termBody.scrollHeight;
      }, s.delay);
    });
  };

  if (runBtn) runBtn.addEventListener('click', () => executePipeline(false));
  if (fallbackBtn) fallbackBtn.addEventListener('click', () => executePipeline(true));
}

// ==========================================================================
// 12d. INTERACTIVE PRICEFLOW MOVING-AVERAGE WIDGET
// ==========================================================================
function initPriceFlowWidget(targetEl) {
  const mount = targetEl || document.getElementById('priceflow-widget-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="matrix-chart-card">
      <div class="chart-header">
        <span class="chart-title"><i class="fas fa-tag"></i> PriceFlow Moving-Average Threshold Simulator</span>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-cobalt);">Tracked Item: Sony WH-1000XM5</span>
      </div>
      <div class="churn-slider-row" style="margin-bottom: 12px;">
        <div class="churn-slider-label">
          <span>Alert Trigger Threshold (% below 30-day Moving Avg)</span>
          <span id="price-threshold-val">15% Drop</span>
        </div>
        <input type="range" class="churn-range-input" id="price-threshold-slider" min="5" max="30" value="15">
      </div>
      <svg class="benchmark-svg-container" viewBox="0 0 460 110" preserveAspectRatio="none">
        <line x1="40" y1="20" x2="450" y2="20" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
        <line x1="40" y1="60" x2="450" y2="60" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
        <line x1="40" y1="100" x2="450" y2="100" stroke="var(--border-hairline)" stroke-dasharray="3 3" />
        <text x="32" y="24" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">$400</text>
        <text x="32" y="64" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">$350</text>
        <text x="32" y="104" font-size="9" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">$300</text>

        <!-- 30-Day Moving Average Line (Dashed Slate) -->
        <path d="M 60,35 Q 160,38 260,42 T 440,40" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 4" />
        
        <!-- Live Price Curve (Solid Cobalt) -->
        <path d="M 60,35 L 120,35 L 180,48 L 240,45 L 300,75 L 360,78 L 440,55" fill="none" stroke="var(--accent-cobalt)" stroke-width="2.5" />
        
        <!-- Detected Drop Marker at Day 22 ($325) -->
        <circle cx="300" cy="75" r="4.5" fill="var(--accent-amber)" />
        <text x="300" y="93" font-size="9" fill="var(--accent-amber)" font-weight="bold" text-anchor="middle" font-family="var(--font-mono)">$325 (-18.7%)</text>
      </svg>
      <div class="benchmark-insight" id="priceflow-alert-insight">
        <strong>Alert Evaluation:</strong> Price drop of <strong>18.7%</strong> exceeds your 15% threshold! Automated webhook dispatch triggered.
      </div>
    </div>
  `;

  const slider = mount.querySelector('#price-threshold-slider');
  const valText = mount.querySelector('#price-threshold-val');
  const insight = mount.querySelector('#priceflow-alert-insight');

  if (!slider) return;

  slider.addEventListener('input', () => {
    const thresh = parseInt(slider.value, 10);
    if (valText) valText.textContent = `${thresh}% Drop`;
    if (insight) {
      if (thresh <= 18) {
        insight.innerHTML = `<strong>Alert Triggered:</strong> Empirical drop of <strong>18.7%</strong> exceeds the <strong>${thresh}%</strong> threshold. Legitimate discount verified against 30-day baseline.`;
      } else {
        insight.innerHTML = `<strong>Alert Suppressed:</strong> Drop of 18.7% does not meet strict <strong>${thresh}%</strong> threshold. Filtered out to prevent notification noise.`;
      }
    }
  });
}

// ==========================================================================
// 13. DEDICATED CASE STUDY PAGE DYNAMIC RENDERER
// ==========================================================================
function initCaseStudyPage() {
  const csTitleEl = document.getElementById('cs-title');
  if (!csTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  let studyId = urlParams.get('id');

  // If no query parameter, check URL path (e.g. /projects/aiet-unisphere)
  if (!studyId) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const last = parts.pop() || '';
    if (last && last !== 'case-study.html' && last !== 'case-study') {
      studyId = last.replace('.html', '');
    }
  }

  if (!studyId) studyId = 'aiet-unisphere';
  if (studyId === 'dense-matrix-multiplication') studyId = 'dense-matrix';
  if (studyId === 'glitrai-content-engine') studyId = 'glitrai';

  let study = CASE_STUDIES[studyId] || CASE_STUDIES['aiet-unisphere'];

  // Update HTML Title & Meta
  document.title = `${study.title} — Rakesh G R | AI Engineering Case Study`;

  csTitleEl.textContent = study.title;
  const roleTagEl = document.getElementById('cs-role-tag');
  if (roleTagEl) roleTagEl.textContent = study.roleTag;

  const overviewEl = document.getElementById('cs-overview');
  if (overviewEl) overviewEl.textContent = study.overview;

  const stackContainer = document.getElementById('cs-stack-pills');
  if (stackContainer) {
    stackContainer.innerHTML = study.stack.map(s => `<span class="stack-pill">${s}</span>`).join('');
  }

  const repoBtn = document.getElementById('cs-repo-btn');
  if (repoBtn) repoBtn.href = study.repoUrl;

  const demoBtn = document.getElementById('cs-demo-btn');
  if (demoBtn) {
    if (study.liveUrl && study.liveUrl !== study.repoUrl) {
      demoBtn.href = study.liveUrl;
      demoBtn.style.display = 'inline-flex';
    } else {
      demoBtn.style.display = 'none';
    }
  }

  // Populate Structured Sections
  const problemEl = document.getElementById('cs-problem-text');
  if (problemEl) problemEl.textContent = study.problem;

  const archEl = document.getElementById('cs-architecture-text');
  if (archEl) archEl.textContent = study.architecture;

  // Engineering Decisions
  const decisionsContainer = document.getElementById('cs-decisions-list');
  if (decisionsContainer && study.engineeringDecisions) {
    decisionsContainer.innerHTML = study.engineeringDecisions.map(d => `
      <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cobalt); margin-bottom: 12px;">
        <strong style="color: var(--text-ink); font-size: 0.9375rem; display: block; margin-bottom: 4px;">${d.title}</strong>
        <p style="font-size: 0.875rem; color: var(--text-body); margin: 0; line-height: 1.55;">${d.rationale}</p>
      </div>
    `).join('');
  }

  // Implemented Features
  const featuresContainer = document.getElementById('cs-features-list');
  if (featuresContainer && study.features) {
    featuresContainer.innerHTML = study.features.map(f => `<li>${f}</li>`).join('');
  }

  const contribList = document.getElementById('cs-contributions-list');
  if (contribList) {
    contribList.innerHTML = study.contributions.map(c => `<li>${c}</li>`).join('');
  }

  const resultsList = document.getElementById('cs-results-list');
  if (resultsList) {
    resultsList.innerHTML = study.results.map(r => `<li><strong>${r}</strong></li>`).join('');
  }

  const limitationsEl = document.getElementById('cs-limitations-text');
  if (limitationsEl) limitationsEl.textContent = study.limitations;

  // Mount Tailored Interactive Visualizer
  const vizMount = document.getElementById('cs-interactive-visualization-mount');
  if (vizMount) {
    vizMount.innerHTML = '';
    if (study.vizType === 'rls') initArchitectureVisualizer(vizMount);
    else if (study.vizType === 'terminal') initTerminalSimulator(vizMount);
    else if (study.vizType === 'benchmark') initMatrixBenchmarkChart(vizMount);
    else if (study.vizType === 'churn') initChurnInteractiveWidget(vizMount);
    else if (study.vizType === 'waste') initWasteCategoryInspector(vizMount);
    else if (study.vizType === 'ecosort') initEcoSortAssistantWidget(vizMount);
    else if (study.vizType === 'glitrai') initGlitrAiLifecycleWidget(vizMount);
    else if (study.vizType === 'priceflow') initPriceFlowWidget(vizMount);
  }

  // Sidebar Switcher Active State
  const sidebarLinks = document.querySelectorAll('.case-study-sidebar a[href*="id="], .case-study-sidebar a[href*="/projects/"]');
  sidebarLinks.forEach(link => {
    if (link.href.includes(`id=${studyId}`) || link.href.includes(`/projects/${studyId}`)) {
      link.style.fontWeight = '700';
      link.style.color = 'var(--accent-cobalt)';
    }
  });

  // Dynamic In-Page Section Highlight Observer for Quick Navigation
  const sectionNavLinks = document.querySelectorAll('.case-study-sidebar-nav a[href^="#"]');
  if (sectionNavLinks.length > 0) {
    const sections = Array.from(sectionNavLinks)
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 140;
      let currentSection = null;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPos) {
          currentSection = section;
        }
      });

      if (!currentSection && sections.length > 0) {
        currentSection = sections[0];
      }

      sectionNavLinks.forEach(link => {
        if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    // Smooth anchor click handling that works seamlessly with Lenis or native scroll
    sectionNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const lenis = window.getLenis ? window.getLenis() : null;
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -90, duration: 0.8 });
          } else {
            const top = targetEl.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: 'smooth' });
          }
          history.pushState(null, null, targetId);
        }
      });
    });
  }

  // Previous & Next Pagination
  const studyKeys = ['aiet-unisphere', 'yamlanchor', 'dense-matrix', 'customer-churn', 'garbage-classification', 'ai-ecosort', 'glitrai', 'priceflow-agent'];
  const currentIndex = studyKeys.indexOf(studyId);
  const prevIndex = (currentIndex - 1 + studyKeys.length) % studyKeys.length;
  const nextIndex = (currentIndex + 1) % studyKeys.length;

  const prevId = studyKeys[prevIndex];
  const nextId = studyKeys[nextIndex];

  const prevBtn = document.getElementById('cs-prev-btn');
  const prevTitle = document.getElementById('cs-prev-title');
  if (prevBtn && prevTitle && CASE_STUDIES[prevId]) {
    prevBtn.href = `case-study.html?id=${prevId}`;
    prevTitle.textContent = CASE_STUDIES[prevId].title.split('—')[0].trim();
  }

  const nextBtn = document.getElementById('cs-next-btn');
  const nextTitle = document.getElementById('cs-next-title');
  if (nextBtn && nextTitle && CASE_STUDIES[nextId]) {
    nextBtn.href = `case-study.html?id=${nextId}`;
    nextTitle.textContent = CASE_STUDIES[nextId].title.split('—')[0].trim();
  }
}

// ==========================================================================
// 14. PROJECT DIRECTORY SEARCH & CATEGORY FILTERS
// ==========================================================================
function initProjectCategoryFilters() {
  const filterBar = document.getElementById('project-filter-bar');
  const searchInput = document.getElementById('project-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const matchCounter = document.getElementById('projects-match-counter');
  const emptyState = document.getElementById('projects-empty-state');

  if (!filterBar) return;

  const filterBtns = filterBar.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  const applyFilters = () => {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
    }

    const items = document.querySelectorAll('.project-item, .featured-project-card');
    let visibleCount = 0;
    let totalCount = 0;

    items.forEach(item => {
      if (!item.hasAttribute('data-category')) return;
      totalCount++;

      const itemCat = item.getAttribute('data-category') || '';
      const catList = itemCat.toLowerCase().split(/\s+/);
      const keywords = (item.getAttribute('data-keywords') || '').toLowerCase();
      const text = item.textContent.toLowerCase();

      const matchesCat = activeFilter === 'all' ||
                         catList.includes(activeFilter) ||
                         (activeFilter === 'ai-ml' && (catList.includes('ai-ml') || catList.includes('ml'))) ||
                         (activeFilter === 'systems' && (catList.includes('systems') || catList.includes('devops'))) ||
                         (activeFilter === 'web' && (catList.includes('web') || catList.includes('fullstack') || catList.includes('frontend'))) ||
                         (activeFilter === 'backend' && (catList.includes('backend') || catList.includes('api')));

      const matchesSearch = query === '' || keywords.includes(query) || text.includes(query);

      if (matchesCat && matchesSearch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (matchCounter) {
      matchCounter.innerHTML = `Showing <strong>${visibleCount}</strong> of <strong>${totalCount}</strong> projects`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      applyFilters();
      searchInput.focus();
    });
  }

  const resetBtn = document.getElementById('reset-projects-filter');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilter = 'all';
      filterBtns.forEach(b => {
        if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });
      if (searchInput) searchInput.value = '';
      applyFilters();
    });
  }
}

// ==========================================================================
// 15. INTERACTIVE SKILLS CAPABILITY MAP & DOMAIN SWITCHER
// ==========================================================================
function initSkillsFilter() {
  const filterBar = document.getElementById('skills-filter-bar');
  const searchInput = document.getElementById('skills-search-input');
  const clearBtn = document.getElementById('skills-clear-search');
  const statusBtns = document.querySelectorAll('button[data-skill-status]');
  const catBtns = filterBar ? filterBar.querySelectorAll('button[data-skill-cat]') : [];
  const groups = document.querySelectorAll('.capability-group[data-skill-group]');
  const allItems = document.querySelectorAll('.capability-item');

  if (!groups.length && !allItems.length) return;

  let activeCat = 'all';
  let activeStatus = 'all';
  let searchQuery = '';

  function applySkillsFilters() {
    let matchCount = 0;

    groups.forEach(group => {
      const groupCat = group.getAttribute('data-skill-group');
      const items = group.querySelectorAll('.capability-item');
      let visibleInGroup = 0;

      // Check category match
      const catMatches = (activeCat === 'all' || groupCat === activeCat);

      if (!catMatches) {
        group.style.display = 'none';
        return;
      }

      items.forEach(item => {
        const itemStatus = item.getAttribute('data-status') || 'shipped';
        const keywords = (item.getAttribute('data-keywords') || '').toLowerCase();
        const textContent = item.textContent.toLowerCase();

        const statusMatches = (activeStatus === 'all' || itemStatus === activeStatus);
        const searchMatches = !searchQuery || keywords.includes(searchQuery) || textContent.includes(searchQuery);

        if (statusMatches && searchMatches) {
          item.style.display = '';
          visibleInGroup++;
          matchCount++;
        } else {
          item.style.display = 'none';
        }
      });

      group.style.display = visibleInGroup > 0 ? '' : 'none';
    });

    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'inline-flex' : 'none';
    }
  }

  // Category buttons
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-skill-cat') || 'all';
      applySkillsFilters();
    });
  });

  // Status buttons
  statusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      statusBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStatus = btn.getAttribute('data-skill-status') || 'all';
      applySkillsFilters();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applySkillsFilters();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        applySkillsFilters();
        searchInput.focus();
      }
    });
  }
}

function initSkillsCapabilityMap() {
  const skillItems = document.querySelectorAll('.capability-item');
  if (!skillItems.length) return;

  // Add click listener to show architectural role modal/toast or open evidence link
  skillItems.forEach(item => {
    const nameEl = item.querySelector('.cap-name');
    const descEl = item.querySelector('.cap-desc');
    const tagEl = item.querySelector('.cap-evidence-tag');
    const linkEl = item.querySelector('.cap-evidence-tag a');

    if (nameEl) {
      item.style.cursor = 'pointer';
      item.setAttribute('title', linkEl ? 'Click to view project architecture & case study' : 'Click to view architectural context & project evidence');

      item.addEventListener('click', (e) => {
        // If clicking directly on or inside an anchor tag, let the browser handle standard navigation
        if (e.target.closest('a')) return;

        // If the card has a direct case study link and user clicked the card body, navigate to it
        if (linkEl && linkEl.href) {
          window.location.href = linkEl.href;
          return;
        }

        const name = nameEl.textContent.trim();
        const tag = tagEl ? tagEl.textContent.trim() : '';

        // Display brief spotlight feedback
        const toast = document.getElementById('copy-toast');
        if (toast) {
          toast.innerHTML = `<i class="fas fa-check-circle"></i> <strong>${name}</strong>: ${tag}`;
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2500);
        }
      });
    }
  });
}

// ==========================================================================
// 16. CASE STUDY SLIDE-OVER MODAL DRAWER
// ==========================================================================
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
          <h3>01 / The Engineering Challenge</h3>
          <p>${study.overview}</p>
          <p style="margin-top: 8px;"><strong>Problem Framing:</strong> ${study.problem}</p>
        </div>

        <div class="case-study-section">
          <h3>02 / Technical Architecture</h3>
          <p>${study.architecture}</p>
        </div>

        <div class="case-study-section">
          <h3>03 / Direct Contributions</h3>
          <ul>
            ${study.contributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-section">
          <h3>04 / Verified Results & Metrics</h3>
          <ul>
            ${study.results.map(r => `<li><strong>${r}</strong></li>`).join('')}
          </ul>
        </div>

        <div class="case-study-section">
          <h3>05 / Honest Limitations & Roadmap</h3>
          <p>${study.limitations}</p>
        </div>

        <div class="case-study-actions">
          <a href="case-study.html?id=${studyKey}" class="btn-primary">
            <i class="fas fa-external-link-alt"></i> Full Deep Dive Page
          </a>
          <a href="${study.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <i class="fab fa-github"></i> Inspect Repository
          </a>
          <button type="button" class="btn-secondary" id="modal-inner-close">Close</button>
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

// ==========================================================================
// 17. CONTACT CHANNELS (Direct Email, LinkedIn, GitHub)
// ==========================================================================
function initContactForm() {
  // Direct message form has been cleanly retired in favor of verified direct channels:
  // Email: rakeshgr223@gmail.com, LinkedIn: rakeshgr18, GitHub: Rakeshgr962
  const form = document.getElementById('contact-form');
  if (!form) return;
  // If legacy form element exists in any cached version, prevent submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

// ==========================================================================
// 18. COPY EMAIL TO CLIPBOARD WITH TOAST
// ==========================================================================
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('copy-toast');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = 'rakeshgr223@gmail.com';
    try {
      await navigator.clipboard.writeText(emailToCopy);
      showToast(`Email copied to clipboard (${emailToCopy})`);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = emailToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(`Email copied to clipboard (${emailToCopy})`);
    }
  });

  function showToast(msg) {
    if (!toast) return;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2400);
  }
}

// ==========================================================================
// 19. FLOATING BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const lenis = window.getLenis ? window.getLenis() : null;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.9, immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ==========================================================================
// 20. RESUME DOWNLOAD HANDLER
// ==========================================================================
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

// ==========================================================================
// 21. SCROLL REVEAL & COUNTER ANIMATIONS
// ==========================================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        const counters = entry.target.querySelectorAll('.counter-num');
        counters.forEach(counter => {
          if (!counter.dataset.animated) {
            counter.dataset.animated = 'true';
            const target = parseInt(counter.getAttribute('data-target'), 10);
            animateCounter(counter, target);
          }
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
  let count = 0;
  const speed = 25;
  const increment = Math.max(1, Math.ceil(target / speed));

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      el.textContent = `${target}%`;
      clearInterval(timer);
    } else {
      el.textContent = `${count}%`;
    }
  }, 28);
}
