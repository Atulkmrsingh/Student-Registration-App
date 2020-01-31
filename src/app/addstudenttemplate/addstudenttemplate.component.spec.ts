import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudenttemplateComponent } from './addstudenttemplate.component';

describe('AddstudenttemplateComponent', () => {
  let component: AddstudenttemplateComponent;
  let fixture: ComponentFixture<AddstudenttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudenttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudenttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
