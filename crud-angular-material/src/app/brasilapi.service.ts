import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './brasilapi.models';

@Injectable({
  providedIn: 'root',
})
export class BrasilapiService {
  baseUrl: string = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) {}

  listarUFs(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.baseUrl}/ibge/uf/v1`);
  }

  listarMunicipiosPorUF(uf: string): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(
      `${this.baseUrl}/ibge/municipios/v1/${uf}`,
    );
  }
}
