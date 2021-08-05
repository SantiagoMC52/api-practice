/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../utils/test.utils';
import Character from './index';

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

describe('Character component', () => {
  test('should contain text Status ', () => {
    render(<Character />, container);
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });
});
