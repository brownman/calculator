'use strict'

const calculator = require('../src/calculator.js');
const think = calculator.process;
const assert = require('assert');


const input1 = '5/3';
const output1 = [{"type": "Literal", "value": "5"}, {"type": "Operator", "value": "/"}, {"type": "Literal", "value": "3"}];

describe('tokenizer', () => {
  test('handle symbols: digits,opertors', () => {
    expect(calculator.process(input1)).toEqual(output1);
  });
});

