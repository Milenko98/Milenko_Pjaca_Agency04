import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeistSkill } from 'src/app/Models/heist-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-add-heist-skills',
  templateUrl: './add-heist-skills.component.html',
  styleUrls: ['./add-heist-skills.component.css'],
})
export class AddHeistSkillsComponent implements OnInit {
  Name!: string;
  Level!: string;
  MembersNum!: string;
  skills = new Array<HeistSkill>();
  @Input() public id!: string;
  constructor(
    private heistService: HeistServiceService,
    private changeDetection: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onAddSkill() {
    let skill = new HeistSkill(
      0,
      this.Name,
      this.Level,
      parseInt(this.MembersNum),
      parseInt(this.id)
    );
    if (!this.checkLevel(this.Level)) {
      alert('Level is not valid (only "*" signs!).');
    } else if (
      isNaN(parseInt(this.MembersNum)) ||
      this.MembersNum === undefined ||
      this.MembersNum.length === 0
    ) {
      alert('Required members must be number!');
    } else if (
      this.Name === undefined ||
      this.Name.length === 0 ||
      !isNaN(parseInt(this.Name))
    ) {
      alert('Skill name is not valid!');
    } else {
      this.skills.push(skill);
      this.changeDetection.detectChanges();
      this.Name = '';
      this.Level = '';
    }
  }

  onSave() {
    this.heistService.addHeistSkills(this.skills, this.id).subscribe(
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
