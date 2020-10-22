import { Conta } from "./Conta.js";

//Criando uma classe Conta poupança com herança de Conta
export class ContaPoupanca extends Conta{
    
    constructor(saldoInicial, cliente, agencia){
        // super() vai chamar o construtor em Conta
        super(saldoInicial, cliente, agencia);
    }

    //metodo de sacar sobreescrevendo o sacar() de Conta.Js
    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}