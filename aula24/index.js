/*
Entre 0 - 11 - Bom dia !!!
Entre 12 - 17 - Boa tarde !!!
Entre 18 - 23 - Boa noite !!!
*/

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter váriso else if na checagem
// Só posso ter um else na checagem
// Podemos utilizar condições sem else if, utilizando apenas if e else

const hora = 50

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia !!!')
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde !!!')
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite !!!')
} else {
  console.log('Hello !!!')
}

// Outra condição

const tenhoGrana = true

if (tenhoGrana) {
  console.log('Vou sair de casa.')
} else {
  console.log('Não vou sair de casa.')
}
