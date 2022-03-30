import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyHeistsComponent } from './ready-heists.component';

describe('ReadyHeistsComponent', () => {
  let component: ReadyHeistsComponent;
  let fixture: ComponentFixture<ReadyHeistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyHeistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyHeistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
