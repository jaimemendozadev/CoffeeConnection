const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const clientConfig = {
  target: 'web',
  context: __dirname,
  entry: './client/src/App.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['client/public']),
    new HtmlWebpackPlugin({
      title: 'CoffeeConnection'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    publicPath: '/client/public/',
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
module.exports = clientConfig
