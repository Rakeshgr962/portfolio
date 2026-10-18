const fs = require('fs');
const path = require('path');

const CLIENT_DIR = path.join(__dirname, '..', 'client');
const PROJECTS_DIR = path.join(CLIENT_DIR, 'projects');

if (!fs.existsSync(PROJECTS_DIR)) {
  fs.mkdirSync(PROJECTS_DIR, { recursive: true });
}

// Copy projects.html to projects/index.html so /projects/ opens directly
const projectsHtml = fs.readFileSync(path.join(CLIENT_DIR, 'projects.html'), 'utf8');
const adjustedProjectsIndex = projectsHtml
  .replace(/href="kage-assets\//g, 'href="../kage-assets/')
  .replace(/src="kage-assets\//g, 'src="../kage-assets/')
  .replace(/href="style\.css"/g, 'href="../style.css"')
  .replace(/href="motion-system\.css"/g, 'href="../motion-system.css"')
  .replace(/src="motion-core\.js"/g, 'src="../motion-core.js"')
  .replace(/src="app\.js"/g, 'src="../app.js"')
  .replace(/src="assets\//g, 'src="../assets/')
  .replace(/href="assets\//g, 'href="../assets/')
  .replace(/href="index\.html"/g, 'href="../index.html"')
  .replace(/href="about\.html"/g, 'href="../about.html"')
  .replace(/href="skills\.html"/g, 'href="../skills.html"')
  .replace(/href="projects\.html"/g, 'href="../projects.html"')
  .replace(/href="experience\.html"/g, 'href="../experience.html"')
  .replace(/href="contact\.html"/g, 'href="../contact.html"')
  .replace(/href="case-study\.html\?id=([^"]+)"/g, 'href="$1.html"');

fs.writeFileSync(path.join(PROJECTS_DIR, 'index.html'), adjustedProjectsIndex, 'utf8');
console.log('Created client/projects/index.html');

// Read CASE_STUDIES from app.js
const appJsContent = fs.readFileSync(path.join(CLIENT_DIR, 'app.js'), 'utf8');

// Project list in chronological order
const projectKeys = [
  'aiet-unisphere',
  'yamlanchor',
  'dense-matrix',
  'customer-churn',
  'garbage-classification',
  'ai-ecosort',
  'glitrai',
  'priceflow-agent'
];

const projectSlugs = {
  'aiet-unisphere': 'aiet-unisphere',
  'yamlanchor': 'yamlanchor',
  'dense-matrix': 'dense-matrix-multiplication',
  'customer-churn': 'customer-churn',
  'garbage-classification': 'garbage-classification',
  'ai-ecosort': 'ai-ecosort',
  'glitrai': 'glitrai',
  'priceflow-agent': 'priceflow-agent'
};

const projectNames = {
  'aiet-unisphere': 'AIET-UniSphere',
  'yamlanchor': 'YamlAnchor',
  'dense-matrix': 'Dense Matrix C11',
  'customer-churn': 'Customer Churn API',
  'garbage-classification': 'Waste Vision',
  'ai-ecosort': 'AI-EcoSort (1M1B)',
  'glitrai': 'GlitrAI Content Engine',
  'priceflow-agent': 'PriceFlow-Agent'
};

// Extract metadata for each project using app.js evaluations
// We can require app.js mock or define structured dictionary
const CASE_STUDIES_DATA = {
  'aiet-unisphere': {
    slug: 'aiet-unisphere',
    title: 'AIET-UniSphere — Campus Academic Platform',
    roleTag: 'Lead Full-Stack & Security Architecture',
    repoUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    liveUrl: 'https://github.com/Aiet-Unisphere/AIET-UniSphere',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase Auth', 'PostgreSQL RLS', 'Oxlint CI'],
    vizType: 'rls',
    overview: "A role-aware campus academic platform engineered for Alva's Institute of Engineering and Technology (AIET). Replaces fragmented institutional portals with a unified, role-segregated environment where data isolation is enforced at the database layer via PostgreSQL Row Level Security (RLS) policies evaluated on authenticated JWT sessions.",
    problem: 'Academic institutions frequently operate on fragmented software where students, faculty, heads of departments (HOD), and administrators require strictly partitioned views of academic records, attendance, and internal evaluations. Standard application-level RBAC is vulnerable to logic bugs in API middleware proxies, risking unauthorized data exposure.',
    architecture: 'Built using React 19 and TypeScript with Vite on the client, paired with Supabase as the backend data layer. Rather than deploying and maintaining a fragile custom Node/Express middleware server that proxies database queries, authorization rules reside directly in PostgreSQL RLS policies evaluated on every authenticated JWT session.',
    decisions: [
      { title: 'Database-Enforced Authorization over API Middleware', rationale: 'Application-level authorization checks are susceptible to developer oversights in route handlers. Embedding security rules directly in PostgreSQL RLS policies guarantees that even if a frontend query is modified, the database rejects unauthorized reads and mutations.' },
      { title: 'Role-Segregated Client Workspace Directory Structure', rationale: 'Separated institutional workspaces into dedicated directories (src/student, src/faculty, src/hod, src/admin). This isolates component dependencies and prevents accidental permission leaks across institutional roles.' },
      { title: 'Automated Migration Versioning & Oxlint CI', rationale: 'Schema mutations are codified into versioned SQL files, ensuring reproducible environments across team contributors and zero configuration drift.' }
    ],
    features: [
      'Four distinct institutional dashboards: Student, Faculty, HOD, and Admin.',
      'Database-enforced Row Level Security (RLS) evaluated on JWT claims.',
      'Attendance tracking and Continuous Internal Evaluation (CIE) record management.',
      'Department-wide analytics and approval queues for department heads.',
      'Responsive, carbon-conscious interface with strict accessibility standards.'
    ],
    contributions: [
      'Architected the role-based directory structure (src/admin/, src/faculty/, src/hod/, src/student/) and shared services layer.',
      'Implemented Supabase Auth integration with role-specific claims embedded directly into session JWTs.',
      'Authored database migrations and PostgreSQL Row Level Security (RLS) policies guaranteeing that students can never mutate grade records or view peers\' private evaluation metrics.',
      'Configured automated CI workflows and strict Oxlint linting pipelines for code quality enforcement.'
    ],
    results: [
      '100% Database-enforced authorization: Zero vulnerability to API proxy authorization bypass.',
      'Multi-role segregation: Distinct, custom dashboard views for 4 institutional roles.',
      'Zero custom server overhead: Reduced operational costs, deployment maintenance, and cold-start latency.'
    ],
    limitations: 'Advanced ML-based student risk forecasting and automated advising features remain on the architectural roadmap; current deployment focuses purely on rock-solid identity, permissions, and institutional operations.'
  },

  'yamlanchor': {
    slug: 'yamlanchor',
    title: 'YamlAnchor — Local CI/CD Pipeline Simulator',
    roleTag: 'Developer Tooling · Go Backend & Container Orchestration',
    repoUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    liveUrl: 'https://github.com/Rakeshgr962/YamlAnchor',
    stack: ['Go 1.22', 'Next.js App Router', 'TypeScript', 'Docker SDK', 'AST Engine', 'NDJSON Stream'],
    vizType: 'terminal',
    overview: 'A high-performance developer tool that eliminates the painful "commit-push-fail-tweak-push-fail" cycle of debugging GitHub Actions remotely. Scans repositories via Abstract Syntax Tree (AST) analysis, synthesizes valid CI workflows, and dry-runs them in local Docker containers with live streaming logs.',
    problem: 'Developers routinely push 10+ throwaway git commits just to debug syntax errors, environment misconfigurations, and broken shell commands in GitHub Actions workflow YAML files, wasting cloud build minutes and polluting repository histories.',
    architecture: 'Hybrid architecture combining a high-performance Go backend with a modern Next.js Studio UI. The Go backend parses codebase dependencies (Go, TypeScript, Python) using language AST parsers, synthesizes workflow steps, orchestrates isolated Docker container runs via the Docker Engine API, and streams NDJSON log events to the UI.',
    decisions: [
      { title: 'Native Go AST Parser over Brittle Regex Matching', rationale: 'Regex scanning frequently fails on multiline scripts and nested dependencies. Native AST parsing parses Go mod files, package.json scripts, and Python requirements deterministically.' },
      { title: 'Direct Docker Engine SDK Integration', rationale: 'Interfacing directly with the Docker socket via the official Go SDK allows precise control over container lifecycle, volume mounts, resource quotas, and streaming stdout/stderr buffers.' },
      { title: 'Client-Side NDJSON Event Streaming', rationale: 'Streaming JSON logs line-by-line enables real-time terminal rendering in Next.js without websocket connection overhead.' }
    ],
    features: [
      'AST-driven repository dependency analysis across Go, TypeScript, and Python.',
      'Automated GitHub Actions workflow YAML synthesis based on detected project test suites.',
      'Local Docker runner simulation reproducing standard GitHub Actions Ubuntu environments.',
      'Proactive secret interception and environment variable mocking.',
      'Intelligent self-healing engine suggesting indentation and syntax patches.'
    ],
    contributions: [
      'Built multi-language AST codebase scanner in Go (backend/pkg/simulator) to automatically discover project test commands and dependency manifests.',
      'Engineered Docker container execution engine that simulates GitHub Actions runner environments locally via the Docker Engine SDK.',
      'Implemented local secret scanner and mock injector (backend/pkg/secrets) preventing leaked production keys during testing.',
      'Constructed Next.js App Router Studio interface with real-time NDJSON log streaming and intelligent error remediation suggestions.'
    ],
    results: [
      'Zero remote test commits: Developers validate complex multi-stage pipelines entirely on localhost.',
      'Sub-second AST analysis and pipeline synthesis across multi-language monorepos.',
      'Proactive secret interception before code ever touches a remote Git origin.'
    ],
    limitations: 'Self-healing engine currently provides structured error analysis and remediation suggestions; fully autonomous YAML patch application is currently under validation.'
  },

  'dense-matrix': {
    slug: 'dense-matrix-multiplication',
    title: 'Dense Matrix Multiplication — Hardware Cache Blocking & OpenMP',
    roleTag: 'Systems Engineering · High-Performance Computing',
    repoUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    liveUrl: 'https://github.com/Rakeshgr962/Dense-Matrix-Multiplication',
    stack: ['C11', 'OpenMP collapse(2)', 'Python 3', 'GCC Optimization', 'Hardware Cache Locality', 'posix_memalign'],
    vizType: 'benchmark',
    overview: 'An empirical high-performance computing study investigating hardware cache hierarchy utilization, loop reordering, cache tiling (blocking), and OpenMP parallelization on dense matrix multiplication compute kernels.',
    problem: 'Naive matrix multiplication (ijk order) exhibits disastrous cache eviction behavior due to column-wise stride access in the second matrix, causing continuous L1/L2 cache misses that bottleneck CPU execution on modern architectures.',
    architecture: 'Implemented 6 distinct C11 compute kernels compiled with GCC -O3 -fopenmp -march=native and 64-byte aligned memory allocation (posix_memalign). Python tooling detects CPU cache topology (L1d, L2, L3 cache sizes) and orchestrates repeated benchmark trials with warmups, median filtering, and numerical error bounds checking.',
    decisions: [
      { title: 'Loop Permutation (ikj over ijk) for Spatial Locality', rationale: 'Converting column-strided memory reads into continuous row-wise reads allows the hardware prefetcher to load contiguous cache lines, yielding an immediate ~12.6x speedup before any multithreading.' },
      { title: '64-Byte Memory Alignment via posix_memalign', rationale: 'Aligning matrix data buffers with CPU 64-byte cache lines prevents split-line access penalties and sets up optimal conditions for SIMD vector registers.' },
      { title: 'Cache Tile Size Sizing (64 & 128 elements)', rationale: 'Blocking submatrices to dimensions that fit within the 32KB/48KB L1 data cache ensures zero cache line evictions during inner dot products.' }
    ],
    features: [
      'Six C11 compute kernels spanning naive, loop-reordered, tiled, and parallel OpenMP algorithms.',
      'Automated Python benchmark harness recording execution times, GFLOPS, and variance.',
      'Numerical verification suite with 81 test matrices ensuring mathematical precision (ε < 10⁻⁹).',
      'Multi-core scalability analysis with OpenMP collapse(2) eliminating outer loop thread starvation.'
    ],
    contributions: [
      'Wrote optimized C11 kernels implementing naive ijk, loop-reordered ikj, cache-blocked (tiled), and OpenMP collapse(2) parallelization.',
      'Engineered automated Python benchmarking orchestrator to measure GFLOPS and CPU execution time across matrix dimensions from 256 to 2048.',
      'Built comprehensive 81-test validation suite verifying mathematical correctness against double precision error thresholds (ε < 1e-9).',
      'Authored in-depth hardware architectural analysis report correlating cache sizes with empirical GFLOPS curves.'
    ],
    results: [
      '~12.6x speedup achieved purely through loop reordering (ikj over ijk) due to continuous sequential memory access.',
      'Identified optimal cache tile sizes of 64 and 128 elements, matching CPU L1d cache boundaries.',
      'OpenMP collapse(2) achieved 46.8 GFLOPS peak throughput on large matrix dimensions (N=2048).'
    ],
    limitations: 'Benchmarked on x86_64 CPU architectures with OpenMP; AVX-512 vector intrinsic specialization is planned for future iterations.'
  },

  'customer-churn': {
    slug: 'customer-churn',
    title: 'Production Customer Churn API & ML Pipeline',
    roleTag: 'Applied Machine Learning · Production Backend',
    repoUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    liveUrl: 'https://github.com/Rakeshgr962/Customer-churn-',
    stack: ['Python', 'XGBoost', 'FastAPI', 'MLflow', 'Docker', 'Render'],
    vizType: 'churn',
    overview: 'An end-to-end applied machine learning system predicting customer attrition on the Telco dataset (7,043 records). Prioritizes strict data leakage elimination, feature preprocessing, containerized serving, and experiment tracking.',
    problem: 'Most machine learning portfolio projects rely on Kaggle notebooks that accidentally include target leakage columns (e.g. Churn Reason, Churn Category, Churn Score) leading to unrealistic 99% accuracy that crashes in real-world deployment.',
    architecture: 'Trained an XGBoost gradient boosting classifier using an 80/20 stratified split after explicitly stripping all post-event leakage columns. Served via a containerized FastAPI application with strict Pydantic schema validation, tracked using MLflow, and deployed as a reproducible Docker service on Render.',
    decisions: [
      { title: 'Explicit Purging of Post-Event Columns (Target Leakage)', rationale: 'Features recorded only after customer churn occurs (such as Churn Reason) falsely inflate model scores. Dropping them produced a defensible, production-accurate 81% accuracy model.' },
      { title: 'FastAPI Microservice with Typed Pydantic Schemas', rationale: 'Validating payload types, ranges, and missing fields at the API gateway layer prevents malformed feature vectors from reaching the trained XGBoost booster.' },
      { title: 'MLflow Experiment Run Logging', rationale: 'Logging evaluation metrics, hyperparameter iterations, and serialized model binaries ensures full lineage and reproducible deployments.' }
    ],
    features: [
      'Trained XGBoost classification pipeline with stratified cross-validation.',
      'FastAPI inference REST microservice with OpenAPI specification.',
      'Containerized Dockerfile for zero-dependency cloud deployment.',
      'Comprehensive validation metric reporting (Accuracy, Precision, Recall, F1).',
      'Interactive decision boundary simulation for tenure and monthly charge combinations.'
    ],
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
    slug: 'garbage-classification',
    title: 'EfficientNetB0 Waste Classification & AI-EcoSort',
    roleTag: 'Computer Vision · Responsible AI',
    repoUrl: 'https://github.com/Rakeshgr962/GarbageClassfication',
    liveUrl: 'https://github.com/Rakeshgr962/AI-EcoSort',
    stack: ['TensorFlow', 'EfficientNetB0', 'Gradio', 'React 19', 'TypeScript', 'Vitest'],
    vizType: 'waste',
    overview: 'A dual-tier sustainability project combining a transfer learning computer vision model for automated physical waste segregation with AI-EcoSort, an accessible web assistant developed for the 1M1B IBM SkillsBuild AI for Sustainability program.',
    problem: 'Municipal waste contamination costs millions annually. Physical recycling centers need rapid image sorting across waste types, while households need clear, honest guidance on proper disposal categories without misleading AI claims.',
    architecture: 'Computer Vision: EfficientNetB0 backbone pre-trained on ImageNet, fine-tuned with 124x124 input resolution, Global Average Pooling, Dropout (0.2), and early stopping across 6 waste categories (cardboard, glass, metal, paper, plastic, trash). Web Assistant: React 19 + TypeScript with a deterministic rule-based knowledge engine, confidence indicators, and Vitest test coverage.',
    decisions: [
      { title: 'EfficientNetB0 Pre-trained Backbone over Scratch Training', rationale: 'Compound scaling in EfficientNet achieves state-of-the-art feature representation while maintaining low parameter counts, making it ideal for rapid inference on constrained hardware.' },
      { title: 'Global Average Pooling & Dropout (0.2) Regularization', rationale: 'Replaced dense classification blocks with global average pooling to prevent overfitting on specific lighting and background variations.' },
      { title: 'Honest Responsible AI Architectural Separation', rationale: 'Strictly separated client-side image preview components from text classification rules in AI-EcoSort to eliminate false claims of on-device vision.' }
    ],
    features: [
      'Six-class deep learning classification: cardboard, glass, metal, paper, plastic, trash.',
      'Transfer learning pipeline with data augmentation and early stopping.',
      'Live interactive Gradio web demonstration for image inference.',
      'Deterministic rule engine in AI-EcoSort with disposal instructions.',
      'Vitest automated testing suite for classification certainty.'
    ],
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
  },

  'ai-ecosort': {
    slug: 'ai-ecosort',
    title: 'AI-EcoSort — Responsible Waste Classification Assistant',
    roleTag: 'Responsible AI · Full-Stack Web App',
    repoUrl: 'https://github.com/Rakeshgr962/AI-EcoSort',
    liveUrl: 'https://ai-ecosort.netlify.app',
    stack: ['React 19', 'TypeScript', 'Vite', 'Vitest', 'Responsible AI Guardrails'],
    vizType: 'ecosort',
    overview: 'A sustainable waste classification web assistant created for the 1M1B IBM SkillsBuild AI for Sustainability program. Combines deterministic rule-based classification, confidence scoring, and responsible user disclosures.',
    problem: 'Many AI applications exaggerate capabilities or fabricate high confidence scores on ambiguous inputs. Furthermore, users need clear, actionable guidance on whether an item is recyclable, compostable, or hazardous without depending on heavy cloud GPUs.',
    architecture: 'Built using React 19 + TypeScript with Vite. Implements a multi-stage deterministic classification pipeline that validates keywords against waste category databases, provides disposal instructions, and outputs transparent confidence scores with fallback uncertainty warnings.',
    decisions: [
      { title: 'Deterministic Rule Engine over Hallucinating Prompt Wrapper', rationale: 'Municipal recycling standards require strict predictability. A deterministic rule base guarantees accurate disposal instructions without random generative variance.' },
      { title: 'Transparent Uncertainty Disclosures', rationale: 'If an item contains ambiguous or multi-material components (e.g., plastic-lined paper coffee cups), the engine explicitly flags an uncertainty warning instead of guessing.' },
      { title: 'Comprehensive Vitest Test Suite', rationale: 'Codified test cases for dozens of common household items, ensuring that refactoring never breaks classification accuracy.' }
    ],
    features: [
      'Keyword-based waste categorization with instant feedback.',
      'Confidence scoring with explicit uncertainty notices.',
      'Disposal instructions aligned with international waste management standards.',
      '15+ automated unit tests in Vitest.',
      'Carbon-conscious dark UI with responsive design.'
    ],
    contributions: [
      'Built high-performance, accessible UI with carbon-conscious dark styling and responsive layouts.',
      'Engineered deterministic classification engine with explicit uncertainty handling for ambiguous inputs.',
      'Separated text classification logic from client-side image preview components (zero false computer vision claims).',
      'Wrote comprehensive unit test suite in Vitest verifying rule classifications and confidence thresholds.'
    ],
    results: [
      'Deployed live on Netlify with 100% client-side execution and zero cold-start latency.',
      'Zero false claims: Clear user disclosure on rule-based text logic vs experimental vision previews.',
      'Recognized under the 1M1B IBM SkillsBuild AI for Sustainability initiative.'
    ],
    limitations: 'Image upload currently functions as an accessible visual preview; on-device TensorFlow.js client inference is planned for future offline computer vision sorting.'
  },

  'glitrai': {
    slug: 'glitrai',
    title: 'GlitrAI Mini Content Engine — Multi-Step LLM Workflow',
    roleTag: 'AI Application Development · Asynchronous Workflows',
    repoUrl: 'https://github.com/Rakeshgr962/glitrai-mini-content-engine',
    liveUrl: 'https://github.com/Rakeshgr962/glitrai-mini-content-engine',
    stack: ['Python', 'FastAPI', 'Groq LLM', 'Pollinations AI', 'PostgreSQL / SQLite', 'AsyncIO', 'Pydantic'],
    vizType: 'glitrai',
    overview: 'A backend service demonstrating asynchronous job orchestration for multi-stage LLM text generation and AI image synthesis, with persistent job lifecycle tracking and fallback reliability.',
    problem: 'Monolithic single-shot AI prompts frequently fail or produce unstructured responses. Complex multi-modal generation (structured marketing copy paired with tailored visual assets) requires decoupled pipelines with status polling.',
    architecture: 'Engineered with FastAPI and AsyncIO. Manages generation jobs through distinct states (PENDING, PROCESSING, COMPLETED, FAILED) with database persistence. Stage 1 generates structured topic outlines via Groq API; Stage 2 distills visual prompts; Stage 3 orchestrates image synthesis with retry logic.',
    decisions: [
      { title: 'FastAPI BackgroundTasks with Persistent State Machine', rationale: 'Long-running AI model synthesis must never block HTTP threads. Immediate return of a Job UUID with client status polling delivers an optimal user experience.' },
      { title: 'Decoupled Two-Stage Prompt Distillation', rationale: 'Separating marketing copy generation from visual prompt generation allows tailored optimization for both LLM text reasoning and diffusion image synthesis.' },
      { title: 'Automatic Fallback Retry Logic', rationale: 'External AI endpoints frequently experience transient rate limits or 503 errors. Built-in exponential backoff and fallback endpoints ensure high pipeline resilience.' }
    ],
    features: [
      'Asynchronous job orchestration engine with UUID job tracking.',
      'Multi-stage generation workflow (copy writing + visual prompt extraction + image synthesis).',
      'Persistent job status database schema with Pydantic serialization.',
      'Automated rate-limit retry with provider fallback.',
      'OpenAPI interactive Swagger documentation.'
    ],
    contributions: [
      'Architected non-blocking asynchronous job pipeline in FastAPI handling concurrent generation requests.',
      'Engineered robust error-handling and fallback retry mechanisms for external AI model endpoints.',
      'Designed SQLite/PostgreSQL schema for persistent job status, input prompts, and generated output URLs.',
      'Implemented clean OpenAPI documentation with typed Pydantic request/response models.'
    ],
    results: [
      'Decoupled multi-stage generation architecture with deterministic job polling.',
      'Zero worker starvation: AsyncIO event loop processes API queries while generation tasks run.',
      'Complete resilience against rate limits with structured error codes and descriptive feedback.'
    ],
    limitations: 'Currently uses in-process AsyncIO tasks suitable for small-to-medium loads; Redis and Celery worker pools are planned for high-concurrency production deployments.'
  },

  'priceflow-agent': {
    slug: 'priceflow-agent',
    title: 'PriceFlow-Agent — Dynamic Pricing Foundation',
    roleTag: 'AI Systems Foundation · Backend & Database',
    repoUrl: 'https://github.com/Rakeshgr962/PriceFlow-Agent',
    liveUrl: 'https://github.com/Rakeshgr962/PriceFlow-Agent',
    stack: ['Python', 'FastAPI', 'Supabase PostgreSQL', 'Redis', 'Docker Compose', 'Pytest', 'SQLAlchemy'],
    vizType: 'priceflow',
    overview: 'Backend architecture and relational database foundation for automated product price monitoring, historical trend analysis, and price drop notifications.',
    problem: 'E-commerce price volatility makes it challenging for consumers and purchasing agents to identify genuine discounts versus artificial markups before sales events.',
    architecture: 'Built with Python and FastAPI, backed by Supabase PostgreSQL. Features modular scrapers, structured data models for historical price snapshots, and alert trigger rules based on statistical price moving averages.',
    decisions: [
      { title: 'Normalized Relational Schema for Time-Series Price Points', rationale: 'Separating product metadata from chronological price logs allows efficient SQL indexing on timestamp and product_id for fast moving-average calculations.' },
      { title: 'Moving-Average Thresholds over Raw Dollar Drops', rationale: 'Raw price drops can be misleading due to baseline inflation. Comparing against a 30-day statistical moving average prevents deceptive markdown notifications.' },
      { title: 'Docker Compose Local Infrastructure', rationale: 'Bundling FastAPI, PostgreSQL, and Redis in a reproducible Compose environment simplifies onboarding and local testing.' }
    ],
    features: [
      'FastAPI REST endpoints for product registration and price observation.',
      'Supabase PostgreSQL relational schema with indexed historical price logs.',
      'Docker Compose orchestration for multi-container local execution.',
      'Pytest test suite validating data normalization and database transactions.',
      'Statistical threshold alert evaluation algorithm.'
    ],
    contributions: [
      'Designed PostgreSQL schema on Supabase for products, historical price logs, and user alerts.',
      'Built REST API endpoints for product registration, tracking status, and price history retrieval.',
      'Created automated integration test suite with Pytest validating price parsing and database writes.',
      'Documented modular architecture enabling plug-and-play scraping adapters.'
    ],
    results: [
      'Clean, maintainable backend foundation with 100% passing test coverage on core price calculation logic.',
      'Accurate historical tracking preventing deceptive discount traps.',
      'Strict schema validation preventing corrupted data ingestion.'
    ],
    limitations: 'Currently focused on core API and database architecture; autonomous LLM price trend summarization and automated email webhooks are in active development.'
  }
};

// Generate each HTML file
projectKeys.forEach((key, idx) => {
  const p = CASE_STUDIES_DATA[key];
  const filename = `${p.slug}.html`;
  const prevIdx = (idx - 1 + projectKeys.length) % projectKeys.length;
  const nextIdx = (idx + 1) % projectKeys.length;

  const prevKey = projectKeys[prevIdx];
  const nextKey = projectKeys[nextIdx];
  const prevProject = CASE_STUDIES_DATA[prevKey];
  const nextProject = CASE_STUDIES_DATA[nextKey];

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title} — Rakesh G R | AI Engineering Case Study</title>
    <meta name="description" content="${p.overview.substring(0, 160)}...">
    <link rel="canonical" href="https://rakeshgr.netlify.app/projects/${p.slug}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../kage-assets/fonts.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../motion-system.css">
</head>
<body>
    <canvas id="bg-particle-canvas" aria-hidden="true"></canvas>
    <div class="film-grain-overlay" aria-hidden="true"></div>
    <div id="scroll-progress" aria-hidden="true"></div>

    <!-- Navigation -->
    <header class="site-nav" id="site-nav">
        <div class="container nav-wrapper">
            <div class="nav-brand">
                <a href="../index.html" class="brand-title">Rakesh G R</a>
                <span class="brand-spec">AI Engineer · Systems</span>
            </div>

            <nav aria-label="Primary Navigation">
                <ul class="nav-menu">
                    <li><a href="../index.html" class="nav-link">Home</a></li>
                    <li><a href="../about.html" class="nav-link">About Me</a></li>
                    <li><a href="../skills.html" class="nav-link">Skills</a></li>
                    <li><a href="../projects.html" class="nav-link active" aria-current="page">Projects</a></li>
                    <li><a href="../experience.html" class="nav-link">Education &amp; Experience</a></li>
                    <li><a href="../contact.html" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            <div class="nav-actions">
                <a href="../contact.html" class="btn-primary" style="padding: 7px 16px; font-size: 0.8125rem;">
                    <span>Contact Me</span>
                </a>
                <button type="button" class="btn-resume-nav action-download-resume" title="Download Resume (PDF)">
                    <i class="fas fa-file-pdf" aria-hidden="true"></i>
                    <span>Resume</span>
                </button>
                <button type="button" class="nav-hamburger" id="nav-hamburger" aria-label="Open mobile navigation menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
    <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Mobile Navigation">
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <a href="../index.html" class="brand-title" style="text-decoration: none;">Rakesh G R</a>
                <button type="button" id="mobile-drawer-close" aria-label="Close menu" style="font-size: 1.25rem; color: var(--text-ink); cursor: pointer; background: transparent; border: none;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <ul class="mobile-nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About Me</a></li>
                <li><a href="../skills.html">Skills</a></li>
                <li><a href="../projects.html" class="active">Projects</a></li>
                <li><a href="../experience.html">Education &amp; Experience</a></li>
                <li><a href="../contact.html">Contact</a></li>
            </ul>
        </div>
        <div>
            <a href="../contact.html" class="btn-secondary" style="width: 100%; justify-content: center; margin-bottom: 8px;">
                <i class="fas fa-envelope"></i> Contact Me
            </a>
            <button type="button" class="btn-primary action-download-resume" style="width: 100%; justify-content: center; margin-bottom: 12px;">
                <i class="fas fa-file-pdf"></i> Download Resume
            </button>
            <p style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-align: center;">
                Alva's Institute of Engineering &amp; Technology
            </p>
        </div>
    </aside>

    <main id="main-content">
        <!-- Case Study Header Container -->
        <header class="case-study-hero" id="cs-hero-container">
            <div class="container">
                <!-- Breadcrumbs -->
                <nav aria-label="Breadcrumb" class="breadcrumbs" style="display: flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 0.8125rem; margin-bottom: 16px; flex-wrap: wrap;">
                    <a href="../index.html" style="color: var(--text-muted); text-decoration: none;">Home</a>
                    <span style="color: var(--text-muted);">/</span>
                    <a href="../projects.html" style="color: var(--text-muted); text-decoration: none;">Projects</a>
                    <span style="color: var(--text-muted);">/</span>
                    <span style="color: var(--accent-cobalt); font-weight: 600;" aria-current="page">${projectNames[key] || p.title.split('—')[0].trim()}</span>
                </nav>

                <!-- Back to Projects link -->
                <div style="margin-bottom: 18px;">
                    <a href="../projects.html" class="btn-secondary" style="font-size: 0.8125rem; padding: 6px 14px; display: inline-flex; align-items: center; gap: 6px;">
                        <i class="fas fa-arrow-left"></i> <span>Back to Projects</span>
                    </a>
                </div>

                <div class="case-study-meta-strip">
                    <span class="project-tier-tag tier-flagship">${p.roleTag}</span>
                </div>
                <h1 class="page-title">${p.title}</h1>
                <p class="page-lead" style="margin-bottom: 24px;">${p.overview}</p>
                <div class="project-stack-pills">
                    ${p.stack.map(s => `<span class="stack-pill">${s}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
                    <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                        <i class="fab fa-github"></i> <span>View on GitHub</span>
                    </a>
                    ${p.liveUrl && p.liveUrl !== p.repoUrl ? `
                    <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                        <i class="fas fa-external-link-alt"></i> <span>Live Demo</span>
                    </a>` : ''}
                </div>
            </div>
        </header>

        <!-- Detailed Article Content Grid -->
        <section class="section-padding" style="background: var(--bg-canvas);">
            <div class="container">
                <div class="case-study-grid">
                    <!-- Sticky Sidebar Quick Navigation -->
                    <aside class="case-study-sidebar" aria-label="Article Quick Navigation">
                        <div class="sidebar-header">
                            <span class="sidebar-kicker">QUICK NAVIGATION</span>
                            <h4 class="sidebar-title">Sections</h4>
                        </div>
                        <ul class="case-study-sidebar-nav">
                            <li><a href="#section-overview"><span class="nav-idx">01</span><span class="nav-lbl">Overview</span></a></li>
                            <li><a href="#section-problem"><span class="nav-idx">02</span><span class="nav-lbl">The Problem</span></a></li>
                            <li><a href="#section-solution"><span class="nav-idx">03</span><span class="nav-lbl">My Solution</span></a></li>
                            <li><a href="#section-technologies"><span class="nav-idx">04</span><span class="nav-lbl">Technologies</span></a></li>
                            <li><a href="#section-how-it-works"><span class="nav-idx">05</span><span class="nav-lbl">Architecture</span></a></li>
                            <li><a href="#section-results"><span class="nav-idx">06</span><span class="nav-lbl">Results</span></a></li>
                            <li><a href="#section-learned"><span class="nav-idx">07</span><span class="nav-lbl">What I Learned</span></a></li>
                            <li><a href="#section-future"><span class="nav-idx">08</span><span class="nav-lbl">Roadmap</span></a></li>
                        </ul>

                        <div class="sidebar-divider"></div>

                        <div class="sidebar-related-projects">
                            <span class="sidebar-kicker">OTHER PROJECTS</span>
                            <div class="sidebar-projects-list">
                                ${projectKeys.map(k => {
                                  const item = CASE_STUDIES_DATA[k];
                                  const isCurrent = item.slug === p.slug;
                                  return `<a href="${item.slug}.html" class="sidebar-project-link${isCurrent ? ' active' : ''}">${projectNames[k]}</a>`;
                                }).join('')}
                            </div>
                        </div>
                    </aside>

                    <!-- Main Article Body -->
                    <article class="case-study-main-article">
                        <!-- 01. Overview -->
                        <div class="case-study-block" id="section-overview">
                            <h3>01 / Overview</h3>
                            <p>${p.overview}</p>
                        </div>

                        <!-- 02. The Problem -->
                        <div class="case-study-block" id="section-problem">
                            <h3>02 / The Problem</h3>
                            <p>${p.problem}</p>
                        </div>

                        <!-- 03. My Solution -->
                        <div class="case-study-block" id="section-solution">
                            <h3>03 / My Solution &amp; Architecture</h3>
                            <p>${p.architecture}</p>
                            <div style="margin-top: 16px;">
                                <h4 style="font-size: 1rem; color: var(--text-ink); margin-bottom: 12px;">Key Engineering Decisions &amp; Trade-Offs</h4>
                                ${p.decisions.map(d => `
                                  <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cobalt); margin-bottom: 12px;">
                                    <strong style="color: var(--text-ink); font-size: 0.9375rem; display: block; margin-bottom: 4px;">${d.title}</strong>
                                    <p style="font-size: 0.875rem; color: var(--text-body); margin: 0; line-height: 1.55;">${d.rationale}</p>
                                  </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 04. Technologies Used -->
                        <div class="case-study-block" id="section-technologies">
                            <h3>04 / Technologies Used</h3>
                            <div class="project-stack-pills" style="margin-bottom: 16px;">
                                ${p.stack.map(s => `<span class="stack-pill" style="font-size: 0.8125rem; padding: 6px 12px;">${s}</span>`).join('')}
                            </div>
                            <p style="font-size: 0.9375rem; color: var(--text-body); line-height: 1.6;">
                                Every technology in this stack was chosen for direct architectural fitness, verifiable benchmarking ability, and clean maintainability in a production or research setting.
                            </p>
                        </div>

                        <!-- 05. How It Works -->
                        <div class="case-study-block" id="section-how-it-works">
                            <h3>05 / How It Works &amp; Interactive Visualizer</h3>
                            <p>Here is a breakdown of how the system functions in practice:</p>
                            <ul>
                                ${p.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                            
                            <div style="margin-top: 24px;">
                                <h4 style="font-size: 1rem; color: var(--text-ink); margin-bottom: 8px;">Interactive Technical Visualizer</h4>
                                <div id="cs-interactive-visualization-mount" style="margin-top: 12px;"></div>
                                <div style="margin-top: 12px; font-size: 0.875rem; color: var(--text-body); background: var(--bg-subtle); padding: 12px 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cobalt);">
                                    <strong style="color: var(--text-ink); display: block; margin-bottom: 4px;">How to interact:</strong>
                                    <span>Use the controls above to trigger live states, test inputs, and observe system data flow directly in your browser.</span>
                                </div>
                            </div>
                        </div>

                        <!-- 06. Results -->
                        <div class="case-study-block" id="section-results">
                            <h3>06 / Results &amp; Verified Findings</h3>
                            <ul>
                                ${p.results.map(r => `<li><strong>${r}</strong></li>`).join('')}
                            </ul>
                        </div>

                        <!-- 07. What I Learned -->
                        <div class="case-study-block" id="section-learned">
                            <h3>07 / What I Learned &amp; Direct Contributions</h3>
                            <p style="margin-bottom: 12px;">Key engineering responsibilities and lessons gained during this project:</p>
                            <ul>
                                ${p.contributions.map(c => `<li>${c}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- 08. Future Improvements -->
                        <div class="case-study-block" id="section-future">
                            <h3>08 / Future Improvements</h3>
                            <p>${p.limitations}</p>
                        </div>

                        <!-- Previous / Next Project Navigation -->
                        <nav class="case-study-pagination" aria-label="Case Study Pagination" style="display: flex; justify-content: space-between; gap: 16px; margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border-hairline); flex-wrap: wrap;">
                            <a href="${prevProject.slug}.html" class="btn-secondary" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none;">
                                <i class="fas fa-arrow-left"></i>
                                <div style="text-align: left;">
                                    <span style="display: block; font-size: 0.6875rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono);">Previous Project</span>
                                    <strong style="color: var(--text-ink); font-size: 0.9375rem;">${projectNames[prevKey]}</strong>
                                </div>
                            </a>
                            <a href="${nextProject.slug}.html" class="btn-secondary" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none; text-align: right;">
                                <div style="text-align: right;">
                                    <span style="display: block; font-size: 0.6875rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono);">Next Project</span>
                                    <strong style="color: var(--text-ink); font-size: 0.9375rem;">${projectNames[nextKey]}</strong>
                                </div>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </nav>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-identity">
                    <h3>Rakesh G R</h3>
                    <p>AI Engineer &amp; Full-Stack Systems Developer. Engineering AI into real-world software.</p>
                </div>
                <div class="footer-nav-groups">
                    <div class="footer-col">
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="../about.html">About Me</a></li>
                            <li><a href="../skills.html">Skills</a></li>
                            <li><a href="../projects.html">Projects</a></li>
                            <li><a href="../experience.html">Education &amp; Experience</a></li>
                            <li><a href="../contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h5>Case Studies</h5>
                        <ul>
                            <li><a href="aiet-unisphere.html">AIET-UniSphere</a></li>
                            <li><a href="yamlanchor.html">YamlAnchor</a></li>
                            <li><a href="dense-matrix-multiplication.html">Dense Matrix C11</a></li>
                            <li><a href="customer-churn.html">Customer Churn API</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h5>Connect</h5>
                        <ul>
                            <li><a href="https://github.com/Rakeshgr962" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                            <li><a href="https://www.linkedin.com/in/rakeshgr18" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="mailto:rakeshgr223@gmail.com">Direct Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; 2026 Rakesh G R. All rights reserved.</span>
                <span>Alva's Institute of Engineering &amp; Technology · Mangalore, India</span>
            </div>
        </div>
    </footer>

    <button type="button" class="back-to-top-btn" id="back-to-top-btn" aria-label="Back to Top"><i class="fas fa-arrow-up"></i> <span>Top</span></button>
    <div class="copy-feedback-toast" id="copy-toast">Email copied to clipboard</div>

    <!-- Motion & Creative Interaction Pipeline -->
    <script src="../assets/js/three.min.js"></script>
    <script src="../assets/js/gsap.min.js"></script>
    <script src="../assets/js/ScrollTrigger.min.js"></script>
    <script src="../assets/js/lenis.min.js"></script>
    <script src="../motion-core.js"></script>
    <script src="../app.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(PROJECTS_DIR, filename), html, 'utf8');
  console.log(`Generated client/projects/${filename}`);
});

console.log('All 8 dedicated case study pages successfully generated.');
