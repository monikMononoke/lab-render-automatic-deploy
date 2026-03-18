import React from 'react';
import { Link } from 'react-router-dom';
import * as vm from '../detail.vm';
import { CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  character: vm.Character;
}

export const CharacterInfo: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <CardMedia component='img' image={character.image} />
      <CardContent>
        <Typography m={0}>
          <span>Name:</span> {character.name}
        </Typography>
        <Typography>
          <span>Specie: </span>
          {character.species}
        </Typography>
        <Typography>
          <span>Location: </span>
          {character.location.name}
        </Typography>
        <Typography>
          <Link to={'/characters/list'}>Back to list</Link>
        </Typography>
      </CardContent>
    </>
  );
};
