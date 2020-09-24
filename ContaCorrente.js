// criando a classe Conta Corrente
export class ContaCorrente{
    cliente;
    agencia;
    saldo;

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