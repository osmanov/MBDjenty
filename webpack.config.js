var NODE_ENV=process.env.NODE_ENV || 'development';
var webpack=require('webpack');

module.exports = {
  entry: './src/list',
  output: {
    path: __dirname+'/dist',
    filename: 'index.js',
    library:'list'
  },
  watch:NODE_ENV==='development',
  devtool:'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
    }]
  }
};