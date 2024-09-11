import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

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

const contaCorrenteDavid = new ContaCorrente();
contaCorrenteDavid.agencia = 1001; 

contaCorrenteDavid.depositar(100); 

const valorSacado = contaCorrenteDavid.sacar(50); 
console.log(`Valor sacado: R$${valorSacado}`);

contaCorrenteDavid.verSaldo(); 

console.log(contaCorrenteDavid); 
