const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')

const webpackConfig = require('./config/webpack.dev')
const { HOST, PORT } = require('./constants')

const compiler = webpack(webpackConfig())

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  open: true,
  openPage: `http://${HOST}:${PORT}`,
  overlay: true,
  quiet: false,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      })
    )
  },
})

server.listen(PORT, HOST, () => {
  console.log(`Server listening  http://${HOST}:${PORT} `)
})
