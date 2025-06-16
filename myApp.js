var express = require('express');
var app = express();
const bodyParser = require('body-parser'); // ✅

app.use((req, res, next) => {
 console.log(req.method + " " + req.path + " - " + req.ip); 
 next();
});

app.use(bodyParser.urlencoded({ extended: false })); // ✅

...

app.get('/now', function(req, res, next){
  req.time = new Date().toString(); // ✅ Add time here
  next();  
}, function(req, res) {
  res.json({ time: req.time }); // ✅ Return JSON
});
