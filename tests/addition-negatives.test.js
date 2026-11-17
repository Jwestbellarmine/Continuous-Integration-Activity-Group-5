import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkNegativeAddition() {
  // Arrange
  const a = -3;
  const b = 4;
  const expected = 1;

  // Action
  const actual = calculate(a, b, 'add');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('adds a negative and positive number', checkNegativeAddition);