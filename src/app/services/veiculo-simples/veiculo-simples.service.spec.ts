import { TestBed } from '@angular/core/testing';

import { VeiculoSimplesService } from './veiculo-simples.service';

describe('VeiculoSimplesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoSimplesService = TestBed.get(VeiculoSimplesService);
    expect(service).toBeTruthy();
  });
});
