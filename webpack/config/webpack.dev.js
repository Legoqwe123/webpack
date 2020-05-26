const merge = require("webpack-merge");
const postcssPresetEnv = require("postcss-preset-env");

const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    module: {
      rules: [
        {
          test: /\.css?/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
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
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            emitWarning: true,
            failOnError: true,
          },
        },
      ],
    },
  });
};
