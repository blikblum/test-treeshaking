var path = require('path')

var DIST_DIR = 'dist'

module.exports = {
  entry: {
    'classes': './test-classes.js',
    'lodash-es': './test-lodash-es.js',
    'lodash-modular': './test-lodash-modular.js',
    'lodash-next': './test-lodash-next.js',
    'underscore': './test-underscore.js',
    'nextbone-all': './test-nextbone-all.js',
    'nextbone-model': './test-nextbone-model.js',
    'nextbone-collection': './test-nextbone-collection.js',
    'nextbone-events': './test-nextbone-events.js',
    'nextbone-router': './test-nextbone-router.js'
  },
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
