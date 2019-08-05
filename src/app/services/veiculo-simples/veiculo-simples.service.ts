import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { VeiculoSimplesModel } from 'src/app/models/veiculos-simples-model';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoSimplesService {

  constructor(private http: HttpClient) { }

  addVeiculoSimples(veiculoSimples: VeiculoSimplesModel): Observable<VeiculoSimplesModel> {
    return this.http.post<VeiculoSimplesModel>(`${API.BASE_URL}${API.ADD_VEICULOS_SIMPLES}`, veiculoSimples).pipe(take(1));
  }
}
