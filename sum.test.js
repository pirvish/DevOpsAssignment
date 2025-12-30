const sum = require('./sum');

test('adds two numbers', () => expect(sum(2, 3)).toBe(5));
test('adds zero correct', () => expect(sum(0, 5)).toBe(5));
test('returns NaN if input is not a valid number', () => expect(sum(null, 2)).toBeNaN());
