let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6';


console.log(a,b);
//Algunos metodos para numeros

console.log(c.toFixed(1)); //toFixed es para redondear
console.log(parseInt(c)); //ParseInt es para devolver solo el entero
console.log(parseFloat(c)); //ParseFloat sirve para devolver todo el numero
console.log(typeof c, typeof d); //typeof no es un metodo pero sirve para ver el tipo de dato
console.log(a+b);
console.log(c+parseInt(d));
console.log(c+parseFloat(d));

console.log(c+Number.parseInt(d));
console.log(c+Number.parseFloat(d));