import * as am from './api/api.model';
import * as vm from './detail.vm';

export const mapMemberDetailToVM = (
  member: am.MemberDetail
): vm.MemberDetail => ({
  id: member.id,
  login: member.login,
  name: member.name,
  org: member.company,
  bio: member.bio,
  avatar_url: member.avatar_url,
});
