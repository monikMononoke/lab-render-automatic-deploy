import { Grid } from '@mui/material';
import React from 'react';

export const TableHeader: React.FC = () => {
  return (
    <Grid container p={2} columnGap={2} className='Mui-list-header'>
      <Grid size={2}>Avatar</Grid>
      <Grid size={4}>Id</Grid>
      <Grid size={4}>Name</Grid>
    </Grid>
  );
};
