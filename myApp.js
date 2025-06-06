require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

// Logger middleware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// /now route with chained middleware
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ time: req.time }));
});

// /json route
app.get('/json', function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

// Root route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
