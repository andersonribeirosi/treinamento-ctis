import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validations } from 'src/app/services/validations/validations';
import { VeiculoCompletoService } from 'src/app/services/veiculo-completo/veiculo-completo.service';

@Component({
  selector: 'app-cadastro-veiculo-completo',
  templateUrl: './cadastro-veiculo-completo.component.html',
  styleUrls: ['./cadastro-veiculo-completo.component.css']
})
export class CadastroVeiculoCompletoComponent implements OnInit {

  cadastroVeiculoCompletoForm: FormGroup;
  // listMultas: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private rest: VeiculoCompletoService) { }

  ngOnInit() {
    this.cadastroVeiculoCompletoFormsGroup();
    // this.getListMultas();
  }

  cadastroVeiculoCompletoFormsGroup() {
    this.cadastroVeiculoCompletoForm = this.fb.group({
      chassi: ['', Validations.required],
      renavam: ['', Validations.required],
      marcaVeiculo: ['', Validations.required],
      modeloVeiculo: ['', Validations.required],
      anoFabricacao: ['', Validations.required],
      nome: ['', Validations.required],
      cpfCnpj: ['', Validations.required],
      cor: ['', Validations.required],
      rg: ['', Validations.required],
      cnh: ['', Validations.required],
      endereco: ['', Validations.required],
      complemento: ['', Validations.required],
      numero: ['', Validations.required],
      bairro: ['', Validations.required],
      cidade: ['', Validations.required],
      cep: ['', Validations.required]
    });
  }

  back() {
    this.router.navigateByUrl('/home/cadastrarVeiculo')
  }

  cadastrarVeiculoCompleto() {
    if (!this.cadastroVeiculoCompletoForm.valid) {
      console.log('erro ao cadastrar');

    } else {
      this.rest.addVeiculoCompleto(this.cadastroVeiculoCompletoForm.value).subscribe(
        success => alert('cadastrado com sucesso'),
        error => console.log('erro ao cadastradar novo veículo'),
        () => console.log('request complete')
      );

      this.cadastroVeiculoCompletoForm.reset();
      this.router.navigateByUrl('/home/cadastrarVeiculo');
    }
  }

  getError(field) {
    const fieldGroup = this.cadastroVeiculoCompletoForm.get(field);
    if (fieldGroup.errors && fieldGroup.dirty && fieldGroup.touched) {
      return fieldGroup.errors.message;
    } else if (this.cadastroVeiculoCompletoForm.errors) {
      return fieldGroup.errors.message;
    }
  }
}