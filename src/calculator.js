#!/usr/bin/env node
'use strict';

/**
 * Node.js CLI Calculator
 * Supported operations:
 *  - add: addition (+)
 *  - sub: subtraction (-)
 *  - mul: multiplication (×)
 *  - div: division (÷)
 *  - mod: modulo (%)
 *  - pow: exponentiation (power)
 *  - sqrt: square root (√)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3      -> 5
 *   node src/calculator.js sub 5 2      -> 3
 *   node src/calculator.js mul 4 6      -> 24
 *   node src/calculator.js div 10 2     -> 5
 *   node src/calculator.js mod 10 3     -> 1
 *   node src/calculator.js pow 2 3      -> 8
 *   node src/calculator.js sqrt 9       -> 3
 *
 * Exit codes:
 *   0 - success
 *   2 - invalid input or usage
 *   3 - division by zero
 */

const { add, sub, mul, div, modulo, power, squareRoot } = require('./calculator-core');
const [,, op, aRaw, bRaw] = process.argv;

function printUsageAndExit() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div|mod|pow|sqrt> <num1> <num2?>');
  process.exit(2);
}

if (!op || !aRaw) {
  printUsageAndExit();
}

try {
  let result;
  switch (op.toLowerCase()) {
    case 'add':
      if (!bRaw) printUsageAndExit();
      result = add(aRaw, bRaw);
      break;
    case 'sub':
      if (!bRaw) printUsageAndExit();
      result = sub(aRaw, bRaw);
      break;
    case 'mul':
      if (!bRaw) printUsageAndExit();
      result = mul(aRaw, bRaw);
      break;
    case 'div':
      if (!bRaw) printUsageAndExit();
      result = div(aRaw, bRaw);
      break;
    case 'mod':
    case 'modulo':
      if (!bRaw) printUsageAndExit();
      result = modulo(aRaw, bRaw);
      break;
    case 'pow':
    case 'power':
      if (!bRaw) printUsageAndExit();
      result = power(aRaw, bRaw);
      break;
    case 'sqrt':
    case 'squareroot':
      result = squareRoot(aRaw);
      break;
    default:
      console.error(`Error: unknown operation '${op}'. Supported: add, sub, mul, div, mod, pow, sqrt`);
      printUsageAndExit();
  }

  // Print result with full precision when needed, but trim trailing zeros for readability
  if (Number.isInteger(result)) {
    console.log(result);
  } else {
    console.log(parseFloat(result.toPrecision(15)).toString());
  }

  process.exit(0);
} catch (err) {
  if (err && err.message === 'division by zero') {
    console.error('Error: division by zero');
    process.exit(3);
  }
  console.error('Error:', err && err.message ? err.message : String(err));
  process.exit(2);
}

