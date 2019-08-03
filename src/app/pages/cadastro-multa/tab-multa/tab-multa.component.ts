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

  constructor(private rest: MultaService) { }

  ngOnInit() {
    this.buscarMultas();
  }

  buscarMultas(){
    this.rest.buscarMultas().subscribe((data: MultaModel[]) => {
      this.multas = data;
      console.log( this.multas);

    });

  }

}
