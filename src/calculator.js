'use strict'

/**
 * A shared code base for both web and cli interfaces, presenting services to convert a stringified math expression to the following options:
 * - rpn:				translate to RPN representation,
 * - ast:    		build AST tree
 * - calculate: calcualte the actual numeric sum
 * @param {string} expr - The string which represents a math expression
 */


const tokenizer = require('./service/tokenizer.js');
const rpn = require('./service/rpn.js');
const ast = require('./service/ast.js');


console.log('___Calculator result:___');

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
	},
	calculate: function(expr){
		return ast.calculate(expr);
	}
}

module.exports=calculator;
