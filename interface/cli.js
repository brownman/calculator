'use strict'
/**
 * A command-line interface for serving a math calculation service for a givven user input.
 * A valid input is a stringified math expression.
 */
const calc=require('../src/calculator.js');

require('yargs')
	.scriptName("cli")
	.usage('$0 <cmd> [args]')
	.command('tokenize [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.tokenize(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})
	.command('rpn [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.rpn(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})
	.command('ast [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.ast(argv.expression);
		console.log('\nThe expression: ', argv.expression, 'is evaluated to: ')
		console.log(sum);
		console.log('\nAST draw:')
		console.log("" + sum);
	})
	.command('calculate [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.calculate(argv.expression);
		console.log('Input:\t' + argv.expression);
		console.log('Result:\t' + sum);
	})




	.help()
	.argv
