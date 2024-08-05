import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../config/webpack.dev';

function __dev() {
  const app = express();
  const port = 8999;
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    writeToDisk: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 2000,
    }),
  );

  app.use(webpackConfig.output.publicPath, express.static(webpackConfig.output.path));

  app.listen(port, () => {
    console.log(`dev server start at - http://localhost:${port}`);
  });
}

__dev();
