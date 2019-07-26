import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-multa',
  templateUrl: './consulta-multa.component.html',
  styleUrls: ['./consulta-multa.component.css']
})
export class ConsultaMultaComponent implements OnInit {

  consultaPlacaForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.criaFormsGroup();
  }

  criaFormsGroup() {
    this.consultaPlacaForm = this.fb.group({
      placa: ['', Validators.required],
      cpf: ['', Validators.required]

    });
  }

  back() {
    this.router.navigateByUrl('/home')
  }

}
