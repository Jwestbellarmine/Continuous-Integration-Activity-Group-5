import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkDivision() {
  // Arrange
  const a = 12;
  const b = 4;
  const expected = 3;

  // Action
  const actual = calculate(a, b, 'divide');

  // Assert
  assert.equal(actual, expected);
}

// Register the function as a test
test('divides two numbers', checkDivision);