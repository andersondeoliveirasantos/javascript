/*

*OPERADORES ATITIMÉTICOS !!!

* + ( Adição / Concatenação )
- ( Subtração )
/ ( Divisão )
* ( Multiplicação )  
** (Potenciação)
% (Resto da divisão)
_________________________________________________________

ORDEM DE PRECEDÊNCIA !!!
() > Parenteses
** > Potenciação
* / % > Multiplicação > Divisão > Módulo da divisão
+ - > Adição > Subtração
_________________________________________________________

OPERADORES DE INCREMENTO

++ = Incremento
-- = Decremento

Pre-Incremento (Só muda a posição)
Pós-Decremento (Só muda a posição)

*/

const num1 = 10
const num2 = 5
const num3 = 2

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)
console.log((num1 + num2) * num3)
console.log((num1 * num2) / num3)

let contador = 1
contador++ // 2
contador++ // 3
++contador // 4
++contador // 5
console.log(contador)
