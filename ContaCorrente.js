import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor (cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar (valor) {
        let taxa = valor*0.1;
        const valorTotalSacado = valor + taxa;

        if (valorTotalSacado <= this._saldo) {
            this._saldo -= valorTotalSacado;
            console.log(`\nValor sacado: R$${valor}`);
            console.log(`Taxa de saque: R$${taxa}`)
            console.log(`Saldo atual: R$${this._saldo}\n`);
        } else {
            console.log(`\nValor indisponível para saque.`);
            console.log(`Saldo atual: R$${this._saldo}`);
        }
    }
}