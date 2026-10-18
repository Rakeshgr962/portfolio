const fs = require('fs');
const path = require('path');

function updateHtmlFiles(dir, depth = 0) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      if (f !== 'kage-assets' && f !== 'assets') {
        updateHtmlFiles(fullPath, depth + 1);
      }
    } else if (f.endsWith('.html') && f !== 'index.html') {
      let content = fs.readFileSync(fullPath, 'utf8');
      const relPath = depth === 0 ? 'kage-assets/fonts.css' : '../kage-assets/fonts.css';
      if (!content.includes('kage-assets/fonts.css')) {
        content = content.replace(/<link rel=["']stylesheet["'] href=["'](\.\.\/)?style\.css["']>/, (m) => {
          return `<link rel="stylesheet" href="${relPath}">\n    ${m}`;
        });
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Linked Onest in', fullPath);
      }
    }
  }
}

updateHtmlFiles(path.join(__dirname, '..', 'client'));
