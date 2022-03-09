export class Conta {
    constructor (saldoInicial, cliente, agencia) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente () {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar (valor) {
        if (valor >= 0) {
            this._saldo += valor;
            console.log(`Valor depositado: R$${valor}.`);
            console.log(`Saldo atual: R$${this._saldo}`);
        } else {
            console.log(`Valor inválido.`);
            console.log(`Saldo atual: R$${this._saldo}`);
        }
    }

    sacar (valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Valor sacado: R$${valor}`);
            console.log(`Saldo atual: R$${this._saldo}`);
        } else {
            console.log(`Valor indisponível para saque.`);
            console.log(`Saldo atual: R$${this._saldo}`);
        }
    }

    transferir (valor, conta) {
        valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Você transferiu R$${valorSacado} para a conta de ${conta.cliente.nome}`);
    }
}