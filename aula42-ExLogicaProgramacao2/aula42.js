// Escreva uma função chamada ePaisagem que
// recebe dois arguentos, largura e altura
// de uma imagem ( number ).
// Retorne true se a imagem estiver no
// modo paisagem.

const ePaisagem = (largura, altura) => largura > altura

console.log(ePaisagem(1080, 1920))

/*****************************************************/
/*
function ePaisagem(largura, altura) {
  return largura > altura
}

console.log(ePaisagem(1920, 1920))
*/

/*****************************************************/
/*
function ePaisagem(largura, altura) {
  return largura > altura ? true : false
}

console.log(ePaisagem(1080, 1920))
*/
