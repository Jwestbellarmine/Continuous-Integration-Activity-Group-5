import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkSubtraction() {
  // Arrange
  const a = 5;
  const b = 2;
  const expected = 3;

  // Action
  const actual = calculate(a, b, 'subtract');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('subtracts two numbers', checkSubtraction);