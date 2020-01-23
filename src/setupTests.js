// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith('Warning:')) return;
  originalConsoleError(message);
};
