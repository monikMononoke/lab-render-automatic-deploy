import React from 'react';
import { Character } from './detail.vm';
import { CharacterInfo } from './components';
import { Card, CardContent, CardHeader } from '@mui/material';

interface Props {
  character: Character;
}

export const CharacterDetail: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <Card sx={{ backgroundColor: '#D1C4E9' }}>
        <CardHeader title='Character details' />
        <CardContent>
          {character && (
            <CharacterInfo key={character.id} character={character} />
          )}
        </CardContent>
      </Card>
    </>
  );
};
