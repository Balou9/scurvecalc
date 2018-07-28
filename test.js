var tape = require('tape')
var scurvecalc = require('./index.js')

tape('Scurve is', function (t) {
  scurvecalc(803243, 7, 0.93939, 150000, function (err, data) {
    if (err) throw err
    t.ok(data)
  })
  t.end()
})

tape('Scurvegen throws TypeError', function (t) {
  t.throws(scurvecalc.bind(null, 'Why', 0.93939, 150000))
  t.end()
})
