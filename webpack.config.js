var NODE_ENV=process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/list',
  output: {
    path: __dirname+'/dist',
    filename: 'index.js',
    library:'list'
  },
  watch:true,
  devtool:'source-map'
};