import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeistComponent } from './create-heist.component';

describe('CreateHeistComponent', () => {
  let component: CreateHeistComponent;
  let fixture: ComponentFixture<CreateHeistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHeistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHeistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
