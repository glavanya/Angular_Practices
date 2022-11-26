import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex12obsComponent } from './ex12obs.component';

describe('Ex12obsComponent', () => {
  let component: Ex12obsComponent;
  let fixture: ComponentFixture<Ex12obsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex12obsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex12obsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
