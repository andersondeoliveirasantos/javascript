exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local'
  next()
}

exports.outromiddleware = (req, res, next) => {
  next()
}

exports.checkCsrfError = (err, req, res, next) => [
  if(err && 'EBADCSRFTOKEN' === err.code) {
    
  }
]

