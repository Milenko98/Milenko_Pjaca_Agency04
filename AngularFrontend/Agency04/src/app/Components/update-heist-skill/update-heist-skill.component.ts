import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Heist } from 'src/app/Models/heist';
import { HeistMember } from 'src/app/Models/heist-member';
import { HeistSkill } from 'src/app/Models/heist-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-update-heist-skill',
  templateUrl: './update-heist-skill.component.html',
  styleUrls: ['./update-heist-skill.component.css'],
})
export class UpdateHeistSkillComponent implements OnInit {
  Name!: string;
  Level!: string;
  MembersNum!: string;
  skillToUpdate!: HeistSkill;
  heist!: Heist;
  skills!: Array<HeistSkill>;
  @Input() public id!: string;

  constructor(
    private heistService: HeistServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.heistService.getHeistById(this.id).subscribe(
      (res: any) => {
        if (res !== null) {
          this.heist = res;
        } else {
        }
      },
      (err) => {
        console.log('Error!');
        console.log(err);
      }
    );

    this.skillToUpdate = this.heistService.getHeistSkillToUpdate();
    var obj = JSON.parse(JSON.stringify(this.skillToUpdate));
    this.Name = obj.name;
    this.Level = obj.level;
    this.MembersNum = obj.members;
  }

  onUpdateSkill() {
    var obj = JSON.parse(JSON.stringify(this.skillToUpdate));

    if (
      this.Name === obj.name &&
      this.Level === obj.level &&
      parseInt(this.MembersNum) === obj.members
    ) {
    } else {
      let updatedSkill = new HeistSkill(
        obj.id,
        this.Name,
        this.Level,
        parseInt(this.MembersNum),
        obj.heistId
      );

      let updatedHeist = this.heist;
      // updatedMember.membersSkills = this.skills;

      console.log(
        'skillovi za update: ' + JSON.stringify(updatedHeist.heistsSkills)
      );

      if (
        updatedHeist.heistsSkills !== undefined &&
        updatedHeist.heistsSkills.length !== 0
      ) {
        let index = updatedHeist.heistsSkills.findIndex((x) => x.id === obj.id);
        updatedHeist.heistsSkills[index] = updatedSkill;
      }

      this.heistService.updateHeistSkill(updatedHeist).subscribe(
        (res: any) => {
          if (res !== null) {
            console.log('Updated heist skill! Response: ' + res);
          } else {
          }
        },
        (err) => {
          console.log('Error!');
          console.log(err);
        }
      );
      this.dialog.closeAll();
    }
  }
}
