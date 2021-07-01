export default async function getCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    return results;
  } catch (error) {
    return error;
  }
}
