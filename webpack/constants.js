const { resolve } = require("path");
const { path: ROOT_PATH } = require("app-root-path");

exports.PORT = 3000;
exports.HOST = "localhost";

exports.ROOT_PATH = ROOT_PATH;
exports.BUILD_DIRECTORY = resolve(ROOT_PATH, "./build");
exports.ENTRY_DIRECTORY = resolve(ROOT_PATH, "./app");
