/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import CHARACTERS from './constants/data-mock';

describe('api practice app', () => {
  it('has a list characters including Rick and Morty', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Rick and Morty\b/i)).toBeInTheDocument();
  });
});

describe('Pokémon app', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  it('shows a list of Pokémons retrieved from an API', async () => {
    // Modificamos el comportamiento de la función fetch
    // para que devuelva los resultados que nos interesan, en lugar
    // de ejecutarse
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => CHARACTERS
    });

    render(<App />);

    // Comprobamos que se han obtenido los resultados utilizando fetch
    expect(window.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
    expect(window.fetch).toHaveBeenCalledTimes(1);

    // Comprobamos que la aplicación renderiza la colección de resultados proporcionada por el mock
    for (const character of CHARACTERS) {
      expect(await screen.findByText(new RegExp(`${character.name}\\b`, 'i'))).toBeInTheDocument();
    }
  });
});
