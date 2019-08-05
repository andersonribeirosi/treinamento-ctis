import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVeiculoSimplesComponent } from './cadastro-veiculo-simples.component';

describe('CadastroVeiculoSimplesComponent', () => {
  let component: CadastroVeiculoSimplesComponent;
  let fixture: ComponentFixture<CadastroVeiculoSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVeiculoSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVeiculoSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
