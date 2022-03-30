import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersProfileComponent } from './members-profile.component';

describe('MembersProfileComponent', () => {
  let component: MembersProfileComponent;
  let fixture: ComponentFixture<MembersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
