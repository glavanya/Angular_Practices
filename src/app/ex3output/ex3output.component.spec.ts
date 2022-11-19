import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3outputComponent } from './ex3output.component';

describe('Ex3outputComponent', () => {
  let component: Ex3outputComponent;
  let fixture: ComponentFixture<Ex3outputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3outputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3outputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
