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

const [,, op, aRaw, bRaw] = process.argv;

function printUsageAndExit() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(2);
}

if (!op || !aRaw || !bRaw) {
  printUsageAndExit();
}

const a = Number(aRaw);
const b = Number(bRaw);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: operands must be valid numbers');
  process.exit(2);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
    // addition
    result = a + b;
    break;
  case 'sub':
    // subtraction
    result = a - b;
    break;
  case 'mul':
    // multiplication
    result = a * b;
    break;
  case 'div':
    // division
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(3);
    }
    result = a / b;
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
