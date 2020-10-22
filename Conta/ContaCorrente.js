import { Conta } from "./Conta.js"

// criando a classe Conta Corrente com Herança da classe Conta
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        // super() vai chamar o construtor em Conta
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //metodo de sacar sobreescrevendo o sacar() de Conta.Js
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}