import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/auth/services/usuario.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    //this.usuarios = [];
    this.listarTodos();
  }

  listarTodos(): void {
    this.usuarioService.listarTodos().subscribe({
      next: (usus: Usuario[]) => {
        if (usus == null) {
          this.usuarios = [];
        }
        else {
          this.usuarios = usus;
        }
      }
    });
  }

  remover($event: any, usuario: Usuario): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuario "' + usuario.nome + '"?')) {
      this.usuarioService.remover(usuario.id!).subscribe();
      this.listarTodos();
      location.reload();
    }
  }

  abrirModalUsuario(usuario: Usuario) {
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }

}
