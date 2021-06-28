/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('api practice app', () => {
  it('has a list characters including Rick and Morty', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Rick and Morty\b/i)).toBeInTheDocument();
  });
});
