import { Conta } from "./Conta";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    //metodo de sacar sobreescrevendo o sacar() de Conta.Js
    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}