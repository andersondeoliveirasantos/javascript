let b = 2

try {
  let a = 2 + b
} catch(e) {
  console.log(e)
} finally {
  console.log('performed') // * Executou
}

// console.log('test')