export class ContaCorrente {
    agencia;
    //#saldo = 0; <---- CASO FOSSE UTILIZADO O NODE.JS, CONSEGUIRIA INSERIR ATRIBUTO PRIVADO À CLASSE
    _saldo = 0; // <---- CONVENÇÃO PARA ATRIBUTO "PRIVADO"

    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            console.log(`Você depositou R$${valor} \nNovo saldo: R$${this._saldo}`)
        } else {
            console.log (`Valor inválido. Saldo atual: ${this._saldo}.`);
        }
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Você sacou R$${valor} \nNovo saldo: R$${this._saldo}`)
        } else {
            console.log("Saldo insuficiente para esse saque.");
        }
    }
}