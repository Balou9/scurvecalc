var tape = require('tape')
var scurvecalc = require('./index.js')

tape('Scurve is', function (t) {
  t.ok(scurvecalc(803243, 7, 0.93939, 150000), 'is true')
  t.end()
})
