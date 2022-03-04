export class ContaCorrente {
    agencia;
    cliente;

    //#saldo = 0; <---- CASO FOSSE UTILIZADO O NODE.JS, CONSEGUIRIA INSERIR ATRIBUTO PRIVADO À CLASSE
    _saldo = 0; // <---- CONVENÇÃO PARA ATRIBUTO "PRIVADO"

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
        console.log(`O valor transferido para a conta do(a) ${conta.cliente.nome} foi R$${valorSacado}.`)
    }
}