const express = require('express');
const app = express();
const path = require('path');

// Serve static assets from the /public folder
app.use('/public', express.static(__dirname + '/public'));

// Serve the HTML file on root route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
