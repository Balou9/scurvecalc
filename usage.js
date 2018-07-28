var scurvecalc = require('./index.js')

scurvecalc(803243, 7, 0.93939, 150000, function (err, data) {
  console.log(data)
})

scurvecalc(787887, 7, 0.93939, 150000, function (err, data) {
  console.log(data)
})

scurvecalc('787887', 7, 0.93939, 150000, function (err, data) {
  console.log(data)
})
