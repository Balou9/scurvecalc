# scurvecalc

[![build status](http://img.shields.io/travis/Balou9/scurvecalc.svg?style=flat)](http://travis-ci.org/Balou9/scurvecalc) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/scurvecalc?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/scurvecalc)

***

Calculate s-transformed marketing response

***

## Get it!

```
npm install --save scurvecalc
```

***

## Usage

``` js
var scurvecalc = require('scurvecalc')
scurvecalc(803243, 7, 0.93939, 150000, function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `scurvecalc(coeff, start, speed, N)`

***

## License

[MIT](./license.md)
