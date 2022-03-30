import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutComeHeistsComponent } from './out-come-heists.component';

describe('OutComeHeistsComponent', () => {
  let component: OutComeHeistsComponent;
  let fixture: ComponentFixture<OutComeHeistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutComeHeistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutComeHeistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
