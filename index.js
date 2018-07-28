var err_message = new TypeError('All arguments have to be numeric.')

function isANumber (current) {
  return typeof current == 'number'
}

function scurvegen (coeff, start, speed, N) {
    var responseCurve = Array(N)
      for (var i = 0; i < N; i++) {
        responseCurve[i] = coeff*Math.log(i + 1)/(1+Math.exp(start - speed * i))
      }
    return responseCurve
}

function scurvecalc (coeff, start, speed, N, callback) {
  var args = Object.values(arguments)
  args.splice(-1)
  if (!args.every(isANumber)) throw err_message
  callback(null, scurvegen(coeff, start, speed, N))
}

module.exports = scurvecalc
