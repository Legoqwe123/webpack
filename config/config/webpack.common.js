const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ROOT_PATH, BUILD_DIRECTORY, ENTRY_DIRECTORY } = require("../constants");

module.exports = () => {
  return {
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
        template: path.resolve(ROOT_PATH, "./app/index.html"),
      }),
    ],
  };
};
