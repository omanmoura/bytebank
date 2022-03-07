import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas++;
    }

    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            console.log(`Você depositou R$${valor} \nNovo saldo: R$${this._saldo}`);
        } else {
            console.log (`Valor inválido. Saldo atual: ${this._saldo}.`);
        }
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Você sacou R$${valor} \nNovo saldo: R$${this._saldo}`);
            return valor;
        } else {
            console.log("Saldo insuficiente para esse saque.");
            return 0;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`O valor transferido para a conta do(a) ${conta._cliente.nome} foi R$${valorSacado}.`)
    }
}