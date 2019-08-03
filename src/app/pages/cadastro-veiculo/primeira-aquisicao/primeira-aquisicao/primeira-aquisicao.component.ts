import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeira-aquisicao',
  templateUrl: './primeira-aquisicao.component.html',
  styleUrls: ['./primeira-aquisicao.component.css']
})
export class PrimeiraAquisicaoComponent implements OnInit {

  maskCPF: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  
  constructor() { }

  ngOnInit() {
  }

}
