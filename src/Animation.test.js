import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import UfoAnimation from './Animation';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UfoAnimation />, div)
})

test('renders canvas', () => {
  render(<UfoAnimation />);

});
