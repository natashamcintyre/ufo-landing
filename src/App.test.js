import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import ReactDOM from 'react-dom'
import scale from './scale'
import App from './App'

jest.mock('./scale')

test('renders without crashing', () => {
  render(<App />)
})

test('renders canvas', () => {
  render(<App />);
  const canvasElement = document.getElementsByTagName("canvas")[0];
  expect(canvasElement).toBeInTheDocument();
});
