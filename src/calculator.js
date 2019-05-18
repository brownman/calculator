'use strict'
const tokenizer = require('./tokenizer.js');
console.log('..calculating..');

var calculator = {
	multiply: function(a,b) {
		var res=a*b;
		return res;
	},
	divide: function(a,b){
		var res=a/b;
		return res;
	},

	/**
	 * A function to process the math expression
	 *
	 * We assume that the expression is a sequence of number and math operators
	 *
	 * @param {string} expr - The string which represents a math expression 
	 * @return {string} The expression's result
	 */
	process: function(expr){
		return tokenizer.process(expr);
	}
}

module.exports=calculator;
