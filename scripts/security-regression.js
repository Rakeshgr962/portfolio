const http = require('http');
const assert = require('assert');

const BASE_URL = 'http://localhost:4173';

function request(path) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${path}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- RUNNING SECURITY REGRESSION TESTS ---');

  // Test 1: Directory traversal with ..
  const t1 = await request('/../../package.json');
  assert([403, 404].includes(t1.status), `Expected 403/404 for traversal, got ${t1.status}`);
  console.log('✅ Test 1 Passed: Encoded/plain dot-dot traversal rejected');

  // Test 2: URL Encoded dot-dot traversal
  const t2 = await request('/%2e%2e/%2e%2e/dev-server.js');
  assert([403, 404].includes(t2.status), `Expected 403/404 for encoded traversal, got ${t2.status}`);
  console.log('✅ Test 2 Passed: Encoded (%2e%2e) traversal rejected');

  // Test 3: Sibling directory prefix bypass attempt
  // e.g. client-secret or client_fake
  const t3 = await request('/../client/../server/server.js');
  assert([403, 404].includes(t3.status), `Expected 403/404 for sibling directory attempt, got ${t3.status}`);
  console.log('✅ Test 3 Passed: Sibling directory prefix attack rejected');

  // Test 4: Direct directory access without trailing slash
  const t4 = await request('/kage-assets');
  assert([403, 404].includes(t4.status), `Expected 403/404 for direct directory access, got ${t4.status}`);
  console.log('✅ Test 4 Passed: Direct directory browsing prevented');

  // Test 5: Verify security headers are attached to legitimate responses
  const t5 = await request('/about');
  assert.strictEqual(t5.status, 200, `Expected 200 OK for /about, got ${t5.status}`);
  assert.strictEqual(t5.headers['x-content-type-options'], 'nosniff', 'Missing X-Content-Type-Options: nosniff');
  assert.strictEqual(t5.headers['x-frame-options'], 'DENY', 'Missing X-Frame-Options: DENY');
  assert.strictEqual(t5.headers['referrer-policy'], 'strict-origin-when-cross-origin', 'Missing Referrer-Policy');
  console.log('✅ Test 5 Passed: Security headers verified on legitimate routes');

  console.log('--- ALL REGRESSION TESTS PASSED SUCCESSFULLY ---');
}

runTests().catch(err => {
  console.error('❌ Regression test failed:', err);
  process.exit(1);
});
