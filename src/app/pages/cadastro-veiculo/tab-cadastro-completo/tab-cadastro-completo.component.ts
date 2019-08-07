import { Component, OnInit } from '@angular/core';
import { VeiculoCompletoModel } from 'src/app/models/veiculo-completo-model';
import { VeiculoCompletoService } from 'src/app/services/veiculo-completo/veiculo-completo.service';

@Component({
  selector: 'app-tab-cadastro-completo',
  templateUrl: './tab-cadastro-completo.component.html',
  styleUrls: ['./tab-cadastro-completo.component.css']
})
export class TabCadastroCompletoComponent implements OnInit {

  veiculoCompleto: VeiculoCompletoModel[];
  filterVeiculoCompleto = '';

  constructor(private rest: VeiculoCompletoService) { }

  ngOnInit() {
    this.buscarVeiculoCompleto();
  }

  buscarVeiculoCompleto() {
    this.rest.getVeiculoCompleto().subscribe((data: VeiculoCompletoModel[]) => {
      this.veiculoCompleto = data;
      console.log(this.veiculoCompleto);
    });
  }

  removerVeiculoCompleto(id: number) {
    console.log(id);

    this.rest.excluirVeiculoCompleto(id).subscribe(
      success => console.log('Usuário removido com sucesso.'),
      
      error => console.log('Erro ao remover novo usuário.'),
      
      () => console.log('request complete'),
    );
    this.buscarVeiculoCompleto();
    window.location.reload();
  }

}
