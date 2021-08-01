/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/test.utils';
import Dashboard from './index';

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

describe('Dashboard component', () => {
  test('should contain text Rick and Morty ', () => {
    render(<Dashboard />, container);
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
  });
});
