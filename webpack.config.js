const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  infrastructureLogging: {
    level: 'error',
  },
};
