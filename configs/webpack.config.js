const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const root = join(__dirname, '..');

module.exports = {
  context: __dirname,
  entry: [join(root, 'src', 'index.js'), 'webpack-plugin-serve/client'],
  mode: 'development',
  output: {
    path: join(root, 'out'),
    filename: join('static', 'js', '[name].js'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(root, 'public', 'index.html'),
      inject: true
    }),
    new Serve({
      port: 3335,
      historyFallback: true,
      static: [
        join(root, 'out')
      ],
      host: 'localhost'
    })
  ],
  watch: true
};
