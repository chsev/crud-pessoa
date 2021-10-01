import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  listarTodos(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(env.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(env.BASE_URL + id, this.httpOptions);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    usuario.id = new Date().getTime()%100000;
    return this.httpClient.post<Usuario>(env.BASE_URL, JSON.stringify(usuario), this.httpOptions);
  }

  remover(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(env.BASE_URL + id, this.httpOptions);
  }

  alterar(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(env.BASE_URL + usuario.id, JSON.stringify(usuario), this.httpOptions);
  }

}
