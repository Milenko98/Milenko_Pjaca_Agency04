import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeistSkillComponent } from './update-heist-skill.component';

describe('UpdateHeistSkillComponent', () => {
  let component: UpdateHeistSkillComponent;
  let fixture: ComponentFixture<UpdateHeistSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHeistSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHeistSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
