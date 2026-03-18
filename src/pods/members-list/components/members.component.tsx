import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import * as vm from '../list.vm';
import { Grid } from '@mui/material';

interface Props {
  member: vm.Member;
}

export const Members: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <Grid
        container
        p={2}
        columnGap={2}
        className='Mui-member-row'
        key={member.id}
      >
        <Grid size={2}>
          <img src={member.avatar_url} alt={`Avatar de ${member.login}`} />
        </Grid>
        <Grid size={4}>
          <Link
            to={generatePath('/members/detail/:login', {
              login: member.login,
            })}
          >
            {member.login}
          </Link>
        </Grid>
        <Grid size={4}>
          <span>{member.id}</span>
        </Grid>
      </Grid>
    </>
  );
};
