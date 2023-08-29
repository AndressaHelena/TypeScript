//Objeto literal
const typeUser = {
    admin: 'Seja bem-vindo admin.',
    student: 'Você é um estudante.',
    viewer: 'Você pode visualizar.'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]);
    
}

const usuario = 'admin'

validateUser(usuario)



interface IPessoa {
    nome: string,
    idade: number,
    profissão?: string
}

//objetos
const pessoa: IPessoa = {
    nome: 'Andressa',
    idade: 37,
    profissão: 'Desenvolvedora'
}

const outraPessoa: IPessoa = {
    nome: 'Henrique',
    idade: 6
}

const arrayPessoas: Array<IPessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    'Ana', 'João', 'Bella'
]


