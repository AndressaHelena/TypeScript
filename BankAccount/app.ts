import { BankAccount } from './class/BankAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const Account1 = new PeopleAccount(1, "andressa", 134)

console.log(Account1.balance);

let saldoAtual: number = Account1.consult()
console.log(`Saldo inicial: ${saldoAtual}`);

//deposito de 50
Account1.deposit(50)
saldoAtual = Account1.consult()
console.log(`Saldo após depósito: ${saldoAtual}`);

Account1.withdraw(10)
saldoAtual = Account1.consult()
console.log(`Saldo : ${saldoAtual}`);

CompanyAccount











