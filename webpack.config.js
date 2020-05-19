const path = require("path");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "app", "index"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  devtool: "source-map",
};
