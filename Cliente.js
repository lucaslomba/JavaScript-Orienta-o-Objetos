// criando a classe Cliente
export class Cliente {
    //Os Atributos da classe
    nome;
    _cpf;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}