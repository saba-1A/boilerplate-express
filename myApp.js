const express = require('express');
const app = express();

// 🔗 Chain middleware and final handler in one route
app.get('/now', (req, res, next) => {
  req.time = new Date().toString(); // Get current time
  next();
}, (req, res) => {
  res.json({ time: req.time }); // Return JSON with time
});

// Export app for freeCodeCamp testing
module.exports = app;

