const express = require('express');
const app = express();

// Step 1: Chain middleware in the /now route
app.get('/now', (req, res, next) => {
  req.time = new Date().toString(); // Middleware adds time to req
  next(); // Move to next handler
}, (req, res) => {
  res.json({ time: req.time }); // Final handler responds with time
});

// Step 2: Export the app so FCC can test it
module.exports = app;
