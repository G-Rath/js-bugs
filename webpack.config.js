const { resolve } = require('path');

const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

module.exports = {
    context: __dirname,
    entry: ['./app.js', 'webpack-plugin-serve/client'],
    mode: 'development',
    output: {
        filename: './output.js',
        path: resolve(__dirname, './output'),
        publicPath: 'output/'
    },
    plugins: [new Serve({
        // [::] for some reason doesn't work (but [::1] does)
        host: 'localhost'
    })],
    watch: true
};
