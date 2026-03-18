import * as React from 'react';
import * as vm from './list.vm';

import { AppPagination, useListPagination } from '../pagination';
import { Characters, TableHeader } from './components';

interface Props {
  characters: vm.Characters[];
  itemsPerPage?: number;
}

export const List: React.FC<Props> = (props) => {
  const { characters, itemsPerPage = 4 } = props;

  const { currentPage, totalPages, onPageChange, getPageItems } =
    useListPagination({
      totalItems: characters.length,
      itemsPerPage,
      initialPage: 1,
    });

  const currentCharacters = getPageItems(characters);

  return (
    <div>
      <TableHeader />
      {currentCharacters.map((character) => (
        <Characters character={character} key={character.id} />
      ))}
      {totalPages > 1 && (
        <AppPagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
        />
      )}
    </div>
  );
};
