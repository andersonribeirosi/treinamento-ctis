import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  consultarMulta() {
    this.router.navigateByUrl('home/consultarMulta');
  }

  cadastrarMulta() {
    this.router.navigateByUrl('home/cadastrarMulta');
  }

  cadastrarVeiculo() {
    this.router.navigateByUrl('home/cadastrarVeiculo');
  }

  back() {
    this.router.navigateByUrl('/home')
  }


}
