import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

// Define the function separately
function checkDivisionZero() {
  // Arrange
  const a = 3;
  const b = 0;

  // Action
  const action = () => calculate(a, b, 'divide');

  // Assert
  assert.throws(action , /Cannot divide by zero/);
}

// Register the function as a test
test('divides by zero', checkDivisionZero);