import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedMemberSkillComponent } from './deleted-member-skill.component';

describe('DeletedMemberSkillComponent', () => {
  let component: DeletedMemberSkillComponent;
  let fixture: ComponentFixture<DeletedMemberSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedMemberSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedMemberSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
