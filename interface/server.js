'use strict'
/**
 * A web-server interface for serving a math calculation service for a givven user input.
 * A valid input is a stringified math expression.
 */

const calculator = require('../src/calculator.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var router = express.Router();

/* A function to test that the supplied input is a valid string
 * @ input
 * @ returns
 * */
function validateInput(str){
		if (str.length<20)
			{return true;}
		return false;
}

app.get('/', function (req, res) {
	res.redirect("/calculate?query='4*2'")
})

app.get('/about', function (req, res) {
	res.send('no calculator has ever calculated the precise time of the big bang');
})

/*
* calculate: calcualte the actual numeric sum
* @param {string} query - A string which represents a math expression
*/
app.get('/calculate', function (req, res) {
	try {
		let phrase = req.query['query'];
		if (! validateInput(phrase))
		{
			return res.send('Invalid input');
		}

		let sum = calculator.calculate(phrase);
		res.send('The ultimate answer to the universe and everything: ' + sum);
	} catch (error) {
		console.log(error.toString());
		return res.status(500).send('Invalid request');
	}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
