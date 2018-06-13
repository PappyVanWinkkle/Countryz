// webpack config
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
