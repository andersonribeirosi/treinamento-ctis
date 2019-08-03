import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MultaService } from 'src/app/services/multa-service/multa.service';
import { Validations } from 'src/app/services/validations/validations';

@Component({
  selector: 'app-consulta-multa',
  templateUrl: './consulta-multa.component.html',
  styleUrls: ['./consulta-multa.component.css']
})
export class ConsultaMultaComponent implements OnInit {

  consultaPlacaForm: FormGroup;
  listMultas: any;
  filterMulta = '';

  constructor(private router: Router,
    private fb: FormBuilder,
    private rest: MultaService) { }

  ngOnInit() {
    this.criaFormsGroup();
    this.getListMultas();
  }

  criaFormsGroup() {
    this.consultaPlacaForm = this.fb.group({
      placa: ['', Validators.compose([Validations.minLength(7), Validations.maxLength(7), Validations.required])],
      cpf: ['', Validations.required]
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

  getError(field) {
    const fieldGroup = this.consultaPlacaForm.get(field);
    if (fieldGroup.errors && fieldGroup.dirty && fieldGroup.touched) {
      return fieldGroup.errors.message;
    } else if (this.consultaPlacaForm.errors) {
      return fieldGroup.errors.message;
    }
  }

}
