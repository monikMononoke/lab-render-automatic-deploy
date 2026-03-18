import React from 'react';
import { CustomPaginationProps, CustomPaginationReturn } from './model';

export const useListPagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: CustomPaginationProps): CustomPaginationReturn => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]);

  const getPageItems = React.useCallback(
    <T,>(items: T[]): T[] => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return items.slice(startIndex, startIndex + itemsPerPage);
    },
    [currentPage, itemsPerPage]
  );

  const onPageChange = React.useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    },
    []
  );

  return {
    currentPage,
    totalPages,
    getPageItems,
    onPageChange,
  };
};
