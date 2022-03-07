import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Oman";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344409;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(205);
console.log(contaCorrenteRicardo);
console.log(conta2);

contaCorrenteRicardo.transferir(50,conta2);

console.log(conta2.saldo);