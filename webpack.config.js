const path = require('path')

const DIST_DIR = 'dist'

const baseConfig = {  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, DIST_DIR)
  },
  devtool: false,
  optimization: {
    concatenateModules: true,
    minimize: true
  },
  resolve: {
    symlinks: false
  }
}

const entries = ['classes',
  'lodash-es',
  'lodash-modular',
  //'lodash-next',
  'underscore',
  'nextbone-all',
  'nextbone-model',
  'nextbone-collection',
  'nextbone-events',
  'nextbone-router'
]

const configs = entries.map(entry => {
  return Object.assign({entry: {[entry]: `./test-${entry}.js`}}, baseConfig)
})

module.exports = configs
