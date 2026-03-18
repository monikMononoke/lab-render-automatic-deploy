import * as am from './api';
import * as vm from './list.vm';

export const mapCharactersListToVm = (
  apiModel: am.Characters[]
): vm.Characters[] => apiModel.map((character) => mapCharacterToVm(character));

export const mapCharacterToVm = (apiModel: am.Characters): vm.Characters => ({
  id: apiModel.id,
  name: apiModel.name,
  species: apiModel.species,
  image: apiModel.image,
});
