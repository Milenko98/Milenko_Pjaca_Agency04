import { MemberSkill } from './member-skill';

export class HeistMember {
  id: number;
  name: string;
  sex: string;
  email: string;
  membersSkills: Array<MemberSkill>;
  mainSkill: string;
  status: string;

  constructor(
    id: number,
    name: string,
    sex: string,
    email: string,
    memberskills: Array<MemberSkill>,
    mainskill: string,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.email = email;
    this.membersSkills = memberskills;
    this.mainSkill = mainskill;
    this.status = status;
  }
}
