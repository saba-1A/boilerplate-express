var express = require('express');
var app = express();

// Your echo server
app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

// For freeCodeCamp boilerplate
module.exports = app;
s
