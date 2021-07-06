let cadena =
  "lorem ipsum dolor sit amet consecitur  volaufmaeifnaeiufes lorem ipsu "

//RegExp significa regularExpresion, para declarar una expresion regular se usa esto
let expreg = new RegExp("lorem", "i")
//segunda manera

let expReg = /lorem/gi
let expReg3 = /lorem{2}/gi

console.log(expreg.test(cadena))
console.log(expreg.exec(cadena))

console.log(expReg3.exec(cadena))
console.log(expReg3.test(cadena))
