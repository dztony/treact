import { parseCommandOptions } from './util';

function __main() {
  console.log('执行脚手架 @dztony/create-treact 命令');
  const options = parseCommandOptions();
  console.log('获取的参数 - ', options);
}

__main();
