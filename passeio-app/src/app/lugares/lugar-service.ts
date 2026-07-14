import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from './lugar';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(`${this.apiUrl}/lugares`, lugar);
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.apiUrl}/lugares`);
  }

  filtrar(nome: string, categoria: string): Observable<Lugar[]> {
    let parametros = new HttpParams();

    if (nome) {
      parametros = parametros.set('nome_like', nome);
    }
    if (categoria && categoria !== '-1') {
      parametros = parametros.set('categoria', categoria);
    }
    return this.http.get<Lugar[]>('http://localhost:3000/lugares', { params: parametros });
  }
}
