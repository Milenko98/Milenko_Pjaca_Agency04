import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Heist } from 'src/app/Models/heist';
import { HeistSkill } from 'src/app/Models/heist-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-create-heist',
  templateUrl: './create-heist.component.html',
  styleUrls: ['./create-heist.component.css'],
})
export class CreateHeistComponent implements OnInit {
  courseForm!: FormGroup;
  skills = new Array<HeistSkill>();
  Name!: string;
  Level!: string;
  formBuilder: any;
  objects: FormArray = new FormArray([]);
  MembersNum!: string;

  constructor(
    private fb: FormBuilder,
    private changeDetection: ChangeDetectorRef,
    private route: Router,
    private heistService: HeistServiceService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let sex = '';
    if (this.skills !== undefined && this.skills.length === 0) {
      alert('Dodajte skilove!');
    } else {
      let heist = new Heist(
        0,
        this.courseForm.get('name')?.value,
        this.courseForm.get('location')?.value,
        this.courseForm.get('startTime')?.value,
        this.courseForm.get('endTime')?.value,
        this.skills,
        this.courseForm.get('status')?.value
      );
      this.heistService.addHeist(heist).subscribe((res) => {
        this.route.navigate(['/Heists']).then(() => window.location.reload());
      });
    }
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

  onCancel() {
    this.route.navigate(['/HeistMembers']);
  }

  onAddSkill() {
    let skill = new HeistSkill(
      0,
      this.Name,
      this.Level,
      parseInt(this.MembersNum),
      0
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
      this.MembersNum = '';
    }
  }

  deleteSkill(index: any) {
    this.skills.splice(index, 1);
  }

  private initForm() {
    this.courseForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', Validators.required),
      status: new FormControl('Planning', Validators.required),
    });
  }
}
