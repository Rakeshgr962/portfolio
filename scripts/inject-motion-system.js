const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'client');
const projectsDir = path.join(clientDir, 'projects');

const rootPages = [
  'index.html',
  'about.html',
  'skills.html',
  'projects.html',
  'experience.html',
  'contact.html',
  'case-study.html'
];

function injectMotionScripts(filePath, isSubdir = false) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  const relPrefix = isSubdir ? '../' : '';

  // 1. Inject motion-system.css if not present
  if (!html.includes('motion-system.css')) {
    html = html.replace(
      /<\/head>/i,
      `    <link rel="stylesheet" href="${relPrefix}motion-system.css">\n</head>`
    );
  }

  // 2. Ensure Lenis, GSAP, ScrollTrigger, and motion-core.js are present before </body>
  const requiredScripts = `
    <!-- Award-Worthy Motion & Creative Interaction Pipeline -->
    <script src="${relPrefix}assets/js/three.min.js"></script>
    <script src="${relPrefix}assets/js/gsap.min.js"></script>
    <script src="${relPrefix}assets/js/ScrollTrigger.min.js"></script>
    <script src="${relPrefix}assets/js/lenis.min.js"></script>
    <script src="${relPrefix}motion-core.js"></script>
`;

  // Avoid duplicate injection
  if (!html.includes('motion-core.js')) {
    if (html.includes('<script src="app.js"></script>') || html.includes('<script src="../app.js"></script>')) {
      html = html.replace(
        /(<script src="(?:\.\.\/)?app\.js"><\/script>)/i,
        `${requiredScripts}    $1`
      );
    } else {
      html = html.replace(
        /<\/body>/i,
        `${requiredScripts}</body>`
      );
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✅ Injected motion system into: ${path.basename(filePath)}`);
}

// Inject into root pages
rootPages.forEach(p => {
  injectMotionScripts(path.join(clientDir, p), false);
});

// Inject into project case studies
if (fs.existsSync(projectsDir)) {
  const projFiles = fs.readdirSync(projectsDir).filter(f => f.endsWith('.html'));
  projFiles.forEach(f => {
    injectMotionScripts(path.join(projectsDir, f), true);
  });
}

console.log('Motion system script injection completed across all pages!');
