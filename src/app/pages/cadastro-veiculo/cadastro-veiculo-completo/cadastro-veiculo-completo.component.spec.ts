import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVeiculoCompletoComponent } from './cadastro-veiculo-completo.component';

describe('CadastroVeiculoCompletoComponent', () => {
  let component: CadastroVeiculoCompletoComponent;
  let fixture: ComponentFixture<CadastroVeiculoCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVeiculoCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVeiculoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
