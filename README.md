# Banco-Credito

Este projeto contém a implementação de uma classe `ContaCorrente` em JavaScript, simulando operações bancárias básicas como saque, depósito, transferência e consulta de saldo.

## Funcionalidades
- **Sacar:** Permite retirar um valor do saldo, caso haja saldo suficiente.
- **Depositar:** Adiciona um valor ao saldo, desde que seja um valor válido.
- **Transferir:** Transfere um valor de uma conta para outra.
- **Ver saldo:** Exibe o saldo atual da conta.

## Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Importe a classe `ContaCorrente` no seu código e utilize os métodos disponíveis.

```javascript
const conta1 = new ContaCorrente();
const conta2 = new ContaCorrente();

conta1.depositar(1000);
conta1.sacar(200);
conta1.transferir(300, conta2);
conta1.verSaldo();
conta2.verSaldo();
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Basta abrir uma issue ou enviar um pull request!

## Licença
Este projeto está sob a licença MIT.

