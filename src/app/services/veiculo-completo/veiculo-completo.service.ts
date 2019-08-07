import { Injectable } from '@angular/core';
import { VeiculoCompletoModel } from 'src/app/models/veiculo-completo-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoCompletoService {

  constructor(private http: HttpClient) { }

  addVeiculoCompleto(veiculoCompleto: VeiculoCompletoModel): Observable<VeiculoCompletoModel> {
    return this.http.post<VeiculoCompletoModel>(`${API.BASE_URL}${API.ADD_VEICULO_COMPLETO}`, veiculoCompleto).pipe(take(1));
  }

  getVeiculoCompleto(): Observable<any> {
    return this.http.get(`${API.BASE_URL}${API.ADD_VEICULO_COMPLETO}`);
  }

  excluirVeiculoCompleto(id): Observable<VeiculoCompletoModel> {
    const url = `${API.BASE_URL}${API.ADD_VEICULO_COMPLETO}/${id}`;
    return this.http.delete<VeiculoCompletoModel>(url).pipe(take(1));
  }

  buscarVeiculoCompleto(): Observable<VeiculoCompletoModel[]> {
    return this.http.get<VeiculoCompletoModel[]>(`${API.BASE_URL}${API.ADD_VEICULO_COMPLETO}`);
  }

}
