import { Component, OnInit } from '@angular/core';
import { VeiculoSimplesService } from 'src/app/services/veiculo-simples/veiculo-simples.service';
import { VeiculoSimplesModel } from 'src/app/models/veiculos-simples-model';

@Component({
  selector: 'app-tab-cadastro-simples',
  templateUrl: './tab-cadastro-simples.component.html',
  styleUrls: ['./tab-cadastro-simples.component.css']
})
export class TabCadastroSimplesComponent implements OnInit {

  veiculoSimples: VeiculoSimplesModel[];
  filterVeiculoSimples = '';

  constructor(private rest: VeiculoSimplesService) { }

  ngOnInit() {
    this.buscarVeiculosSimples();
  }

  buscarVeiculosSimples() {
    this.rest.getVeiculoSimples().subscribe((data: VeiculoSimplesModel[]) => {
      this.veiculoSimples = data;
      console.log(this.veiculoSimples);
    });
  }

  removerVeiculoSimples(id: number) {
    console.log(id);

    this.rest.excluirVeiculoSimples(id).subscribe(
      success => console.log('Usuário removido com sucesso.'),
      
      error => console.log('Erro ao remover novo usuário.'),
      
      () => console.log('request complete'),
    );
    this.buscarVeiculosSimples();
    window.location.reload();
  }

}
