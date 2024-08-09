function __cli() {
  const args = process.argv.slice(2);
  console.log('args - ', args);
  if (args.length === 0) {
    console.log('当前可输入的命令支持 dev，build, preview');
    return process.exit(0);
  }

  if (args[0] === EnumCommand.dev) {
    console.log('启动本地开发服务器');
  } else if (args[0] === EnumCommand.build) {
    console.log('开启本地构建');
  } else if (args[0] === EnumCommand.preview) {
    console.log('启动本地预览');
  } else {
    console.log('暂未支持的命令 - ', args[0]);
  }
}

enum EnumCommand {
  dev = 'dev',          // 启动本地开发服务器
  build = 'build',      // 启动构建
  preview = 'preview',  // 本地预览
}

__cli();
