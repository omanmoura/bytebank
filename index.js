import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Oman", 11122233309);
const cliente2 = new Cliente("Alice", 22233344409);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);

conta1.depositar(100);
conta1.sacar(205);
console.log(conta1);
console.log(conta2);

conta1.transferir(50,conta2);

conta1.cliente.nome = "André";
console.log(conta1);

console.log(ContaCorrente.numeroDeContas);