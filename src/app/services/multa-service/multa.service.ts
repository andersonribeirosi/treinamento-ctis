import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  constructor(private http: HttpClient) { }

  getMultas(): Observable<any> {
    return this.http.get(`${API.BASE_URL}${API.TESTE}`);
  }
}
