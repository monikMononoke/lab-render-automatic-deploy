import * as vm from '../list.vm';

export const getCharacters = async (): Promise<vm.Characters[]> =>
  await fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => data.results);
