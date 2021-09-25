import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models';
import { PessoaService } from '../services/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    this.pessoa = this.pessoaService.buscarPorId(id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formPessoa.form.valid) {
    // Efetivamente atualiza a pessoa
    this.pessoaService.atualizar(this.pessoa);
    // Redireciona para /pessoas
    this.router.navigate(['/pessoas']);
    }
  }

}
