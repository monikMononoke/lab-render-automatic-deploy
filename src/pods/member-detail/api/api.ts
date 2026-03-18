import { MemberDetail } from './api.model';

export const getMemberDetail = async (login: string): Promise<MemberDetail> =>
  fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
