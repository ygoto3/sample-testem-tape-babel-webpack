"use strict";

const path = require("path");

module.exports = {
  entry: {
    tests: [
      "phantomjs-polyfill",
      path.join(__dirname, "webpack.test.bootstrap.js")
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        stage: 0
      }
    }]
  },
  node: {
    fs: 'empty'
  }
};
