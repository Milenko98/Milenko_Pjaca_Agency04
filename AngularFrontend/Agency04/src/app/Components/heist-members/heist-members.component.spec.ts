import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeistMembersComponent } from './heist-members.component';

describe('HeistMembersComponent', () => {
  let component: HeistMembersComponent;
  let fixture: ComponentFixture<HeistMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeistMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeistMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
