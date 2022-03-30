export class HeistSkill {
  id: number;
  name: string;
  level: string;
  members: number;
  heistId: number;

  constructor(
    id: number,
    name: string,
    level: string,
    members: number,
    heistId: number
  ) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.level = level;
    this.heistId = heistId;
  }
}
