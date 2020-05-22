const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
          use: [
            "style-loader",
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  postcssPresetEnv({
                    stage: 0,
                  }),
                ],
              },
            },
          ],
        },
        {
          test: /\.js?/,
          exclude: {
            test: /node_modules/,
          },
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(ROOT_PATH, "./public/index.html"),
      }),
    ],
  };
};
