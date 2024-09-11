import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "David Jean";
cliente1.cpf = 1453353899;
cliente1.endereco = "Rua das figueiras";
cliente1.rg = 2362852944;

const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 15050001000;
cliente2.rg = 236272984;
cliente2.endereco = "Rua Irajá";

const contaCorrenteDavid = new ContaCorrente();
contaCorrenteDavid.agencia = 1001; 
<<<<<<< HEAD
contaCorrenteDavid.cliente = cliente1; 
contaCorrenteDavid.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteDavid.transferir(200, conta2)

console.log(conta2);
console.log(contaCorrenteDavid);



=======

contaCorrenteDavid.depositar(100); 

const valorSacado = contaCorrenteDavid.sacar(50); 
console.log(`Valor sacado: R$${valorSacado}`);

contaCorrenteDavid.verSaldo(); 

console.log(contaCorrenteDavid); 
>>>>>>> de1c2da22cf3fd0fbb1af763e21296313f48c1ca
