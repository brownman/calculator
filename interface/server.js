const calculator = require('../src/calculator.js')
const express = require('express')
const app = express()
const port = 3000

var router = express.Router();

// Home page route.
app.get('/', function (req, res) {
  res.send('welcome to the calculator');
})

// About page route.
app.get('/about', function (req, res) {
  res.send('no calculator has ever calculated the precise time of the big bang');
})

app.get('/calculate', function (req, res) {
  var phrase = req.query.phrase;
  var sum = calculator.process(phrase);
  res.send('here is the calculator: ' + phrase );
})



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))





