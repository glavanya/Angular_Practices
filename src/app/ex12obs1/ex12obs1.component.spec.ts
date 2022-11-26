import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex12obs1Component } from './ex12obs1.component';

describe('Ex12obs1Component', () => {
  let component: Ex12obs1Component;
  let fixture: ComponentFixture<Ex12obs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex12obs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex12obs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
