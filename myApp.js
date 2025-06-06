const express = require('express');
const app = express();
const path = require('path');

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

// Serve the HTML file at "/"
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON at "/json"
app.get('/json', function(req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;
