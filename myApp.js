const express = require('express');
const app = express();
const path = require('path');

// Serve the index.html file on GET /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
