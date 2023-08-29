export abstract class BankAccount {

    private name: string
    private readonly accountNumber: number
     balance: number  //quando a var não tem valor não precisa passar dentro do constructor
    private status: boolean = true

    constructor (name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber
        this.balance = 20 
    }
    setName = (name: string): void => {
        this.name = name
        console.log('nome após ser alterado com a função');
        
    }

    getName = (): string => {
        return this.name
    }

    consult = (): number => {
        return this.balance
    
}
    
    deposit = (value: number): void => {
        if(this.validateStatus()){
            if(value >= 0)
            this.balance += value;
        }
        
    }

    withdraw = (value: number): void => {
        if(this.validateSaldo()){
            if(value >= 0 && this.balance >= value){
                this.balance -= value
            }else{
                console.log('Saldo insuficiente!');
            }
        }
    }

    getBalance = (): void => {
        console.log(this.balance);
        
    }

    private validateStatus =  () => {
        if(this.status) {
            return this.status
        }

        throw new Error('Conta inválida.')
    }

    private validateSaldo =  () => {
        if(this.balance) {
            return this.balance
        }

        throw new Error('Saldo inferior ao solicitado.')
    }
}