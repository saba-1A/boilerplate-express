require('dotenv').config();
let express = require('express');
let app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Chain middleware to create a time server
app.get('/now', function(req, res, next) {
  req.time = new Date().toUTCString(); // ✅ use UTC string for correct format
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

// Export the app for server.js
module.exports = app;
