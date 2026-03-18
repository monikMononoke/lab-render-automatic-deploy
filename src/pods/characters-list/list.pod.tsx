import React from 'react';
import { List } from './list.component';
import { useCharacterSearch } from './hooks/useCharacterSearch';
import { Input } from './components';

export const ListPod: React.FC = () => {
  const { characters, searchTerm, isLoading, handleSearchChange } =
    useCharacterSearch();

  return (
    <>
      <Input searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {characters.length > 0 ? (
            <List characters={characters} />
          ) : (
            <p>No se encontraron personajes con ese nombre.</p>
          )}
        </>
      )}
    </>
  );
};
