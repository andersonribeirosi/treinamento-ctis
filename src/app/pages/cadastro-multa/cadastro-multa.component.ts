import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MultaService } from 'src/app/services/multa-service/multa.service';

@Component({
  selector: 'app-cadastro-multa',
  templateUrl: './cadastro-multa.component.html',
  styleUrls: ['./cadastro-multa.component.css']
})
export class CadastroMultaComponent implements OnInit {

  cadastroMultaForm: FormGroup;
  listMultas: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private rest: MultaService) { }

  ngOnInit() {
    this.criaFormsGroup();
    this.getListMultas();
  }

  criaFormsGroup() {
    this.cadastroMultaForm = this.fb.group({
      placa: ['', Validators.required],
      data: [''],
      tipoMulta: ['', Validators.required]
    });
  }

  back() {
    this.router.navigateByUrl('/home')
  }

  getListMultas() {
    this.rest.getMultas()
      .subscribe(
        res => {
          this.listMultas = res
          console.log(res)
        },
        error => {
        })
  }

  cadastrarMulta(){
    if (!this.cadastroMultaForm.valid) {
      console.log('erro ao cadastrar');
      
    } else {
      this.rest.addMultas(this.cadastroMultaForm.value).subscribe(
        success => console.log('cadastrado com sucesso'),
        error => console.log('erro ao cadastradar nova multa'),
        () => console.log('request complete')
      );

      this.cadastroMultaForm.reset();
    }
  }

}
