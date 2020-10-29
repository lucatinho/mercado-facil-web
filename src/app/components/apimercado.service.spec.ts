import { TestBed } from '@angular/core/testing';

import { ApimercadoService } from './apimercado.service';

describe('ApimercadoService', () => {
  let service: ApimercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
