var path = require('path')

var BUILD_DIR = path.resolve(__dirname, '../public')
var APP_DIR = path.resolve(__dirname, 'app')

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      // javascript
      {test: /\.jsx?/, include: APP_DIR, loader: 'babel-loader'},
      {test: /\.js?/, include: APP_DIR, loader: 'babel-loader'},
      // style
      {test: /\.scss?/, include: APP_DIR, loaders: ['style', 'css', 'sass']},
      // svgs
      {test: /\.svg?/, include: APP_DIR, loader: 'raw-loader'},
      // fonts
      {test: /\.eot?/, include: APP_DIR, loader: 'file?prefix=font/'},
      {test: /\.woff?/, include: APP_DIR, loader: 'file?prefix=font/'},
      {test: /\.ttf?/, include: APP_DIR, loader: 'file?prefix=font/'},
      // images
      {test: /\.jpg?/, include: APP_DIR, loader: 'url?limit=25000'},
      {test: /\.png?/, include: APP_DIR, loader: 'url?limit=25000'}
    ]
  }
}

module.exports = config
