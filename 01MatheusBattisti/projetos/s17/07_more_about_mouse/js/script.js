let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('mousedown', function() {
  console.log('Pressed the button')
})

btn1.addEventListener('mouseup', function() {
  console.log('Released the button')
})

btn2.addEventListener('dblclick', function() {
  console.log('Double click')
})

btn2.addEventListener('contextmenu', function(e) {
  e.preventDefault()
  console.log('Right Button')
})