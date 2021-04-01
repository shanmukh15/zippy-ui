const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
    clean: true
  },
  devtool : 'source-map',
  plugins: [
    new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({
      title: "Zippy | Yuuru"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "assests"), to: path.resolve(__dirname, "dist", "assests") },
        { from: path.resolve(__dirname, "_redirects"), to: path.resolve(__dirname, "dist") }
      ],
    }),
  ],
};
