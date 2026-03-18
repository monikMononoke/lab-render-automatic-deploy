import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, CardMedia, Typography } from '@mui/material';
import * as vm from '../detail.vm';

interface Props {
  member: vm.MemberDetail;
}
export const MemberInfo: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <CardMedia component='img' image={member.avatar_url} />
      <CardContent>
        <Typography m={0}>Member login: {member.login}</Typography>

        <Typography>Member ID: {member.id}</Typography>
        <Typography>
          <Link to={'/members/list'}>Volver a la lista</Link>
        </Typography>
      </CardContent>
    </>
  );
};
