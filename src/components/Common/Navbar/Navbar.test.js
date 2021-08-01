/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../utils/test.utils';
import Navbar from './index';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Navbar component', () => {
  test('should contain text Characters ', () => {
    render(<Navbar />, container);
    expect(screen.getByText(/Characters/i)).toBeInTheDocument();
  });
});
