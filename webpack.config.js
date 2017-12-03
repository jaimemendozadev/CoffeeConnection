var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

// const VENDOR_LIBS = [
//   'react', 'react-redux', 'react-dom', 'react-input-range','react-router','axios','express','express-graphql', 'body-parser','dotenv','mongoose','passport','path','rimraf','webpack','babel-core','babel-loader','babel-preset-env','babel-preset-es2015','css-loader','nodemon','style-loader','webpack-dev-server'
// ];

module.exports = {
  target: 'node',
  entry: {
    bundle: './index.js'
  //  vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'client/public/index.html'
    })
  ]
};
