const express = require('express');
const cors = require('cors');

const app = express();

// Allow only your Netlify frontend
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'https://rakeshgr.netlify.app';

app.disable('x-powered-by');

// Restrict request body size to 10kb to prevent denial of service via payload flooding
app.use(express.json({ limit: '10kb' }));

// Attach basic security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ['GET', 'POST'],
  })
);

// Health check
app.get('/', (req, res) => {
  res.json({ activeStatus: true, error: false });
});

// Contact endpoint (Legacy / Optional Serverless hook)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields required' });
    }

    // Input length constraint to prevent memory abuse
    if (typeof name !== 'string' || name.length > 100 ||
        typeof email !== 'string' || email.length > 255 ||
        typeof subject !== 'string' || subject.length > 200 ||
        typeof message !== 'string' || message.length > 5000) {
      return res.status(400).json({ success: false, error: 'Field length exceeds permitted limit' });
    }

    // Never print user input directly into unconstrained logs
    console.log(`[CONTACT RECEIVED] Subject: ${subject.slice(0, 30)}... from ${email.slice(0, 3)}***`);

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

module.exports = app;







