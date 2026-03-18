import React from 'react';
import { List } from './list.component';
import { useOrg } from '@/core/context/orgContext';
import { getMemberList } from './api';
import { mapMemberListToVm } from './list.mapper';
import { Member } from './list.vm';

export const ListPod: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const { org } = useOrg();

  React.useEffect(() => {
    setError(false);
    getMemberList(org)
      .then(mapMemberListToVm)
      .then(setMembers)
      .catch(() => {
        setError(true);
        setMembers([]);
      });
  }, [org]);

  return <>{members ? <List members={members} /> : <h1>Loading ...</h1>}</>;
};
