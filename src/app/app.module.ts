import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ConsultaMultaComponent } from './pages/consulta-multa/consulta-multa.component';
import { CadastroMultaComponent } from './pages/cadastro-multa/cadastro-multa.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { TabMultaComponent } from './pages/cadastro-multa/tab-multa/tab-multa.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { CadastroVeiculoCompletoComponent } from './pages/cadastro-veiculo/cadastro-veiculo-completo/cadastro-veiculo-completo.component';
import { CadastroVeiculoSimplesComponent } from './pages/cadastro-veiculo/cadastro-veiculo-simples/cadastro-veiculo-simples.component';
import { TabCadastroSimplesComponent } from './pages/cadastro-veiculo/tab-cadastro-simples/tab-cadastro-simples.component';
import { TabCadastroCompletoComponent } from './pages/cadastro-veiculo/tab-cadastro-completo/tab-cadastro-completo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ConsultaMultaComponent,
    CadastroMultaComponent,
    CadastroVeiculoComponent,
    TabMultaComponent,
    FilterPipe,
    CadastroVeiculoCompletoComponent,
    CadastroVeiculoSimplesComponent,
    TabCadastroSimplesComponent,
    TabCadastroCompletoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent,
    NavbarComponent,
    ConsultaMultaComponent,
    CadastroMultaComponent,
    CadastroVeiculoComponent,
    TabMultaComponent,
    CadastroVeiculoCompletoComponent,
    CadastroVeiculoSimplesComponent,
    TabCadastroSimplesComponent,
    TabCadastroCompletoComponent]
})
export class AppModule { }
