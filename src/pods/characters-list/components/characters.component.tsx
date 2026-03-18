import React from 'react';
import * as vm from '../list.vm';
import { generatePath, Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

interface Props {
  character: vm.Characters;
}

export const Characters: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <Grid
        container
        p={2}
        columnGap={2}
        className='Mui-member-row'
        key={character.id}
      >
        <Grid size={2}>
          <img src={character.image} alt={character.name} />
        </Grid>
        <Grid size={4}>
          <Link
            to={generatePath('/characters/detail/:id', {
              id: character.id.toString(),
            })}
          >
            {character.name}
          </Link>
        </Grid>
        <Grid size={4}>
          <span>{character.species}</span>
        </Grid>
      </Grid>
    </>
  );
};
