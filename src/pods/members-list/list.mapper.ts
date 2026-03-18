import * as am from './api/api.model';
import * as vm from './list.vm';

export const mapMemberToVm = (member: am.Member): vm.Member => ({
  id: member.id,
  login: member.login,
  avatar_url: member.avatar_url,
});

export const mapMemberListToVm = (members: am.Member[]): vm.Member[] =>
  members.map((member) => mapMemberToVm(member));
