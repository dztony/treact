import sharedConfig from './webpack.shared.ts';

import { merge } from 'webpack-merge';
import webpack from 'webpack';

export default merge(sharedConfig, {
  mode: 'development',
  plugins: [
    // @ts-ignore
    ...sharedConfig.plugins,
    // @ts-ignore
    new webpack.HotModuleReplacementPlugin(),
  ],
  // @ts-ignore
  entry: [
    sharedConfig.entry,
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&name=client&reload=true',
  ],
});
