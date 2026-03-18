import React from 'react';
import * as vm from './detail.vm';
import { MemberInfo } from './components/card.component';
import { Card, CardContent, CardHeader } from '@mui/material';

interface Props {
  member: vm.MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <Card sx={{ backgroundColor: '#D1C4E9' }}>
        <CardHeader title='User details' />
        <CardContent>
          {member && <MemberInfo key={member.id} member={member} />}
        </CardContent>
      </Card>
    </>
  );
};
