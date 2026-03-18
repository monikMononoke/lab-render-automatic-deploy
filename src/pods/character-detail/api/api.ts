import * as vm from '../detail.vm';

export const getCharacter = async (id: string): Promise<vm.Character> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};
