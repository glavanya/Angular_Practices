import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13httpComponent } from './ex13http.component';

describe('Ex13httpComponent', () => {
  let component: Ex13httpComponent;
  let fixture: ComponentFixture<Ex13httpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex13httpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13httpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
