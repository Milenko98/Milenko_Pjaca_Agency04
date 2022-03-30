import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeistMember } from 'src/app/Models/heist-member';
import { MemberSkill } from 'src/app/Models/member-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css'],
})
export class UpdateSkillComponent implements OnInit {
  Name!: string;
  Level!: string;
  skillToUpdate!: MemberSkill;
  member!: HeistMember;
  skills!: Array<MemberSkill>;
  @Input() public id!: string;

  constructor(
    private heistService: HeistServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.heistService.getMemberById(this.id).subscribe(
      (res: any) => {
        if (res !== null) {
          this.member = res;
        } else {
        }
      },
      (err) => {
        console.log('Error!');
        console.log(err);
      }
    );

    this.skillToUpdate = this.heistService.getSkillToUpdate();
    var obj = JSON.parse(JSON.stringify(this.skillToUpdate));
    this.Name = obj.name;
    this.Level = obj.level;
  }

  onUpdateSkill() {
    var obj = JSON.parse(JSON.stringify(this.skillToUpdate));

    if (this.Name === obj.name && this.Level === obj.level) {
    } else {
      let updatedSkill = new MemberSkill(
        obj.id,
        this.Name,
        this.Level,
        obj.member,
        obj.HeistMemberId
      );

      let updatedMember = this.member;
      // updatedMember.membersSkills = this.skills;

      console.log(
        'skillovi za update: ' + JSON.stringify(updatedMember.membersSkills)
      );

      if (
        updatedMember.membersSkills !== undefined &&
        updatedMember.membersSkills.length !== 0
      ) {
        console.log('obj ' + JSON.stringify(obj));
        console.log('stari ' + JSON.stringify(this.skillToUpdate));
        console.log('novi ' + JSON.stringify(updatedSkill));

        let index = updatedMember.membersSkills.findIndex(
          (x) => x.id === obj.id
        );
        updatedMember.membersSkills[index] = updatedSkill;
      }

      this.heistService.updateSkill(updatedMember).subscribe(
        (res: any) => {
          if (res !== null) {
            console.log('Updated skill! Response: ' + res);
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
