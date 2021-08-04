/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/test.utils';
import List from './index';

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

describe('List component', () => {
  test('should contain text Home ', () => {
    render(<List />, container);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
