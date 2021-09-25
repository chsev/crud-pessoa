import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[]{
    const pessoas = localStorage[LS_CHAVE];
    //Precisa do condicional, pois retorna undefined se a chave não existe
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    // Obtém a lista completa de pessoas
    const pessoas = this.listarTodos();

    // Seta o ID único
    // Não precisa gerenciar será usado o Timestamp
    // Quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();

    // Adiciona no final da lista
    pessoas.push(pessoa);

    // Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa {
    //Obtém a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    // Efetua a busca
    // find(): retorna o primeiro elemento da lista que satisfaz a condição
    //        caso contrário, undefined
    return pessoas.find(pessoa => pessoa.id === id)!;
  }

  atualizar(pessoa: Pessoa): void {
    // Obtém a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();
  
    // Varre a lista de pessoas
    // Quando encontra a pessoa com o memso id, altera a lista
    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id){
        objs[index] = pessoa;
      }
    });
    
    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: number): void {
    // Obtém a lista completa de pessoas
    // Feito com let para poder ser alterada
    let pessoas: Pessoa[] = this.listarTodos();

    // filter(): retorna a mesma lista, com os registros que
    // satisfazem a condição, isto é, cujo id é diferente
    // do passado na função
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    // Atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  
}
