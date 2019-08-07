import { TestBed } from '@angular/core/testing';

import { VeiculoCompletoService } from './veiculo-completo.service';

describe('VeiculoCompletoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoCompletoService = TestBed.get(VeiculoCompletoService);
    expect(service).toBeTruthy();
  });
});
