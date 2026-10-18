const http = require('http');

const routes = [
  '/',
  '/about',
  '/skills',
  '/projects',
  '/experience',
  '/contact',
  '/projects/aiet-unisphere',
  '/projects/yamlanchor',
  '/projects/dense-matrix-multiplication',
  '/projects/customer-churn',
  '/projects/garbage-classification',
  '/projects/ai-ecosort',
  '/projects/priceflow-agent',
  '/kage-assets/fonts.css',
  '/kage-assets/three.min.js'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4173${route}`, (res) => {
      resolve({ route, status: res.statusCode, contentType: res.headers['content-type'] });
    }).on('error', (err) => {
      resolve({ route, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing all routes and critical assets on http://localhost:4173 ...\n');
  let allPass = true;
  for (const r of routes) {
    const res = await checkRoute(r);
    const pass = res.status === 200;
    if (!pass) allPass = false;
    console.log(`${pass ? '✅' : '❌'} [${res.status}] ${r} (${res.contentType || res.error})`);
  }
  console.log('\nResult:', allPass ? 'ALL ROUTES AND ASSETS VERIFIED (200 OK)!' : 'SOME ROUTES FAILED');
}

run();
