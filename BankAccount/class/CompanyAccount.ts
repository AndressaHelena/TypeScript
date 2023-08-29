import { BankAccount } from "./BankAccount";

export class CompanyAccount extends BankAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    //método específico da class CompanyAccount
    getLoan = (value: number): void => {
            this.balance + value;  
        }
        //console.log("Você pegou um empréstimo.");
        
    
    deposit = (): void => {
        console.log("A empresa efetuou um depósito");
        
    }
}