import React from 'react';
import { Box, Pagination, PaginationProps } from '@mui/material';

interface AppPaginationProps extends Omit<PaginationProps, 'count'> {
  count: number;
}

export const AppPagination: React.FC<AppPaginationProps> = ({
  count,
  ...props
}) => {
  if (count <= 1) return null;

  return (
    <Box display='flex' justifyContent='center' sx={{ m: '20px 0' }}>
      <Pagination
        count={count}
        variant='outlined'
        color='primary'
        {...props}
        sx={{
          '& .MuiPaginationItem-root': { fontWeight: 500 },
          '& .Mui-selected': { fontWeight: 600 },
          ...props.sx,
        }}
      />
    </Box>
  );
};
