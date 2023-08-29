interface ICalcularIdade{
    nome: string, 
    anoNasc: number
}


function sub (num: number){
    return num - 1985
}
console.log(sub(2023));

function calcularIdade ({
    nome,
    anoNasc
}: ICalcularIdade) : string {
    const idade: number = 2023 - anoNasc
    return `Seu nome é ${nome}. Você tem ${idade} anos.`
}
console.log(calcularIdade({nome:'Andressa', anoNasc: 1985}));