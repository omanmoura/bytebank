class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
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

const cliente1 = new Cliente();
cliente1.nome = "Oman";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344409;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(205);