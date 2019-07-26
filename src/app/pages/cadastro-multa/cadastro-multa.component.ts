import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-multa',
  templateUrl: './cadastro-multa.component.html',
  styleUrls: ['./cadastro-multa.component.css']
})
export class CadastroMultaComponent implements OnInit {

  cadastroMultaForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.criaFormsGroup();
  }

  criaFormsGroup() {
    this.cadastroMultaForm = this.fb.group({
      placa: ['', Validators.required],
      data: ['']

    });
  }

  back() {
    this.router.navigateByUrl('/home')
  }

}
