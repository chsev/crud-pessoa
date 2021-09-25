import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos(): Endereco[]{
    const enderecos = localStorage[LS_CHAVE];
    //Precisa do condicional, pois retorna undefined se a chave não existe
    return enderecos ? JSON.parse(enderecos) : [];
  }


  inserir(endereco: Endereco): void {
    // Obtém a lista completa de enderecos
    const enderecos = this.listarTodos();

    // Seta o ID único
    // Não precisa gerenciar será usado o Timestamp
    // Quantidade de segundos desde 1970
    endereco.id = new Date().getTime();

    // Adiciona no final da lista
    enderecos.push(endereco);

    // Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }


  buscarPorId(id: number): Endereco {
    //Obtém a lista completa de enderecos
    const enderecos: Endereco[] = this.listarTodos();

    // Efetua a busca
    // find(): retorna o primeiro elemento da lista que satisfaz a condição
    //        caso contrário, undefined
    return enderecos.find(endereco => endereco.id === id)!;
  }


  atualizar(endereco: Endereco): void {
    // Obtém a lista completa de enderecos
    const enderecos: Endereco[] = this.listarTodos();
  
    // Varre a lista de enderecos
    // Quando encontra a endereco com o memso id, altera a lista
    enderecos.forEach( (obj, index, objs) => {
      if (endereco.id === obj.id){
        objs[index] = endereco;
      }
    });
    
    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }


  remover(id: number): void {
    // Obtém a lista completa de enderecos
    // Feito com let para poder ser alterada
    let enderecos: Endereco[] = this.listarTodos();

    // filter(): retorna a mesma lista, com os registros que
    // satisfazem a condição, isto é, cujo id é diferente
    // do passado na função
    enderecos = enderecos.filter(endereco => endereco.id !== id);

    // Atualiza a lista de enderecos
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
