import { TestBed } from '@angular/core/testing';

import { ParticulierService } from './particulier.service';

describe('ParticulierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticulierService = TestBed.get(ParticulierService);
    expect(service).toBeTruthy();
  });
});
