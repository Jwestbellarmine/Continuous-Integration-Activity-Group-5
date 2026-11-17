import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkMultiplicationZero() {
  // Arrange
  const a = 3;
  const b = 0;
  const expected = 0;

  // Action
  const actual = calculate(a, b, 'multiply');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('multiplies a number by 0', checkMultiplicationZero);