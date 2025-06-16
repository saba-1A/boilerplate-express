let express = require('express');
let app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

const path = require('path');
// console.log("Hello Express");
// console.log('__dirname=' + __dirname); // __dirname=/home/runner/boilerplate-express



app.get("/", (req, res) => {
  // res.sendFile('/views/index.html');
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({
      message: "Hello json".toUpperCase()
    });
  else
    res.json({
      message: "Hello json"
    });
});

app.get(
  "/now",
  (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    let timeStr = new Date().toString();
    req.string = timeStr;
    console.log('timeStr=' + timeStr);
    next();
  },
  (req, res) => {
    // accessing the newly added property
    // in the main function
    res.send({ "time": req.string });
  }
);

// test it 
// https://boilerplate-express.sl5net.repl.co/freecodecamp/echo

app.get(
  '/:word/echo',
  (req, res) => {  // is not working: '/:word/echo'
    // res.send({ "echo": req.params.word }); // idk this is not used anymore
    // console.log('HELLO WORLD');
    // console.log('23-0310_1754-08');
    res.json({ "echo": req.params.word });
  }
);

app.route('/name')
  .get((req, res) => {
    const firstName = req.query.first || '';
    const lastName = req.query.last || '';
    // console.log(`${firstName} ${lastName}`);
    res.json({ name: `${firstName} ${lastName}` });
  });


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/name', (req, res) => {
  const { first, last } = req.query;
  const name = { name: `${first} ${last}` };
  res.json(name);
});


app.post('/name', (req, res) => {
  let { first, last } = req.body;
  let name = `${first} ${last}`;
  return res.status(200).json({ name });
});


// Assets at the /public route
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
