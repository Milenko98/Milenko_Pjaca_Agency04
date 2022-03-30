import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeistSkillsComponent } from './add-heist-skills.component';

describe('AddHeistSkillsComponent', () => {
  let component: AddHeistSkillsComponent;
  let fixture: ComponentFixture<AddHeistSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeistSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeistSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
