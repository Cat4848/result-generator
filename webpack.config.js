const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  target: "node",
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    })
  ]
};
