import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { Estado } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {
  // Recebe uma referência do formulário aqui no componente
  // 'formPessoa' deve ser o nome do formulário no HTML
  @ViewChild('formCidade') formCidade! : NgForm;

  // Atributo de binding, os dados digitados no formulário vêm para
  // este atributo
  cidade! : Cidade;
  estados!: Estado[];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Cria uma instância vazia, para não dar erro de referência
    this.cidade = new Cidade();
    this.estados = this.estadoService.listarTodos();
  }

  inserir(): void{
    if (this.formCidade.form.valid){
      this.cidadeService.inserir(this.cidade);
      this.router.navigate( ["/cidades"]);
    }
  }

}
