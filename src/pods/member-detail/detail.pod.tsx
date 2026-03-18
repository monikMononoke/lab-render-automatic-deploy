import React from 'react';
import { useParams } from 'react-router-dom';
import { MemberDetail } from './detail.vm';
import { Detail } from './detail.component';
import { getMemberDetail } from './api';
import { mapMemberDetailToVM } from './detail.mapper';

export const DetailPod: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    getMemberDetail(login).then(mapMemberDetailToVM).then(setMember);
  }, [login]);

  return member && <Detail member={member} />;
};
