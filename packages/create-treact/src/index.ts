import { chooseTemplate, copyTemplate, EnumMode, parseCommandOptions, printSuffixInfo } from './util';

import pc from 'picocolors';
import path from 'node:path';
import process from 'node:process';

function __main() {
  // 解析入参
  const options = parseCommandOptions();
  if (!Object.values(EnumMode).includes(options.mode)) {
    throw Error(pc.red(`unknown render mode ${pc.cyan(options.mode)}, expected ${pc.cyan(EnumMode.csr)} or ${pc.cyan(EnumMode.ssr)}`));
  }

  // 获取模板并复制
  const template = chooseTemplate(options.mode);
  const distTemplatePath = path.join(process.cwd(), options.name);
  copyTemplate(template.path, distTemplatePath);

  // 打印相关信息
  printSuffixInfo();
}

__main();
