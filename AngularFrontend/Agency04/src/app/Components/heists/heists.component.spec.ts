import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeistsComponent } from './heists.component';

describe('HeistsComponent', () => {
  let component: HeistsComponent;
  let fixture: ComponentFixture<HeistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
