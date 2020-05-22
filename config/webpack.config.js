const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ROOT_PATH, BUILD_DIRECTORY, ENTRY_DIRECTORY } = require("./constants");

module.exports = () => {
  return {
    mode: "none",
    devtool: false,
    entry: ENTRY_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },

    module: {
      rules: [
        {
          test: /\.css?/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../app/index.html"),
      }),
    ],
  };
};
