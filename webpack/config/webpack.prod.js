const path = require("path");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const CssMiniExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");

const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    optimization: {
      nodeEnv: "production",
      minimize: true,
      minimizer: [new TerserPlugin()],
      noEmitOnErrors: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      removeAvailableModules: true,
      occurrenceOrder: true,
      concatenateModules: true,
      providedExports: true,
      usedExports: true,
      sideEffects: true,
      namedModules: false,
      moduleIds: false,
      namedChunks: true,
      chunkIds: false,
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new CssMiniExtractPlugin({
        filename: "css/[contenthash:5].[id].css",
        chunkFilename: "css/[contenthash:5].[id].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css?/,
          use: [
            CssMiniExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  cssnano,
                  postcssPresetEnv({
                    stage: 0,
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
  });
};
