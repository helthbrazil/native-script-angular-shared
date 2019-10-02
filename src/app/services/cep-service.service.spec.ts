import { TestBed } from '@angular/core/testing';

import { CepServiceService } from './cep-service.service';

describe('CepServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CepServiceService = TestBed.get(CepServiceService);
    expect(service).toBeTruthy();
  });
});
