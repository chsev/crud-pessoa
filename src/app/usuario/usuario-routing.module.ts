import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { InserirUsuarioComponent } from "./inserir-usuario/inserir-usuario.component";
import { ListarUsuarioComponent } from "./listar-usuario/listar-usuario.component";


export const UsuarioRoutes: Routes = [
    { path: 'usuarios', redirectTo: 'usuarios/listar' },
    { path: 'usuarios/listar', component: ListarUsuarioComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'usuarios/novo', component: InserirUsuarioComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'usuarios/editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'}},
];