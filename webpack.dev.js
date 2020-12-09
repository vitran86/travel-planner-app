const path = require("path");

const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
/* const WorkboxPlugin = require("workbox-webpack-plugin"); */

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: "file-loader",
        options: { name: "[name].[ext]" },
      },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [
    /* new WorkboxPlugin.GenerateSW(), */
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
};
