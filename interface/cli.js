'use strict'

const calc=require('../src/calculator.js');

require('yargs')
	.scriptName("cli")
	.usage('$0 <cmd> [args]')
	.command('calculate [expression]','', (yargs) => {
		yargs.positional('expression', {
			type: 'string',
			default: '42',
			describe: 'the math expression to process'
		})
	}, function (argv) {
		var sum=calc.process(argv.expression);
		console.log('The expression: ', argv.expression, 'is evaluated to: ',sum)
	})
	.help()
	.argv

