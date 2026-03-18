import React from 'react';
import { InputPod } from '@/pods/input';
import { ListPod } from '@/pods/members-list';

export const MembersListScene: React.FC = () => {
  return (
    <>
      <InputPod />
      <ListPod />
    </>
  );
};
