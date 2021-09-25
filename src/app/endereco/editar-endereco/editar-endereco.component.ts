import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/shared';
import { CidadeService } from 'src/app/cidade/services/cidade.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;
  cidades!: Cidade[];
  estados!: any;

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém o endereco
    this.endereco = this.enderecoService.buscarPorId(id);
    this.cidades = this.cidadeService.listarTodos();
    this.estados = this.cidades.map(c => c.estado);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEndereco.form.valid) {
    // Efetivamente atualiza o endereco
      this.enderecoService.atualizar(this.endereco);
    // Redireciona para /enderecos
      this.router.navigate(['/enderecos']);
    }
  }

}
