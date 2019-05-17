const calculator = require('../src/calculator.js');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.process('1*2')).toBe('hello 1*2');
});
