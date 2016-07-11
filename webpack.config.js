var NODE_ENV=process.env.NODE_ENV || 'development';
var webpack=require('webpack');

module.exports = {
  entry: './src/HighlighterButton',
  output: {
    path: __dirname+'/dist',
    filename: 'index.js'
  },
  watch:NODE_ENV==='development',
  devtool:'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
    }]
  },
  externals:{
    "medium-editor":"MediumEditor"
  }
};