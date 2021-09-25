import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';
import { Router } from '@angular/router';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from 'src/app/cidade/services/cidade.service';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent implements OnInit {
  // Recebe uma referência do formulário aqui no componente
  // 'formPessoa' deve ser o nome do formulário no HTML
  @ViewChild('formEndereco') formEndereco! : NgForm;

  // Atributo de binding, os dados digitados no formulário vêm para
  // este atributo
  endereco! : Endereco;
  cidades!: Cidade[];
  estados!: any; //Cidade["estado"];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Cria uma instância vazia, para não dar erro de referência
    this.endereco = new Endereco();
    //this.endereco.cidade = new Cidade();
    this.cidades =  this.cidadeService.listarTodos();
    this.estados = this.cidades.map(c => c.estado);
    this.endereco.numero = 0;

  }

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate( ["/enderecos"] );
    }
  }

}
