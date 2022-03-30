import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MemberSkill } from 'src/app/Models/member-skill';
import { HeistMember } from 'src/app/Models/heist-member';
import { Router } from '@angular/router';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-create-heist-member',
  templateUrl: './create-heist-member.component.html',
  styleUrls: ['./create-heist-member.component.css'],
})
export class CreateHeistMemberComponent implements OnInit {
  courseForm!: FormGroup;
  skills = new Array<MemberSkill>();
  Name!: string;
  Level!: string;
  formBuilder: any;
  objects: FormArray = new FormArray([]);
  male: boolean = true;
  female!: boolean;
  statusList = new Array<string>();

  constructor(
    private fb: FormBuilder,
    private changeDetection: ChangeDetectorRef,
    private route: Router,
    private heistService: HeistServiceService
  ) {}

  ngOnInit(): void {
    this.statusList = ['AVAILABLE', 'EXPIRED', 'INCARCERATED', 'RETIRED'];
    this.initForm();
  }

  onSubmit() {
    let sex = '';
    if (this.skills !== undefined && this.skills.length === 0) {
      alert('Dodajte skilove!');
    } else {
      if (this.male) {
        sex = 'M';
      } else {
        sex = 'F';
      }
      if (
        !this.statusList.includes(
          this.courseForm.get('status')?.value.toUpperCase()
        )
      ) {
        alert('Status nije ispravan!');
      } else {
        let heistMember = new HeistMember(
          0,
          this.courseForm.get('name')?.value,
          sex,
          this.courseForm.get('email')?.value,
          this.skills,
          this.courseForm.get('mainSkill')?.value,
          this.courseForm.get('status')?.value
        );
        this.heistService.addMember(heistMember).subscribe((res) => {
          this.route
            .navigate(['/HeistMembers'])
            .then(() => window.location.reload());
        });
      }
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
    let skill = new MemberSkill(0, this.Name, this.Level, 0, 0);
    if (!this.checkLevel(this.Level)) {
      alert('Neispravan unos skill-a');
    } else {
      this.skills.push(skill);
      this.changeDetection.detectChanges();
      this.Name = '';
      this.Level = '';
    }
  }

  maleChange() {
    this.male = true;
    this.female = false;
  }

  femaleChange() {
    this.male = false;
    this.female = true;
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
      email: new FormControl('', [Validators.required, Validators.email]),
      mainSkill: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      status: new FormControl('', Validators.required),
    });
  }
}
