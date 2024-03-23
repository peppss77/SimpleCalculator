const divide = require('../src/divide');

test('divides 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
  expect(() => {
    divide(6, 0);
  }).toThrow("Cannot divide by zero!");
});
