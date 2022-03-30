import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heist } from '../Models/heist';
import { HeistMember } from '../Models/heist-member';
import { HeistSkill } from '../Models/heist-skill';
import { MemberSkill } from '../Models/member-skill';

@Injectable({
  providedIn: 'root',
})
export class HeistServiceService {
  constructor(private http: HttpClient) {}

  // readonly BaseURI = 'https://localhost:44360/api';
  readonly BaseURI = 'https://localhost:44319/api';

  skills = new Array<MemberSkill>();
  newMember: any;
  updatedSkill!: MemberSkill;
  skillToUpdate!: MemberSkill;
  heistSkillToUpdate!: HeistSkill;
  memberId!: number;
  heistId!: number;
  member!: HeistMember;
  heist!: Heist;

  sendSkills(skills: Array<MemberSkill>) {
    this.skills = skills;
  }

  getSkills() {
    return this.skills;
  }

  addMember(member: any) {
    console.log('usaooooo' + member);
    return this.http.post(this.BaseURI + '/HeistMember/member', member);
  }

  addHeist(heist: any) {
    console.log('usaooooo' + JSON.stringify(heist));
    return this.http.post(this.BaseURI + '/Heist/heist', heist);
  }

  getMembers() {
    return this.http.get<Array<HeistMember>>(
      this.BaseURI + '/HeistMember/members'
    );
  }

  getHeists() {
    return this.http.get<Array<Heist>>(this.BaseURI + '/Heist/heists');
  }

  getSkillsDB(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<Array<MemberSkill>>(
      this.BaseURI + '/HeistMember/member/' + id + '/skills',
      { params: params }
    );
  }

  getHeistSkills(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<Array<HeistSkill>>(
      this.BaseURI + '/Heist/heist/' + id + '/skills',
      { params: params }
    );
  }

  deleteSkill(id: number, name: string) {
    let params = new HttpParams().set('id', id.toString());
    params = params.set('name', name);
    return this.http.delete(
      this.BaseURI + '/HeistMember/member/' + id + '/skills/' + name,
      { params: params }
    );
  }

  sendSkillToUpdate(skill: MemberSkill) {
    this.skillToUpdate = skill;
  }

  getSkillToUpdate() {
    return this.skillToUpdate;
  }

  sendHeistSkillToUpdate(skill: HeistSkill) {
    this.heistSkillToUpdate = skill;
  }

  getHeistSkillToUpdate() {
    return this.heistSkillToUpdate;
  }

  sendMemberId(memberId: number) {
    this.memberId = memberId;
  }

  sendHeistId(heistId: number) {
    this.heistId = heistId;
  }

  updateSkill(member: HeistMember) {
    let params = new HttpParams().set('memberId', this.memberId.toString());
    return this.http.put(
      this.BaseURI + '/HeistMember/member/' + this.memberId + '/skills',
      member,
      { params: params }
    );
  }

  updateHeistSkill(heist: Heist) {
    let params = new HttpParams().set('id', this.heistId.toString());
    return this.http.patch(
      this.BaseURI + '/Heist/heist/' + this.heistId + '/skills',
      heist,
      { params: params }
    );
  }

  sendMember(member: HeistMember) {
    this.member = member;
  }

  sendHeist(heist: Heist) {
    this.heist = heist;
  }

  addMemberSkills(skills: Array<MemberSkill>, id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.post(
      this.BaseURI + '/HeistMember/memberr/' + id + '/skills',
      skills,
      { params: params }
    );
  }

  addHeistSkills(skills: Array<HeistSkill>, id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.post(
      this.BaseURI + '/Heist/heistt/' + id + '/skills',
      skills,
      { params: params }
    );
  }

  getMember() {
    return this.member;
  }

  getMemberById(id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.get<HeistMember>(
      this.BaseURI + '/HeistMember/memberr/' + id,
      { params: params }
    );
  }

  getHeistById(id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.get<Heist>(this.BaseURI + '/Heist/heistt/' + id, {
      params: params,
    });
  }

  getMemberSkills(id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.get<Array<MemberSkill>>(
      this.BaseURI + '/HeistMember/memberr/' + id + '/skillss',
      { params: params }
    );
  }
}
