const path = require('path')

const DIST_DIR = 'dist'

const underscoreExternal = false

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
  },
  externals: function(context, request, callback) {
    if (underscoreExternal && request === 'underscore' && context.indexOf('nextbone') !== -1) {
      return callback(null, 'commonjs ' + request);
    }
    callback()
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
