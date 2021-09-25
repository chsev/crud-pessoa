import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';

import { Cidade } from 'src/app/shared/models/cidade.model';

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    // Precisa do condicional, pois retorna undefined se a chave não existe
    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(cidade: Cidade): void {
    // Obtém a lista completa de cidades
    const cidades = this.listarTodos();

    // Seta o ID único
    // Para não precisar gerenciar, será usado o Timestamp
    // Quantidade de segundos desde 1970
    cidade.id = new Date().getTime();

    // Adiciona no final da lista
    cidades.push(cidade);

    //Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorID(id: number): Cidade {
    // Obtém a lista completa de cidades
    const cidades: Cidade[] = this.listarTodos();

    // Efetua a busca
    // find(): retorna o primeiro elemento da lista que satisfaz a condição
    //    caso contrário, undefined
    return cidades.find(cidade => cidade.id === id)!;
  }

  atualizar(cidade: Cidade): void{
    //Obtém a lista completa de cidades
    const cidades: Cidade[] = this.listarTodos();

    //Varre a lista de cidades
    //Quando encontra a cidade com o mesmo id, altera lista
    cidades.forEach( (obj,index,objs) => {
      if(cidade.id === obj.id){
        objs[index] = cidade;
      }
    });

    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void {
    // Obtém a lista completa de cidades
    // Feito com let para poder ser alterada
    let cidades: Cidade[] = this.listarTodos();

    // filter(): retorna a mesma lista, com os registros que
    //    satisfazem a condição, isto é, cujo
    //    id é diferente do passado na função

    cidades = cidades.filter(cidade => cidade.id !== id);

    // Atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
