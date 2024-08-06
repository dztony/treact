import path from 'node:path';
import PluginHtmlWebpack from "html-webpack-plugin";
import PluginMiniCssExtract from 'mini-css-extract-plugin';
import PluginTerserWebpack from 'terser-webpack-plugin';
import webpack from 'webpack';

import { getDirname } from "./helper/utils.ts";

const __dirname = getDirname(import.meta.url);

export default {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].async.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        // 资源类处理与路径
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[hash:8][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        }
      },
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          // 'style-loader',
          PluginMiniCssExtract.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: true,
                localIdentName: '[local]_[contenthash:8]',
              },
              esModule: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {

              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TEST_VALUE': JSON.stringify('test value from define plugin'),
    }),
    new PluginMiniCssExtract({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }),
    new PluginHtmlWebpack({
      title: 'Template react',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    chunkIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new PluginTerserWebpack({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      enforceSizeThreshold: 50000,
      minChunks: 1,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'lib_react',
          priority: 1,
        },
        'react-router-dom': {
          test: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
          name: 'lib_react-router-dom',
          priority: 1,
        },
        lodash: {
          test: /[\\/]node_modules[\\/](lodash)[\\/]/,
          name: 'lib_lodash',
          priority: 1,
        },
        vendors: {
          test: /[\\/]node_modules[\\/][\\/]/,
          name: 'lib_vendors',
          priority: -10, // 优先级，如果模块命中多个缓存组配置，则优先被分配到优先级大的缓存组
        },
      },
    },
  },
  stats: 'errors-only',
};
