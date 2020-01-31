import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentreactiveComponent } from './addstudentreactive.component';

describe('AddstudentreactiveComponent', () => {
  let component: AddstudentreactiveComponent;
  let fixture: ComponentFixture<AddstudentreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
