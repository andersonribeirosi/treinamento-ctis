import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsultaMultaComponent } from './pages/consulta-multa/consulta-multa.component';
import { CadastroMultaComponent } from './pages/cadastro-multa/cadastro-multa.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { PrimeiraAquisicaoComponent } from './pages/cadastro-veiculo/primeira-aquisicao/primeira-aquisicao/primeira-aquisicao.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent },
      { path: 'consultarMulta', component: ConsultaMultaComponent },
      { path: 'cadastrarMulta', component: CadastroMultaComponent },
      { path: 'cadastrarVeiculo', component: CadastroVeiculoComponent },
      { path: 'primeiraAquisicao', component: PrimeiraAquisicaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
