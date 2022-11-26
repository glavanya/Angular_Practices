import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex16pdfjsonComponent } from './ex16pdfjson.component';

describe('Ex16pdfjsonComponent', () => {
  let component: Ex16pdfjsonComponent;
  let fixture: ComponentFixture<Ex16pdfjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex16pdfjsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex16pdfjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
