var express = require('express');
var app = express();

/** 8) Chaining middleware. A Time server */

app.get('/now', function(req, res, next) {
  req.time = new Date().toString(); // ✅ Add current time to request object
  next(); // ✅ Pass control to next function
}, function(req, res) {
  res.json({ time: req.time }); // ✅ Respond with time in JSON format
});

//---------- DO NOT EDIT BELOW THIS LINE --------------------
module.exports = app;
s
