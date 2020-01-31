import { TestBed } from '@angular/core/testing';

import { JsonDataserviceService } from './json-dataservice.service';

describe('JsonDataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonDataserviceService = TestBed.get(JsonDataserviceService);
    expect(service).toBeTruthy();
  });
});
