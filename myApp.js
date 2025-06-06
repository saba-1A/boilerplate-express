require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// 1. Serve static assets from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// 2. Logger middleware (root-level)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// 3. /now route with chained middleware (current time)
app.get('/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// 4. /json route influenced by MESSAGE_STYLE env var
app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message });
});

// 5. Root route serving the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Export the app
module.exports = app;
