const numero = 10

if (numero >= 0) {
  console.log('Sim o número é maior ou igual a zero.')
}

//*******************************************************//

// Se (numero >= 0 && numero <= 5) ocorer, faça isso {código}
// Se não faça isso {o códig}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.')
} else {
  console.log('O número NÂO está entre 0 e 5.')
}

//*******************************************************//

if (numero <= 10) {
  console.log('O númeor é menor ou igual a 10')
}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8')
} else if (numero >= 9 && numero <= 11) {
  console.log('O número está entre 9 e 11')
} else {
  console.log('O número não está entre 0 e 11.')
}

console.log('...Aqui vem o resto do código.')
