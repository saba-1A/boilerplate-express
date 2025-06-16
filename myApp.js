require('dotenv').config();
let express = require('express');
let app = express();

// Logger middleware (optional)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Chained middleware for /now
app.get("/now",
  (req, res, next) => {
    req.time = new Date().toString(); // 👈 Use this format for FCC
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

module.exports = app;
