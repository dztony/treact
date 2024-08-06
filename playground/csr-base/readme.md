# debug

## HMR
- js 代码的 HMR
  - 效果：即无需刷新页面，改动直接生效，而且能够保留 react 组件状态
  - 当前使用了 react fast refresh 插件：https://blog.csdn.net/kitty007th/article/details/137007490
  - react fast refresh 插件地址：https://github.com/pmmmwh/react-refresh-webpack-plugin
- CSS HMR、SASS HMR
  - 本地使用 style-loader，而不要对 css 文件进行单独抽离
- ts、tsx 等文件的 HMR
  - 直接添加 babel 的 typescript 规则集

## TODO
- 文件路由？
- 打包文件分类：图片、js、css 区分到不同的目录
- 路径别名？
- 替换 babel？使用 esbuild 或者 swc？需要调研
- 最终目标
  - 抽象成库，对外只暴露 treact.config.ts 文件的入口
  - 支持 treact dev 本地开发
  - 支持 treact build 开发环境打包
  - 支持 treact preview 本地预览
