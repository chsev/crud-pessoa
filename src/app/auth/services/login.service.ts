import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient 
  ) { }


  public get usuarioLogado(): Usuario | null {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario | null) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario> {
    return this.httpClient.post<Usuario>(env.LOGIN_BASE_URL, login, this.httpOptions);
  }

  // login(login: Login): Observable<Usuario | null> {
  //   let usu = new Usuario(1, "Razer-Func", login.login, login.senha, "FUNC");

  //   if (login.login == login.senha) {
  //     if (login.login == "admin") {
  //       usu = new Usuario(1, "Razer-Admin", login.login, login.senha, "ADMIN");
  //     }
  //     else if (login.login == "gerente") {
  //       usu = new Usuario(1, "Razer-Gerente", login.login, login.senha, "GERENTE");
  //     }
  //     return of(usu);

  //   }
  //   else {
  //     return of(null);
  //   }
  // }
}
