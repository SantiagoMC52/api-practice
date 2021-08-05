/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../utils/test.utils';
import Location from './index';

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

describe('Location component', () => {
  test('should contain text Dimension ', () => {
    render(<Location />, container);
    expect(screen.getByText(/Dimension/i)).toBeInTheDocument();
  });
});
