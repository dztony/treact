import sharedConfig from './webpack.shared.ts';

import { merge } from 'webpack-merge';
import webpack from 'webpack';
import PluginReactRefresh from '@pmmmwh/react-refresh-webpack-plugin';

export default merge(sharedConfig, {
  mode: 'development',
  plugins: [
    ...sharedConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new PluginReactRefresh(),
  ],
  entry: [
    sharedConfig.entry,
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&name=client&hot=true&live-load=true',
  ],
} as any);
