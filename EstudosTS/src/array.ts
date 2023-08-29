//duas formas de tipagem para array
const array: Array<number> = [1, 2, 3, 4]

const stringArray: string[] = [
    'Ana', 'João', 'Bella'
]

const buscaNum = array.find(num => num === 4) //retorna a primeiro elemento que atende a condição

console.log(array[0]);
console.log(buscaNum);

console.log(stringArray[1]);
console.log(stringArray.length);
stringArray.push('Aisha') //add elemento no final do array
console.log(stringArray);
stringArray.forEach(string => console.log(string))//percorre array e imprime um por vez

array.forEach(num => {
    if(num > 2 && num % 2 === 0 /*resto 0*/ ){

        console.log(num)
    }
})//pode dar problema com função assincrona

array.map(num=>console.log(num)
)//um pouco mais rápido, pode ser usado com função assincrona

stringArray.pop() //remove o último elemento, não precisa de param
console.log(stringArray);





