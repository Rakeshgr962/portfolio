/**
 * RAKESH G R — PORTFOLIO CLIENT LOGIC
 * Complete Interactive Motion System:
 * - Three.js Ambient Particle Field & Film Grain
 * - Three.js Interactive 3D Tech Constellation (Orbit & Raycasting)
 * - Category Filter Engine (Systems, ML, Full-Stack)
 * - Interactive AIET-UniSphere RLS Policy Inspector
 * - Interactive YamlAnchor Terminal Simulator (Multi-scenario execution)
 * - Interactive Dense Matrix GFLOPS Benchmark Visualizer
 * - Interactive XGBoost Churn Decision Boundary Simulator
 * - Interactive Waste Category Inspector
 * - Dynamic Case Study Slide-over Modal
 * - Copy Email to Clipboard with Toast Notification
 * - Floating Back to Top Button
 * - GSAP Scroll-Triggered Metric Counters & Staggered Reveals
 */

const API_BASE_URL = 'https://rakeshgr.vercel.app';

// ==========================================================================
// CASE STUDY DATABASE (Verified Repository Evidence)
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
  initProjectCategoryFilters();
  initThreeParticleBackground();
  initThreeConstellation();
  initArchitectureVisualizer();
  initTerminalSimulator();
  initMatrixBenchmarkChart();
  initChurnInteractiveWidget();
  initWasteCategoryInspector();
  initContactForm();
  initCopyEmail();
  initBackToTop();
  initResumeDownload();
  initScrollAnimations();
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

    // Notify Three.js scenes of theme change
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: active } }));
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

// ==========================================================================
// 5. THREE.JS ATMOSPHERIC PARTICLE BACKGROUND (Fine Moving Film Grain)
// ==========================================================================
function initThreeParticleBackground() {
  const canvas = document.getElementById('bg-particle-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.z = 800;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  // Particle count: 1,100 on desktop, 350 on mobile
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 350 : 1100;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 1600;
    positions[i3 + 1] = (Math.random() - 0.5) * 1600;
    positions[i3 + 2] = (Math.random() - 0.5) * 1000;

    velocities[i3] = (Math.random() - 0.5) * 0.25;
    velocities[i3 + 1] = 0.15 + Math.random() * 0.35; // gentle upward drift like dust in sunlight
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.15;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const getThemeParticleColor = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'dark' ? 0x93C5FD : 0x475569;
  };

  const material = new THREE.PointsMaterial({
    color: getThemeParticleColor(),
    size: isMobile ? 2.5 : 3.0,
    transparent: true,
    opacity: 0.32,
    blending: THREE.NormalBlending
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Parallax on mouse move
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.08;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.08;
  }, { passive: true });

  // Update color on theme change
  window.addEventListener('themeChanged', (e) => {
    material.color.setHex(e.detail.theme === 'dark' ? 0x93C5FD : 0x475569);
    material.opacity = e.detail.theme === 'dark' ? 0.42 : 0.32;
  });

  let animationFrameId;
  let isTabActive = true;

  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
  });

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    if (!isTabActive) return;

    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    particleSystem.rotation.y = targetX * 0.0004;
    particleSystem.rotation.x = targetY * 0.0004;

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i3];
      pos[i3 + 1] += velocities[i3 + 1];
      pos[i3 + 2] += velocities[i3 + 2];

      // Reset when particle drifts off screen
      if (pos[i3 + 1] > 800) pos[i3 + 1] = -800;
      if (pos[i3] > 800) pos[i3] = -800;
      if (pos[i3] < -800) pos[i3] = 800;
    }
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });
}

// ==========================================================================
// 6. THREE.JS INTERACTIVE 3D TECH CONSTELLATION (HERO SECTION)
// ==========================================================================
function initThreeConstellation() {
  const canvas = document.getElementById('constellation-canvas');
  const container = document.getElementById('hero-constellation-box');
  const nodeInfo = document.getElementById('constellation-node-info');
  if (!canvas || !container || typeof THREE === 'undefined') return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.z = 240;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Verified Technology Nodes
  const nodesData = [
    { name: 'Go 1.22', repo: 'YamlAnchor Simulator', x: -60, y: 35, z: 10, color: 0x3B82F6 },
    { name: 'C11 / OpenMP', repo: 'Dense Matrix Study (~12x)', x: 65, y: 40, z: -15, color: 0x10B981 },
    { name: 'React 19 / TS', repo: 'AIET-UniSphere & EcoSort', x: -40, y: -40, z: 25, color: 0x60A5FA },
    { name: 'PostgreSQL RLS', repo: 'Database-Enforced Security', x: 50, y: -35, z: 20, color: 0xF59E0B },
    { name: 'XGBoost', repo: 'Customer Churn API (81%)', x: 0, y: 55, z: -30, color: 0x8B5CF6 },
    { name: 'EfficientNetB0', repo: 'Waste Vision (89.24%)', x: -75, y: -5, z: -25, color: 0x10B981 },
    { name: 'Docker Engine', repo: 'Local CI Runner Simulation', x: 75, y: 0, z: 15, color: 0x3B82F6 },
    { name: 'FastAPI REST', repo: 'Leakage-Free ML Inference', x: 5, y: -10, z: -5, color: 0xEC4899 }
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

  // Interconnecting Lines between related technologies
  const lineMaterial = new THREE.LineBasicMaterial({
    color: document.documentElement.getAttribute('data-theme') === 'dark' ? 0x3B82F6 : 0x1D4ED8,
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

  // Mouse & Touch Orbit Interaction
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;
  let rotSpeedX = 0;
  let rotSpeedY = 0.004; // Gentle continuous auto-rotation

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

    // Raycast on hover
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

  // Clicking node opens verified project case study or repo
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
      if (hit.name.includes('Go')) window.location.hash = '#work';
      else if (hit.name.includes('C11')) window.location.hash = '#work';
      else if (hit.name.includes('React')) window.location.hash = '#work';
      else if (hit.name.includes('XGBoost')) window.location.hash = '#work';
    }
  });

  let animId;
  const animate = () => {
    animId = requestAnimationFrame(animate);
    if (!isDragging) {
      group.rotation.y += rotSpeedY;
      group.rotation.x += 0.0008;
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
}

// ==========================================================================
// 7. INTERACTIVE PROJECT CATEGORY FILTERS
// ==========================================================================
function initProjectCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.featured-project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          // Smooth entrance
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// ==========================================================================
// 8. INTERACTIVE RLS POLICY INSPECTOR (AIET-UNISPHERE)
// ==========================================================================
function initArchitectureVisualizer() {
  const mount = document.getElementById('architecture-visualizer-mount');
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
          <strong>Zero API Overhead:</strong> Authorization is baked directly into PostgreSQL. Even compromised backend proxies cannot bypass RLS.
        </div>
      </div>
    `;

    mount.querySelectorAll('.role-box-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-role');
        render(selected);
      });
    });
  };

  render('Student');
}

// ==========================================================================
// 9. INTERACTIVE YAMLANCHOR TERMINAL SIMULATOR
// ==========================================================================
function initTerminalSimulator() {
  const terminalMount = document.getElementById('terminal-simulator-mount');
  if (!terminalMount) return;

  const scenarios = {
    full: [
      { text: '$ yamlanchor scan --repo . --ast', type: 'cmd', delay: 200 },
      { text: '✓ Discovered Go 1.22 + Next.js 14 codebase', type: 'success', delay: 500 },
      { text: '✓ Parsed package.json & go.mod AST targets', type: 'muted', delay: 800 },
      { text: '$ yamlanchor simulate --workflow ci.yml --docker', type: 'cmd', delay: 1100 },
      { text: '⚡ Spawning runner container: alpine/golang:1.22', type: 'muted', delay: 1400 },
      { text: '[Step 1/3] go test ./pkg/simulator -v ... PASS (0.42s)', type: 'success', delay: 1800 },
      { text: '[Step 2/3] Secrets scan: No unencrypted keys detected', type: 'success', delay: 2200 },
      { text: '✓ Local Docker Simulation Succeeded (0 remote failures)', type: 'success', delay: 2600 }
    ],
    secret_leak: [
      { text: '$ yamlanchor scan --secrets --strict', type: 'cmd', delay: 200 },
      { text: '⚡ Scanning repo AST for plaintext credentials...', type: 'muted', delay: 500 },
      { text: '⚠ ALERT: AWS_SECRET_ACCESS_KEY pattern found at workflow.yml:14', type: 'warn', delay: 900 },
      { text: '🛡️ Local Interceptor: Remote push blocked! Key mocked in local env', type: 'warn', delay: 1300 },
      { text: '✓ Automated Secret Interception prevented public leak', type: 'success', delay: 1700 }
    ],
    syntax_error: [
      { text: '$ yamlanchor validate --workflow ci.yml', type: 'cmd', delay: 200 },
      { text: '✖ Schema Error at line 22: Indentation mismatch under "jobs.build.steps"', type: 'warn', delay: 600 },
      { text: '🔧 Self-Healing Engine: Suggesting 2-space YAML re-indentation patch', type: 'muted', delay: 1000 },
      { text: '✓ Suggested fix generated without pushing broken remote commit', type: 'success', delay: 1400 }
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
        <button type="button" class="term-action-btn active" id="term-run-full">Run Full Pipeline</button>
        <button type="button" class="term-action-btn" id="term-run-leak">Simulate Secret Intercept</button>
        <button type="button" class="term-action-btn" id="term-run-syntax">Simulate Self-Healing</button>
        <button type="button" class="term-action-btn" id="term-clear">Clear</button>
      </div>
      <div class="terminal-body" id="term-output"></div>
    </div>
  `;

  const output = document.getElementById('term-output');
  let currentTimers = [];

  const runScenario = (key) => {
    currentTimers.forEach(t => clearTimeout(t));
    currentTimers = [];
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

  document.getElementById('term-run-full')?.addEventListener('click', (e) => {
    setActiveToolbarBtn(e.target);
    runScenario('full');
  });
  document.getElementById('term-run-leak')?.addEventListener('click', (e) => {
    setActiveToolbarBtn(e.target);
    runScenario('secret_leak');
  });
  document.getElementById('term-run-syntax')?.addEventListener('click', (e) => {
    setActiveToolbarBtn(e.target);
    runScenario('syntax_error');
  });
  document.getElementById('term-clear')?.addEventListener('click', () => {
    output.innerHTML = '<div class="term-line term-muted">Terminal cleared. Select a scenario above to dry-run.</div>';
  });

  function setActiveToolbarBtn(btn) {
    terminalMount.querySelectorAll('.term-action-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

// ==========================================================================
// 10. INTERACTIVE DENSE MATRIX GFLOPS BENCHMARK
// ==========================================================================
function initMatrixBenchmarkChart() {
  const container = document.getElementById('matrix-chart-mount');
  if (!container) return;

  const benchmarkData = {
    '512': { naive: 0.82, ikj: 10.4, openmp: 38.6, speedup: '12.6x', note: 'L1d cache locality active' },
    '1024': { naive: 0.74, ikj: 9.8, openmp: 44.2, speedup: '13.2x', note: 'Tile size 64 fits L2 cache' },
    '2048': { naive: 0.61, ikj: 9.1, openmp: 46.8, speedup: '14.9x', note: 'OpenMP collapse(2) prevents thread starvation' }
  };

  let currentDim = '1024';

  const render = (dim) => {
    currentDim = dim;
    const d = benchmarkData[dim];

    // Scale bars: 50 GF = 95px height
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

        <div style="display: flex; gap: 14px; font-family: var(--font-mono); font-size: 10px; margin-bottom: 8px;">
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
function initChurnInteractiveWidget() {
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

    tenureVal.textContent = `${tenure} mo`;
    chargesVal.textContent = `$${charges}/mo`;

    // Simulated linear combination approximating the trained XGBoost decision boundary
    // Short tenure (<15mo) and high monthly charges (>$70) strongly correlate with churn
    const churnScore = (charges * 0.75) - (tenure * 1.8) + 40;
    const probability = Math.min(95, Math.max(5, Math.round(churnScore)));

    if (probability > 50) {
      resultBadge.className = 'churn-prediction-badge churn-risk';
      resultText.textContent = `High Churn Risk (${probability}%)`;
    } else {
      resultBadge.className = 'churn-prediction-badge churn-safe';
      resultText.textContent = `Low Churn Risk (${probability}%)`;
    }
  };

  tenureSlider.addEventListener('input', updatePrediction);
  chargesSlider.addEventListener('input', updatePrediction);
  updatePrediction();
}

// ==========================================================================
// 12. INTERACTIVE WASTE CATEGORY INSPECTOR
// ==========================================================================
function initWasteCategoryInspector() {
  const buttons = document.querySelectorAll('#waste-cat-grid button');
  const descEl = document.getElementById('waste-cat-desc');
  if (!buttons.length || !descEl) return;

  const catDetails = {
    Cardboard: 'Dry recyclable material. Clean corrugated boxes; flattened before municipal collection.',
    Glass: 'Inorganic recyclable. Jars and bottles; rinsed clean of food residues to prevent contamination.',
    Metal: 'Valuable recyclable. Aluminum beverage cans and tin food tins; 100% infinitely recyclable.',
    Paper: 'Dry fiber recyclable. Newspapers, envelopes, and office paper (unlaminated and free of grease).',
    Plastic: 'PET/HDPE recyclables. Rinsed beverage bottles and containers; marked with recycling codes.',
    Trash: 'Non-recyclable sanitary or composite waste destined for containment or incinerator disposal.'
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      descEl.innerHTML = `<strong>${cat}:</strong> ${catDetails[cat]}`;
    });
  });
}

// ==========================================================================
// 13. CASE STUDY SLIDE-OVER MODAL SYSTEM
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

// ==========================================================================
// 14. CONTACT FORM HANDLER (WITH BACKEND & FALLBACK)
// ==========================================================================
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

// ==========================================================================
// 15. COPY EMAIL TO CLIPBOARD WITH TOAST
// ==========================================================================
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('copy-toast');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('rakeshgr962@gmail.com');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 2200);
      }
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = 'rakeshgr962@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 2200);
      }
    }
  });
}

// ==========================================================================
// 16. FLOATING BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================================================
// 17. RESUME DOWNLOAD HANDLER
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
// 18. GSAP / SCROLL REVEAL & NUMBER COUNTER ANIMATIONS
// ==========================================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  // Lightweight Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Animate counter if inside this card
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
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

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
  }, 30);
}
