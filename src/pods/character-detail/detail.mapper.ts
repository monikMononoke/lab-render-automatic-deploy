import * as am from './api/api.model';
import * as vm from './detail.vm';

export const mapCharacterToVm = (apiModel: am.Character): vm.Character => ({
  id: apiModel.id,
  name: apiModel.name,
  species: apiModel.species,
  image: apiModel.image,
  location: apiModel.location,
});
