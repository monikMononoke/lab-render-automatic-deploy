import { useOrg } from '@/core/context/orgContext';
import React from 'react';
import { Input } from './input.component';

export const InputPod: React.FC = () => {
  const { org, setOrg } = useOrg();
  const [orgName, setOrgName] = React.useState(org);

  const handleSearch = () => {
    setOrg(orgName);
  };

  return (
    <>
      <Input
        setOrgName={setOrgName}
        handleSearch={handleSearch}
        orgName={orgName}
      />
    </>
  );
};
