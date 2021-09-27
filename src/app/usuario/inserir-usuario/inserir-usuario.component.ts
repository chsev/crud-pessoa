import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css']
})
export class InserirUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario! : NgForm;
  usuario!: Usuario; 

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Cria uma instância vazia, para não dar erro de referência
    this.usuario = new Usuario();
  }

  inserir(): void {
    if (this.formUsuario.form.valid){
      this.usuarioService.inserir(this.usuario).subscribe();
      this.router.navigate(["/usuarios"]);
    }
  }

}
