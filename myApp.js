require('dotenv').config();
let express = require('express');
let app = express();

// Middleware logger (optional, used in earlier challenges)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Chained middleware for /now
app.get("/now",
  (req, res, next) => {
    req.time = new Date().toUTCString(); // Use UTC format for FCC test
    next();
  },
  (req, res) => {
    res.json({ time: req.time }); // JSON response with time
  }
);

// Export the app (needed by server.js)
module.exports = app;
