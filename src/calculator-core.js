'use strict';

/**
 * Calculator core functions
 * Functions accept numeric inputs (or numeric strings) and validate operands.
 * Throws Error('operands must be valid numbers') for invalid inputs.
 * Throws Error('division by zero') for division by zero.
 */

function toNumber(x) {
  const n = Number(x);
  if (!Number.isFinite(n)) {
    throw new Error('operands must be valid numbers');
  }
  return n;
}

function add(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x + y;
}

function sub(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x - y;
}

function mul(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x * y;
}

function div(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  if (y === 0) throw new Error('division by zero');
  return x / y;
}

module.exports = { add, sub, mul, div };
