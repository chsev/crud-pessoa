import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  @ViewChild("formUsuario") formUsuario!: NgForm;
  usuario!: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario;
    let id = +this.route.snapshot.params['id'];
    this.usuarioService.buscarPorId(id).subscribe(usu => {
      if (usu) {
        this.usuario = usu;
      }
    });
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formUsuario.form.valid) {
      // Efetivamente atualiza o usuario
      this.usuarioService.alterar(this.usuario).subscribe();
      // Redireciona para /usuarios
      this.router.navigate(['/usuarios']);
    }
  }

}
