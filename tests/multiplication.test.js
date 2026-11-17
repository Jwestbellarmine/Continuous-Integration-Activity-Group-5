import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkMultiplication() {
  // Arrange
  const a = 3;
  const b = 4;
  const expected = 12;

  // Action
  const actual = calculate(a, b, 'multiply');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('multiplies two numbers', checkMultiplication);