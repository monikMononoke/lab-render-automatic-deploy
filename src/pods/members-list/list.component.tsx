import * as React from 'react';
import { Member } from './list.vm';
import { AppPagination, useListPagination } from '../pagination';
import { Members, TableHeader } from './components';

interface Props {
  members: Member[];
  itemsPerPage?: number;
}

export const List: React.FC<Props> = (props) => {
  const { members, itemsPerPage = 4 } = props;

  const { currentPage, totalPages, onPageChange, getPageItems } =
    useListPagination({
      totalItems: members.length,
      itemsPerPage,
      initialPage: 1,
    });

  const currentMembers = getPageItems(members);

  return (
    <div>
      <TableHeader />
      {currentMembers.map((member) => (
        <Members member={member} key={member.id} />
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
