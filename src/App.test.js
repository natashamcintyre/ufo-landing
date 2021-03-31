import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const canvasElement = document.getElementsByTagName("canvas")[0];
  expect(canvasElement).toBeInTheDocument();
});
