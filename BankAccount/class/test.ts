let valores1: number = 5.30
let valores2: number = 5.10

let codigo1: number = (valores1[0]);
let numero1: number = (valores1[1]);
let valorUnitario1: Float32Array = (valores1[2]);

// TODO:  Retorne o valor total a pagar da compra

let soma =  valores1 + valorUnitario1   ;

print('VALOR A PAGAR: R$ ' + soma.toFixed(2));