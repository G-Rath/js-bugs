const DotEnv = require('dotenv');
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const webpack = require('webpack');
const path = require('path');

const getCDNModules = isProduction => [
  {
    name: 'react',
    var: 'React',
    path: isProduction
      ? 'umd/react.production.min.js'
      : 'umd/react.development.js'
  },
  {
    name: 'react-dom',
    var: 'ReactDOM',
    path: isProduction
      ? 'umd/react-dom.production.min.js'
      : 'umd/react-dom.development.js'
  },
  {
    name: 'axios',
    var: 'axios',
    path: isProduction
      ? 'dist/axios.min.js'
      : 'dist/axios.js'
  },
  {
    name: 'prop-types',
    var: 'PropTypes',
    path: isProduction
      ? 'prop-types.min.js'
      : 'prop-types.js'
  }
];

const root = path.join(__dirname);
DotEnv.config({ path: path.join(root, '.env') });

// use BUST_CACHE if it's explicitly define; otherwise, check if production build
const cacheBust = process.env.BUST_CACHE === undefined
  ? process.env.NODE_ENV === 'production'
  : process.env.BUST_CACHE;

/**
 *
 * @type {webpack.Configuration}
 */
const config = {
  cache: true,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': path.join(root, 'src')
    }
  },
  stats: { assetsSort: '!chunks', colors: true },
  entry: {
    bundle: [
      '@babel/polyfill',
      path.join(root, 'src', 'index.jsx')
    ]
  },
  output: {
    path: path.join(root, 'out'),
    filename: path.join('static', 'js', `[name].${cacheBust ? '[chunkhash]' : 'lackluster'}.js`),
    publicPath: '/'
  },
  performance: {
    maxAssetSize: 5 * 1024 * 1024,
    maxEntrypointSize: 5 * 1024 * 1024
  },
  plugins: [
    new DotEnvPlugin({ path: path.join(root, '.env') }),
    new HtmlWebpackPlugin({
      cache: true,
      inject: true,
      template: path.join(root, 'public', 'index.html'),
      title: process.env.APP_TITLE
    }),
    new WebpackCdnPlugin({
      modules: getCDNModules(process.env.NODE_ENV === 'production')
      // pathToNodeModules: root
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
  ],
  optimization: {
    noEmitOnErrors: true,
    splitChunks: { chunks: 'all' }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          /src/,
          path.join(root, 'node_modules', 'webpack-plugin-serve'),
          path.join(root, 'node_modules', '@material-ui/styles')
        ],
        loader: 'babel-loader',
        options: {
          cwd: root,
          plugins: [
            [
              'import',
              {
                libraryName: '@material-ui/core',
                libraryDirectory: 'es',
                camel2DashComponentName: false,
                customName: name => {
                  const dirs = [
                    '@material-ui',
                    'core'
                  ];

                  if (name === 'createMuiTheme') {
                    dirs.push('styles');
                  }

                  return path.join(...dirs, name);
                }
              },
              '@material-ui/core'
            ],
            [
              'import',
              {
                libraryName: '@material-ui/icons',
                camel2DashComponentName: false
              },
              '@material-ui/icons'
            ],
            [
              'import',
              {
                libraryName: 'mdi-react',
                camel2DashComponentName: false
              },
              'mdi-react'
            ]
          ]
        }
      }
    ]
  }
};

module.exports = config;
