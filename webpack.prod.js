const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * Minified Production Builds go here
 */
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './build/js/')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /\.js$/,
          name: 'common',
          chunks: 'all'
        }
      }
    },
  },
});
