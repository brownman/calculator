'use strict'

const calc=require('../src/calculator.js');

require('yargs')
	.scriptName("cli")
	.usage('$0 <cmd> [args]')
	.command('tokenize [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '42',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.tokenize(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})
	.command('rpn [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '42',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.rpn(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})
	.command('ast [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '42',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.ast(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})


	.help()
	.argv

