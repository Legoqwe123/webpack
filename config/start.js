const webpack = require("webpack");
const DevServer = require("webpack-dev-server");
const hot = require("webpack-hot-middleware");

const webpackConfig = require("./webpack.config");
const { HOST, PORT } = require("./constants");

const compiler = webpack(webpackConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: "none",
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      })
    );
  },
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening  http://${HOST}:${PORT} `);
});
