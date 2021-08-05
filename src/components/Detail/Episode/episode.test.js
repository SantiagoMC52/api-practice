/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../utils/test.utils';
import Episode from './index';

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

describe('Episode component', () => {
  test('should contain text Episode name ', () => {
    render(<Episode />, container);
    expect(screen.getByText(/Episode name/i)).toBeInTheDocument();
  });
});
