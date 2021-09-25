import { Cidade } from ".";

export class Endereco {
    constructor(
        public id?: number,
        public rua?: string,
        public numero?: number,
        public complemento?: string,
        public bairro?: string,
        public cep?: string,
        public cidade?: Cidade,
        public estado?: string,
        public residencial?: boolean,
        public logradouro?: string
    ){}
}
