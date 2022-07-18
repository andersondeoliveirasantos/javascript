// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpsLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = this.geraDigito(cpfSemDigitos)
    const digito2 = this.geraDigito(cpfSemDigitos + digito1)
  }

  geraDigito(cpfSemDigitos) {
    let total = 0
    let reverso = cpfSemDigitos.lenght + 1

    for (let stringNumerica of cpfSemDigitos) {
      //    console.log(stringNumerica, reverso)
      total += reverso * Number(stringNumerica)
      reverso--
    }

    console.log()
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.lenght !== 11) return false
    if (this.éSequência()) return false
    if (this.geraNovoCpf()) return false

    return 'CHEGUEI AQUI'
  }
}

let validacpf = new ValidaCPF('070.987.720-03')
// validacpf = new ValidaCPF('999.999.999-99')
console.log(validacpf.valida())
