// criando a classe Cliente
export class Cliente {
    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf, senha){
        // Propriedades
        this.nome = nome;
        this._cpf = cpf;

        this._senha = senha;
    }

    autenticar(senha){
        return true;
    }
}