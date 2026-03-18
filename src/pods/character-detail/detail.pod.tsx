import React from 'react';
import { useParams } from 'react-router-dom';
import * as vm from './detail.vm';
import { getCharacter } from './api';
import { mapCharacterToVm } from './detail.mapper';
import { CharacterDetail } from './detail.component';

export const CharacterDetailPod: React.FC = () => {
  const [character, setCharacter] = React.useState<vm.Character>();
  const { id } = useParams();

  React.useEffect(() => {
    getCharacter(id).then(mapCharacterToVm).then(setCharacter);
  }, [id]);

  return <CharacterDetail character={character} />;
};
