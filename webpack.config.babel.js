var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const NODE = path.resolve(__dirname, 'node_modules');
const PATHS = {
  app: path.join(__dirname,'./src/index.jsx'),
  build: path.join(__dirname, 'build'),
  jquery: 'script!jquery/dist/jquery.min.js',
  foundation: 'script!foundation-sites/dist/foundation.min.js'
};

module.exports = {
  entry: [
    PATHS.jquery,
    PATHS.foundation,
    PATHS.app
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.json'],
    alias: {
      Nav: path.resolve(__dirname, 'src/Nav.jsx')
    }
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test:/\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      }
    ]
  },
};
