export class MemberSkill {
  id: number;
  name: string;
  level: string;
  heistMember: any;
  heistMemberId: number;

  constructor(
    id: number,
    name: string,
    level: string,
    member: any,
    memberId: number
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.heistMember = member;
    this.heistMemberId = memberId;
  }
}
