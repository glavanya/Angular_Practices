import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4outputComponent } from './ex4output.component';

describe('Ex4outputComponent', () => {
  let component: Ex4outputComponent;
  let fixture: ComponentFixture<Ex4outputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex4outputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4outputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
