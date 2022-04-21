// Argumentos que sustenta todos os argumentos enviados
function funcao() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log('__________________')
console.log(' ')
/*****************************************************/

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
}
funcao2(1, 2, 3)

console.log('_________________')
console.log(' ')
/*****************************************************/

function funcao3(a, b) {
  console.log(a + b)
}
funcao3(2)
