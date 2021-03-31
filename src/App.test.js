import React from 'react'
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div)
})

test('renders canvas', () => {
  render(<App />);
  const canvasElement = document.getElementsByTagName("canvas")[0];
  expect(canvasElement).toBeInTheDocument();
});
