export class ContaCorrente {
  agencia;
  cliente;
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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
  verSaldo() {
    console.log(`O saldo atual é: R$${this._saldo}`);
  }
}
