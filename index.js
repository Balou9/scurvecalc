function scurvecalc (coeff, start, speed, N) {
  var budget = Array.from(Array(N).keys())
  return budget.map(function (each) {
    each = coeff*Math.log(each + 1)/(1+Math.exp(start - speed * each))
    return each
  })
}

module.exports = scurvecalc
