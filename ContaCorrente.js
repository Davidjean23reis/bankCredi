export class ContaCorrente {
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
  