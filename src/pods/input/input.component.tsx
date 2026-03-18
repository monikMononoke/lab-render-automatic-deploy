import React from 'react';
import { Button, Stack, TextField } from '@mui/material';

interface Props {
  orgName: string;
  setOrgName(orgName: string): void;
  handleSearch(): void;
}

export const Input: React.FC<Props> = (props) => {
  const { orgName, setOrgName, handleSearch } = props;

  return (
    <Stack direction='row' alignItems='center' spacing={3} p={2} m={0}>
      <TextField
        variant='outlined'
        sx={{ width: 300 }}
        color='secondary'
        size='small'
        type='text'
        label='Organization'
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
      />
      <Button
        size='medium'
        variant='contained'
        color='secondary'
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
};
