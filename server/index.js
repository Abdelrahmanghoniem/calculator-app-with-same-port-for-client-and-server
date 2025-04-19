// server/index.js
const express = require('express');
const path = require('path');
const { evaluate } = require('mathjs');
const app = express();

// Basic configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Debugging middleware - add this FIRST
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

// API Routes
app.post('/api/calculate', (req, res) => {
  try {
    const result = evaluate(req.body.expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

// ONLY AFTER static files, add catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
