import { calculate } from './calculator.js';
const form = document.querySelector('#calculator');
const result = document.querySelector('#result');
const error = document.querySelector('#error');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.textContent = '';
  error.textContent = '';
  const first = document.querySelector('#first').value.trim();
  const second = document.querySelector('#second').value.trim();
  if (first === '' || second === '') {
    error.textContent = 'Enter both numbers.';
    return;
  }
  const a = Number(first);
  const b = Number(second);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    error.textContent = 'Enter valid numbers.';
    return;
  }
  try {
    const answer = calculate(a, b, document.querySelector('#operation').value);
    result.textContent = `Result: ${Number(answer.toFixed(10))}`;
  } catch (err) {
    error.textContent = err.message;
  }
});
