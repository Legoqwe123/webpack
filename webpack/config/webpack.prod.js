const path = require("path");
const merge = require("webpack-merge");

const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
  });
};
