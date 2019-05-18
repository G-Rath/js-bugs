const merge = require('webpack-merge');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const common = require('./webpack.common');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = merge(common, {
  entry: { bundle: ['webpack-plugin-serve/client'] },
  mode: 'development',
  plugins: [
    new WebpackPluginServe({
      port: 3335,
      historyFallback: true,
      static: [
        common.output.path,
        '../public',
        '../'
      ],
      // liveReload: true,
      host: 'localhost'
    })
  ],
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  watch: true
});
