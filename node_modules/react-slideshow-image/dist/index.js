
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-slideshow-image.cjs.production.min.js')
} else {
  module.exports = require('./react-slideshow-image.cjs.development.js')
}
