const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const CssMiniExtractPlugin = require("mini-css-extract-plugin");

const { ROOT_PATH, BUILD_DIRECTORY, ENTRY_DIRECTORY } = require("../constants");

module.exports = () => {
  return {
    entry: ENTRY_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(ROOT_PATH, "./public/index.html"),
      }),
      new CssMiniExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css?/,
          use: [
            "style-loader",
            CssMiniExtractPlugin.loader,
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
  };
};
