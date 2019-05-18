'use strict'

const calculator = require('../src/calculator.js');
const think = calculator.process;
const assert = require('assert');


const input1 = '5/3';
const output1 = [{"type": "Literal", "value": "5"}, {"type": "Operator", "value": "/"}, {"type": "Literal", "value": "3"}];

describe('tokenizer', () => {
	console.log(input1);
	console.log(output1);
	test('handle symbols: digits,opertors', () => {
		expect(calculator.tokenize(input1)).toEqual(output1);
	});
});

const input3 = '7*8+2';
const output3 = '7 8 * 2 +'

describe('rpn', () => {

	console.log(input3);
	console.log(output3);
	test('convert math expression to rpn', () => {
		expect(calculator.rpn(input3)).toEqual(output3);
	});
});


const input2 = '5/2';
const output2 = {"leftChildNode": {"leftChildNode": null, "rightChildNode": null, "token": "5"}, "rightChildNode": {"leftChildNode": null, "rightChildNode": null, "token": "2"}, "token": "/"};


describe('ast', () => {

	console.log(input2);
	console.log(output2)
	test('convert math expression to ast', () => {
		expect(calculator.ast(input2)).toEqual(output2);
	});
});


