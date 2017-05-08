var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV;
var isExample = process.env.EXAMPLE;

var config = {
  entry: {
    'react-appear': path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

if (isExample) {
  // Build example
  config.entry = {
    index: path.join(__dirname, 'example', 'client.js')
  };
  config.output.path = path.join(__dirname, 'example', 'public');
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  );
}


module.exports = config
