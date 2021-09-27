import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';

import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';

import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';

import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { LoginRoutes } from './auth/auth-routing.module';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsuarioRoutes } from './usuario/usuario-routing.module';
// import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
// import { InserirUsuarioComponent } from './usuario/inserir-usuario/inserir-usuario.component';
// import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent, canActivate: [AuthGuard], data:{role: 'ADMIN,GERENTE,FUNC'} },
  { path: 'pessoas/novo', component: InserirPessoaComponent, canActivate: [AuthGuard], data:{role: 'ADMIN,GERENTE,FUNC'} },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent, canActivate: [AuthGuard], data:{role: 'ADMIN,GERENTE,FUNC'} },

  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  { path: 'enderecos/listar', component: ListarEnderecoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,GERENTE'} },
  { path: 'enderecos/novo', component: InserirEnderecoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,GERENTE'} },
  { path: 'enderecos/editar/:id', component: EditarEnderecoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,GERENTE'} },

  { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidadeComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
  { path: 'cidades/novo', component: InserirCidadeComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
  { path: 'cidades/editar/:id', component: EditarCidadeComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },

  { path: 'estados', redirectTo: 'estados/listar' },
  { path: 'estados/listar', component: ListarEstadoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,FUNC'} },
  { path: 'estados/novo', component: InserirEstadoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,FUNC'} },
  { path: 'estados/editar/:id', component: EditarEstadoComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,FUNC'}},

  ...LoginRoutes,
  ...UsuarioRoutes,

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'ADMIN,GERENTE,FUNC'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
