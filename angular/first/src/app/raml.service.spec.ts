import { TestBed } from '@angular/core/testing';

import { RamlService } from './raml.service';

describe('RamlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RamlService = TestBed.get(RamlService);
    expect(service).toBeTruthy();
  });
});
