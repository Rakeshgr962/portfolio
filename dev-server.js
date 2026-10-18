const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4173;
const CLIENT_DIR = path.join(__dirname, 'client');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(reqUrl.pathname);

  if (pathname === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({ success: true, message: 'Message received successfully.' }));
    });
    return;
  }

  // Clean URLs & rewrites matching _redirects
  if (pathname === '/') pathname = '/index.html';
  else if (pathname === '/about') pathname = '/about.html';
  else if (pathname === '/skills') pathname = '/skills.html';
  else if (pathname === '/projects') pathname = '/projects.html';
  else if (pathname === '/experience') pathname = '/experience.html';
  else if (pathname === '/contact') pathname = '/contact.html';
  else if (pathname.startsWith('/projects/')) {
    const slug = pathname.replace('/projects/', '').replace('.html', '');
    const preRendered = path.join(CLIENT_DIR, 'projects', `${slug}.html`);
    if (fs.existsSync(preRendered)) {
      pathname = `/projects/${slug}.html`;
    } else {
      pathname = '/case-study.html';
    }
  }

  let filePath = path.resolve(CLIENT_DIR, '.' + pathname);

  // Robust containment check using path.relative
  const rel = path.relative(CLIENT_DIR, filePath);
  const isContained = rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));

  if (!isContained) {
    res.writeHead(403, { 
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    });
    res.end('403 Forbidden: Access denied.');
    return;
  }

  // Handle file existence, directory access prevention, and symlink validation
  fs.stat(filePath, (err, stats) => {
    let targetFile = filePath;

    if (err || !stats.isFile()) {
      // Prevent directory browsing - only allow files or existing HTML rewrites
      const htmlPath = filePath + '.html';
      const relHtml = path.relative(CLIENT_DIR, htmlPath);
      const isHtmlContained = relHtml === '' || (!relHtml.startsWith('..') && !path.isAbsolute(relHtml));
      
      if (isHtmlContained && fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
        targetFile = htmlPath;
      } else {
        res.writeHead(404, { 
          'Content-Type': 'text/html; charset=utf-8',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY'
        });
        res.end('<h1>404 Not Found</h1><p><a href="/">Return Home</a></p>');
        return;
      }
    }

    // Resolve realpath to safeguard against symlinks pointing outside CLIENT_DIR
    try {
      const realTarget = fs.realpathSync(targetFile);
      const relReal = path.relative(CLIENT_DIR, realTarget);
      const isRealContained = relReal === '' || (!relReal.startsWith('..') && !path.isAbsolute(relReal));
      if (!isRealContained) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden: Symbolic link target out of bounds.');
        return;
      }
      targetFile = realTarget;
    } catch (e) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    });
    fs.createReadStream(targetFile).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Portfolio local server listening at http://localhost:${PORT}`);
});
