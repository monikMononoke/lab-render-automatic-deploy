import { PaginationProps } from '@mui/material';

export interface AppPaginationProps extends Omit<PaginationProps, 'count'> {
  count: number;
}

export interface CustomPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export interface CustomPaginationReturn {
  currentPage: number;
  totalPages: number;
  getPageItems: <T>(items: T[]) => T[];
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
