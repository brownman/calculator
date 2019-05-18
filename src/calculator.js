'use strict'
const tokenizer = require('./tokenizer.js');
const rpn = require('./rpn.js');
const ast = require('./ast.js');
console.log('..calculating..');

var calculator = {
	/**
	 * A function to process the math expression
	 *
	 * We assume that the expression is a sequence of number and math operators
	 *
	 * @param {string} expr - The string which represents a math expression 
	 * @return {string} The expression's result
	 */
	tokenize: function(expr){
		return tokenizer.process(expr);
	},
	rpn: function(expr){
		return rpn.process(expr);
	},
	ast: function(expr){
		return ast.process(expr);
	}


}

module.exports=calculator;
