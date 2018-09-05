module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    open: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
