const path = require("path");
const merge = require("webpack-merge");

const { ROOT_PATH, BUILD_DIRECTORY, ENTRY_DIRECTORY } = require("../constants");
const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
  });
};
