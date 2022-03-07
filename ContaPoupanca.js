export class ContaPoupanca {
    constructor (saldoInicial, cliente, agencia) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }
}