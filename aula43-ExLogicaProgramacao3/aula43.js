// Escreva um função que recebe um número e
// retorne o eguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com número de 0 a 100

function FizzBuzz(numero) {
  if (numero) if (numero % 3 === 0) return 'Fizz'
  if (numero % 5 === 0) return 'Buzz'
  if (numero % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
  return numero
}
