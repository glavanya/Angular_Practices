import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14hideComponent } from './ex14hide.component';

describe('Ex14hideComponent', () => {
  let component: Ex14hideComponent;
  let fixture: ComponentFixture<Ex14hideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex14hideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex14hideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
