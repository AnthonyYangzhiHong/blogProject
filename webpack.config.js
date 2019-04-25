const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
  'webpack-hot-middleware/client?reload=true',
  './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader?name=images/[name].[ext]'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};