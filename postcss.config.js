var postcssModules = require('postcss-modules')
var autoprefixer = require('autoprefixer')
var precss = require('precss')

module.exports = {
  plugins: [
    autoprefixer({ browsers: ['iOS >= 8', 'Android >= 4.1'] }),
    precss,
    postcssModules({
      scopeBehaviour: 'global'
    })
  ]
}
