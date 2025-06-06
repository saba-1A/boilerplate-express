require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// 1. Serve static assets
app.use('/public', express.static(__dirname + '/public'));

// 2. Logger middleware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// 3. /now route with chained middleware
app.get('/now', (req, res, next) => {
  req.time = new Date().toString(); // capture current time
  next();
}, (req, res) => {
  res.json({ time: req.time }); // respond with the time
});

// 4. /json route with env-based formatting
app.get('/json', function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

// 5. Root route serving index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 6. Export the app
module.exports = app;
