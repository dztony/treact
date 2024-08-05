import { chooseTemplate, EnumMode, parseCommandOptions } from './util';

import pc from 'picocolors';

function __main() {
  console.log('执行脚手架 @dztony/create-treact 命令 - start');
  const options = parseCommandOptions();
  console.log('获取的参数 - ', options);
  if (!Object.values(EnumMode).includes(options.mode)) {
    throw Error(pc.red(`unknown render mode ${pc.cyan(options.mode)}, expected ${pc.cyan(EnumMode.csr)} or ${pc.cyan(EnumMode.ssr)}`));
  }
  const targetTemplatePath = chooseTemplate(options.mode);

  console.log('目标模板  - ', targetTemplatePath);
  console.log('执行脚手架 @dztony/create-treact 命令 - end');
}

__main();
