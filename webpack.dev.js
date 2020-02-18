const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  // When inspecting, files are unminified
  devtool: 'inline-source-map',
})