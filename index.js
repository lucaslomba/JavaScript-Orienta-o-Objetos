import { Cliente } from './Cliente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'
import { Gerente } from './Funcionarios/Gerente.js'
import { Diretor } from './Funcionarios/Diretor.js'

const diretor = new Diretor("Lucas", 10000, 12345678900)
diretor.cadastrarSenha("123456789")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");



const gerente = new Gerente("Joao", 5000, 12345678900)
gerente.cadastrarSenha("123456789")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");

const cliente = new Cliente("Gabrielle", 346478346525, "123456")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456789");

console.log(clienteEstaLogado)


// =========================================================== Operações nas contas ======================================================
// import {ContaCorrente} from './Conta/ContaCorrente.js'
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';
// import { ContaSalario } from './Conta/ContaSalario.js';

// Criando um novo cliente a partir da classe e atribuindo a uma variavel
// const cliente1 = new Cliente("Ricardo", 11122233309);

// Criando uma nova conta corrente a partir da classe e atribuindo a uma variavel
// const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);

// Sacando da conta corrente
// const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado)

// Depositando da conta corrente
// contaCorrenteRicardo.depositar(20)
// console.log(contaCorrenteRicardo)

// Transferindo entre as contas
// let valorTransferencia = 100
// contaCorrenteLucas.transferir(valorTransferencia, contaCorrenteRicardo)
// console.log(contaCorrenteRicardo)

// Conta poupança
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
// console.log(contaPoupanca);

// Exibindo clientes
// console.log(cliente1)
// console.log(cliente2)