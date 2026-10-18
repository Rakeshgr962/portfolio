const fs = require('fs');
const s = fs.readFileSync('client/index.html', 'utf8');
const lines = s.split('\n');
console.log('Searching for hero tags...');
lines.forEach((l, idx) => {
  if (l.includes('<section') || l.includes('</section>') || l.includes('hero')) {
    if (idx < 1050) {
      console.log(`${idx + 1}: ${l}`);
    }
  }
});
