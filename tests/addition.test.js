import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkAddition() {
  // Arrange
  const a = 2;
  const b = 3;
  const expected = 5;

  // Action
  const actual = calculate(a, b, 'add');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('adds two numbers', checkAddition);