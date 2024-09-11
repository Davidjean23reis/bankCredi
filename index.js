class Cliente {
  nome;
  cpf;
  rg;
  endereco;
}class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    } else {
      console.log("Saldo insuficiente");
      return null;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor de depósito inválido");
      return;
    }
    this._saldo += valor;
  }

  verSaldo() {
    console.log(`O saldo atual é: R$${this._saldo}`);
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 150500010;
cliente1.endereco = "Rua do sossego";
cliente1.rg = 258474;

const cliente2 = new Cliente();
cliente2.nome = "Jean";
cliente2.cpf = 15050001000;
cliente2.rg = 2362729;
cliente2.endereco = "Rua Irajá";

// Criando a conta corrente e ajustando a agência
const contaCorrenteDavid = new ContaCorrente();
contaCorrenteDavid.agencia = 1001; // Definindo a agência

// Realizando operações
contaCorrenteDavid.depositar(100); // Depositando R$100

const valorSacado = contaCorrenteDavid.sacar(50); // Sacando R$50
console.log(`Valor sacado: R$${valorSacado}`);

contaCorrenteDavid.verSaldo(); // Verifica o saldo restante

console.log(contaCorrenteDavid); // Exibe informações da conta corrente
