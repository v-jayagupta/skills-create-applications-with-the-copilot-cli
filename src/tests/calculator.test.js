const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator-core');

describe('calculator core', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('addition with floats: 1.5 + 2.25 = 3.75', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75, 10);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('division by zero');
  });

  test('invalid operand throws', () => {
    expect(() => add('foo', 2)).toThrow('operands must be valid numbers');
    expect(() => sub(1, 'bar')).toThrow('operands must be valid numbers');
  });

  test('string numeric operands are accepted', () => {
    expect(add('2', '3')).toBe(5);
    expect(div('20', '5')).toBe(4);
  });

  // New tests for extended operations
  test('modulo: 10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo with negatives: -10 % 3 = -1', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('power: 2 ** 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with floats: 2.5 ** 2 = 6.25', () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25, 10);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of non-perfect square: sqrt(2)', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2), 10);
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('square root of negative number');
  });
});
