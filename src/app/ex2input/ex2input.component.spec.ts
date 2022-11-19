import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2inputComponent } from './ex2input.component';

describe('Ex2inputComponent', () => {
  let component: Ex2inputComponent;
  let fixture: ComponentFixture<Ex2inputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2inputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2inputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
