import { Cliente } from "./Cliente.js";

// criando a classe Conta Corrente
export class ContaCorrente{
    static numeroDeContas = 0;
    _cliente;
    agencia;
    saldo = 1000;

    set cliente(novoValor){
        if( novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }

    //metodo de sacar
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor

            return valor
        }
    }

    //metodo de deposito
    depositar(valor){
        if(valor <= 0){
           return
        }
        this.saldo += valor
    }

    //metodo de transferencia
    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}