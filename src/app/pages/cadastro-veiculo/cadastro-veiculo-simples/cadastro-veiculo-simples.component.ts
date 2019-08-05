import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeiculoSimplesService } from 'src/app/services/veiculo-simples/veiculo-simples.service';

@Component({
  selector: 'app-cadastro-veiculo-simples',
  templateUrl: './cadastro-veiculo-simples.component.html',
  styleUrls: ['./cadastro-veiculo-simples.component.css']
})
export class CadastroVeiculoSimplesComponent implements OnInit {

  cadastroVeiculoSimplesForm: FormGroup;
  listMultas: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private rest: VeiculoSimplesService) { }

  ngOnInit() {
    this.cadastroVeiculoSimplesFormsGroup();
    // this.getListMultas();
  }

  cadastroVeiculoSimplesFormsGroup() {
    this.cadastroVeiculoSimplesForm = this.fb.group({
      chassi: ['', Validators.required],
      renavam: [''],
      marcaVeiculo: ['', Validators.required],
      modeloVeiculo: ['', Validators.required],
      anoFabricacao: ['', Validators.required]
    });
  }

  back() {
    this.router.navigateByUrl('/home/cadastrarVeiculo')
  }

  cadastrarVeiculoSimples(){
    if (!this.cadastroVeiculoSimplesForm.valid) {
      console.log('erro ao cadastrar');
      
    } else {
      this.rest.addVeiculoSimples(this.cadastroVeiculoSimplesForm.value).subscribe(
        success => alert('cadastrado com sucesso'),
        error => console.log('erro ao cadastradar novo veículo'),
        () => console.log('request complete')
      );

      this.cadastroVeiculoSimplesForm.reset();
      this.router.navigateByUrl('/home/cadastrarVeiculo');
    }
  }

}
