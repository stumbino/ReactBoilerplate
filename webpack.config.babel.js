const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const NODE = path.resolve(__dirname, 'node_modules');
const PATHS = {
  app: path.join(__dirname,'./app/index.jsx'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.json'],
    alias: {
      Nav: path.resolve(__dirname, 'app/Nav.jsx')
    }
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loaders: ['babel'],
      },
      {
        test:/\.html$/,
        loader: 'file-loader?name=[name].[ext]',

      }
    ]
  },
};
