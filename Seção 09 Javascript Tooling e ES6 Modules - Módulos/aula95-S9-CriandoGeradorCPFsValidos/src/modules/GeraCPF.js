import ValidaCPF from './validaCPF'

export default class GeraCPF {
  rand(min = 100000000, max = 999999999)
    return Math.floor(Math.random() * (max - min) + min)
}
