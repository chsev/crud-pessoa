import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../../shared/models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})

export class InserirPessoaComponent implements OnInit {
  // Recebe uma referência do formulário aqui no componente
  // 'formPessoa' deve ser o nome do formulário no HTML
  @ViewChild('formPessoa') formPessoa! : NgForm;

  // Atributo de binding, os dados digitados no formulário vêm para
  // este atributo
  pessoa! : Pessoa;

  // Deve-se injetar no construtor:
  // - service, para efetuar a operação
  // - Router, para redirecionar para a tela de listagem depois da
  // inserção
  constructor(private pessoaService: PessoaService,
              private router: Router) { }

  ngOnInit(): void {
    // Cria uma instancia vazia, para não dar erro de referência
    this.pessoa = new Pessoa();
  }

  // Para inserir:
  // - Verifica se o formulário é válido, se não deu nenhum erro
  // - Se OK
  // . Chama o inserir do Service, this.pessoa está preenchida (binding)
  // . Redireciona para /pessoas
  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate( ["/pessoas"] );
    }
  } 

}


