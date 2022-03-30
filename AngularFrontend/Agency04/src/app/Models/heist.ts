import { HeistSkill } from './heist-skill';

export class Heist {
  id: number;
  name: string;
  location: string;
  startTime: string;
  endTime: string;
  heistsSkills: Array<HeistSkill>;
  status: string;

  constructor(
    id: number,
    name: string,
    location: string,
    startTime: string,
    endTime: string,
    heistsSkills: Array<HeistSkill>,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.heistsSkills = heistsSkills;
    this.status = status;
  }
}
