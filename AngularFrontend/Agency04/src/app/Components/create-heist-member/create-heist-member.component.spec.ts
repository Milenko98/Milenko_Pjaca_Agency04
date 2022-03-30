import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeistMemberComponent } from './create-heist-member.component';

describe('CreateHeistMemberComponent', () => {
  let component: CreateHeistMemberComponent;
  let fixture: ComponentFixture<CreateHeistMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHeistMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHeistMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
