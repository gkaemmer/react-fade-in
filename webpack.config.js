var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var env = process.env.NODE_ENV;
var isExample = process.env.EXAMPLE;

var config = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new webpack.EnvironmentPlugin(["NODE_ENV"])]
};

if (env === "production") {
  config.mode = "production";
}

if (isExample) {
  // Build example
  config.entry = path.join(__dirname, "example", "client.js");
  config.output.path = path.join(__dirname, "example", "public");
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: "./example/index.html"
    })
  );
}

module.exports = config;
