class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    depositar(valor) {
        if (valor >= 0) {
            this.saldo += valor;
        } else {
            console.log ("Valor inválido.");
        }
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Oman";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344409;

console.log(cliente1);
console.log(cliente2);