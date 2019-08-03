import { Component, OnInit } from '@angular/core';
import { MultaModel } from 'src/app/models/multa-model';
import { MultaService } from 'src/app/services/multa-service/multa.service';

@Component({
  selector: 'app-tab-multa',
  templateUrl: './tab-multa.component.html',
  styleUrls: ['./tab-multa.component.css']
})
export class TabMultaComponent implements OnInit {

  multas: MultaModel[];

  filterMulta = '';

  constructor(private rest: MultaService) { }

  ngOnInit() {
    this.buscarMultas();
  }

  buscarMultas() {
    this.rest.buscarMultas().subscribe((data: MultaModel[]) => {
      this.multas = data;
      console.log(this.multas);

    });

  }

  removerMulta(id: number) {
    console.log(id);

    this.rest.excluirMultas(id).subscribe(
      success => console.log('Usuário removido com sucesso.'),
      
      error => console.log('Erro ao remover novo usuário.'),
      
      () => console.log('request complete'),
    );
    this.buscarMultas();
    window.location.reload();
  }


}
