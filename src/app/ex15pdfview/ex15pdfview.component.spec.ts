import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex15pdfviewComponent } from './ex15pdfview.component';

describe('Ex15pdfviewComponent', () => {
  let component: Ex15pdfviewComponent;
  let fixture: ComponentFixture<Ex15pdfviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex15pdfviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex15pdfviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
