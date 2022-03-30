import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberSkill } from 'src/app/Models/member-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
})
export class AddSkillsComponent implements OnInit {
  Name!: string;
  Level!: string;
  skills = new Array<MemberSkill>();
  @Input() public id!: string;
  constructor(
    private heistService: HeistServiceService,
    private changeDetection: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onAddSkill() {
    let skill = new MemberSkill(0, this.Name, this.Level, 0, parseInt(this.id));
    if (!this.checkLevel(this.Level)) {
      alert('Neispravan unos skill-a');
    } else {
      this.skills.push(skill);
      this.changeDetection.detectChanges();
      this.Name = '';
      this.Level = '';
    }
  }

  onSave() {
    this.heistService.addMemberSkills(this.skills, this.id).subscribe(
      (res: any) => {
        if (res !== null) {
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

  deleteSkill(index: any) {
    this.skills.splice(index, 1);
  }

  checkLevel(level: string) {
    if (level !== undefined) {
      let n = level.length;
      if (n === 0) {
        return false;
      } else {
        for (let i = 1; i < n; i++) {
          if (n > 10) {
            return false;
          } else if (level[0] !== '*') {
            return false;
          } else if (level[i] !== level[0]) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }
}
