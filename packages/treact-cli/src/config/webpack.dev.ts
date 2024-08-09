import sharedConfig from './webpack.shared';

import { merge } from 'webpack-merge';
import webpack from 'webpack';
import PluginReactRefresh from '@pmmmwh/react-refresh-webpack-plugin';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default merge(sharedConfig, {
  mode: 'development',
  plugins: [
    ...sharedConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new PluginReactRefresh(),
  ],
  entry: [
    sharedConfig.entry,
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&name=client&hot=true&live-load=true',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // 'webpack-hot-middleware/client',
    require.resolve('webpack-hot-middleware/client'),
  ],
} as any);
