import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { MultaModel } from 'src/app/models/multa-model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  constructor(private http: HttpClient) { }

  // getMultas(): Observable<any> {
  //   return this.http.get(`${API.BASE_URL}${API.POST}`);
  // }

  getMultas(): Observable<any> {
    return this.http.get(`${API.BASE_URL}${API.ADD_MULTA}`);
  }

  addMultas(multa: MultaModel): Observable<MultaModel> {
    return this.http.post<MultaModel>(`${API.BASE_URL}${API.ADD_MULTA}`, multa).pipe(take(1));
  }

  buscarMultas(): Observable<MultaModel[]> {
    return this.http.get<MultaModel[]>(`${API.BASE_URL}${API.ADD_MULTA}`);
  }
}
