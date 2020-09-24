import { Cliente } from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

//Criando um novo cliente a partir da classe e atribuindo a uma variavel
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//Atribuindo valores ao cliente 1
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

//Atribuindo valores ao cliente 2
cliente2.nome = "Lucas";
cliente2.cpf = "88822233309";

//Criando uma nova conta corrente a partir da classe e atribuindo a uma variavel
const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteLucas = new ContaCorrente();

//Atribuindo valores a conta corrente do Ricardo
contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

//Atribuindo valores a conta corrente do Lucas
contaCorrenteLucas.saldo = 1000;
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.cliente = cliente2;

//Sacando da conta corrente
const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado)

//Depositando da conta corrente
contaCorrenteRicardo.depositar(20)
// console.log(contaCorrenteRicardo)

//Transferindo entre as contas
let valorTransferencia = 100
contaCorrenteLucas.transferir(valorTransferencia, contaCorrenteRicardo)
console.log(contaCorrenteRicardo)

//Exibindo clientes
// console.log(cliente1)
// console.log(cliente2)