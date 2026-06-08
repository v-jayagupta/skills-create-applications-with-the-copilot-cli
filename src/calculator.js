#!/usr/bin/env node
'use strict';

/**
 * Node.js CLI Calculator
 * Supported operations:
 *  - add: addition (+)
 *  - sub: subtraction (-)
 *  - mul: multiplication (×)
 *  - div: division (÷)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3    -> 5
 *   node src/calculator.js sub 5 2    -> 3
 *   node src/calculator.js mul 4 6    -> 24
 *   node src/calculator.js div 10 2   -> 5
 *
 * Exit codes:
 *   0 - success
 *   2 - invalid input or usage
 *   3 - division by zero
 */

const { add, sub, mul, div } = require('./calculator-core');
const [,, op, aRaw, bRaw] = process.argv;

function printUsageAndExit() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(2);
}

if (!op || !aRaw || !bRaw) {
  printUsageAndExit();
}

try {
  let result;
  switch (op.toLowerCase()) {
    case 'add':
      // addition
      result = add(aRaw, bRaw);
      break;
    case 'sub':
      // subtraction
      result = sub(aRaw, bRaw);
      break;
    case 'mul':
      // multiplication
      result = mul(aRaw, bRaw);
      break;
    case 'div':
      // division
      result = div(aRaw, bRaw);
      break;
    default:
      console.error(`Error: unknown operation '${op}'. Supported: add, sub, mul, div`);
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

