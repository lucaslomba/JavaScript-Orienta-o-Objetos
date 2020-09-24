import { Cliente } from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

//Criando um novo cliente a partir da classe e atribuindo a uma variavel
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Lucas", 88822233309);

//Criando uma nova conta corrente a partir da classe e atribuindo a uma variavel
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteLucas = new ContaCorrente(1001, cliente2);

//Sacando da conta corrente
const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado)

//Depositando da conta corrente
contaCorrenteRicardo.depositar(20)
// console.log(contaCorrenteRicardo)

//Transferindo entre as contas
let valorTransferencia = 100
contaCorrenteLucas.transferir(valorTransferencia, contaCorrenteRicardo)
// console.log(contaCorrenteRicardo)

//Exibindo clientes
// console.log(cliente1)
// console.log(cliente2)