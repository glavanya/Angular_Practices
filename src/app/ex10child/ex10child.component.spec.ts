import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10childComponent } from './ex10child.component';

describe('Ex10childComponent', () => {
  let component: Ex10childComponent;
  let fixture: ComponentFixture<Ex10childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex10childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
