const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const { ROOT_PATH, BUILD_DIRECTORY, ENTRY_DIRECTORY } = require('../constants');

module.exports = () => {
  return {
    entry: [
      path.resolve(ENTRY_DIRECTORY, 'index.js'),
      path.resolve(ROOT_PATH, './public/css/bootstrap.min.css'),
    ],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'js/[name].[hash:5].[id].js',
      chunkFilename: 'js/[name].[chunkhash:5].[id].js',
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(ROOT_PATH, './public/index.html'),
      }),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: true,
      }),
      new WebpackBar(),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[hash].[ext]',
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.js?/,
          exclude: {
            test: /node_modules/,
          },
          use: ['babel-loader'],
        },
      ],
    },
  };
};
