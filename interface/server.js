'use strict'
/**
 * A web-server interface for serving a math calculation service for a givven user input.
 * A valid input is a stringified math expression.
 */

const calculator = require('../src/calculator.js')

//const logger = require('../utils/logger.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


console.log('NODE_ENV: ' + process.env.NODE_ENV);


var router = express.Router();

/* A function to test that the supplied input is a valid string
 * Rules:
 * - Allowd input should be limited to 20 chars
 *
 * @param {string}
 * @ returns boolean result
 * */
function validateInput(str){
	if (str.length<20)
	{ return true; }
	return false;
}

/* A function to handle the error log
 *
 * @param {object} error
 * @ returns void
 * */
function logger(error){
	console.dir(error);
}

app.get('/', function (req, res) {
	res.redirect("/calculate?query='4*2'")
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
			return res.send('Invalid 	input');
		}

		let sum = calculator.calculate(phrase);
		res.send('The ultimate answer to the universe and everything: ' + sum);
	} catch (error) {
		logger(error);
		return res.status(500).send('1. Invalid request');
	}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
