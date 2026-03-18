import { Member } from '../list.vm';

export const getMemberList = async (org: string): Promise<Member[]> => {
  const response = await fetch(`https://api.github.com/orgs/${org}/members`);

  if (!response.ok) {
    throw new Error('Organization not found');
  }

  return response.json();
};
