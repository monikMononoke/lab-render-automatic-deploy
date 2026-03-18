import React from 'react';
import { getCharacters } from '../api/api';
import { Characters } from '../list.vm';
import { mapCharactersListToVm } from '../list.mapper';

export const useCharacterSearch = () => {
  const [characters, setCharacters] = React.useState<Characters[]>([]);
  const [allCharacters, setAllCharacters] = React.useState<Characters[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then(mapCharactersListToVm)
      .then((data) => {
        setAllCharacters(data);
        setCharacters(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    if (searchTerm === '') {
      setCharacters(allCharacters);
    } else {
      const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCharacters(filteredCharacters);
    }
  }, [searchTerm, allCharacters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    characters,
    searchTerm,
    isLoading,
    handleSearchChange,
  };
};
