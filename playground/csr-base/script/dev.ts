import express, { Request, Response } from "express";
import webpack from "webpack";
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fs from 'node:fs';
import path from 'node:path';

import webpackConfig from './config/webpack.dev';

function __dev() {
  const app = express();
  const port = 8999;
  const compiler = webpack(webpackConfig as any);

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

  app.get('*', (req: Request, res: Response) => {
    const filePath = path.join(webpackConfig.output.path, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8').toString();
    res.send(html);
  });

  app.listen(port, () => {
    console.log(`dev server start at - http://localhost:${port}`);
  });
}

__dev();
