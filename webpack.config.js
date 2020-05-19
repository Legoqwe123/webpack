const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "app", "index"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],
};
