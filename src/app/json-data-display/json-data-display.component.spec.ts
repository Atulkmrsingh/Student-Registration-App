import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataDisplayComponent } from './json-data-display.component';

describe('JsonDataDisplayComponent', () => {
  let component: JsonDataDisplayComponent;
  let fixture: ComponentFixture<JsonDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
