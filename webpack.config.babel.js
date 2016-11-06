const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const PATHS = {
  app: '',
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: './app/index.jsx',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loaders: ['babel'],
      }
    ]
  },
};
