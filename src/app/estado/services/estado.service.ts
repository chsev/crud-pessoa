import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    // Precisa do condicional, pois retorna undefined se a achave não existe
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado): void{
    // Obtém a lista completa de estados
    const estados = this.listarTodos();

    // Seta o ID único 
    // Para não precisar gerenciar, será usado o TimeStamp
    // Quantidade de segundos desde 1970
    estado.id = new Date().getTime();

    // Adiciona no final da lista
    estados.push(estado);

    // Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado{
    // Obtem a lista completa de estados
    const estados: Estado[] = this.listarTodos();

    // Efetua a busca
    // find(): retorna o primeiro elemento da lista que satisfaz a condição
    //      caso contrário, undefined
    return estados.find(estado => estado.id === id)!;
  }

  atualizar(estado: Estado): void{
    // Obtém a lista completa de estados
    const estados: Estado[] = this.listarTodos();

    // Varre a lista de estados
    // Quando encontra o estado com o mesmo id, altera a lista
    estados.forEach( (obj,index,objs) => {
      if( estado.id === obj.id){
        objs[index] = estado;
      }
    });
    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: number): void{
    // Obtém a lista completa de estados
    // Feito com let para poder ser alterada
    let estados: Estado[] = this.listarTodos();

    // Filter(): retorna a mesma lista, com os registros que satisfazem a
    // condição, isto é, cujo id é diferente do passado na função
    estados = estados.filter(estado => estado.id !== id);

    // Atualiza a lista de estados
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

}
