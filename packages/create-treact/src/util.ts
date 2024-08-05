import { Command } from 'commander';
import pc from 'picocolors';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import figlet from 'figlet';

import pkg from '../package.json';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export enum EnumMode {
  csr = 'csr',
  ssr = 'ssr',
}

type IOptions = {
  name: string;
  mode: EnumMode;
};

type ITemplate = {
  name: string;
  path: string;
};

export function parseCommandOptions(): IOptions {
  const program = new Command();
  program
    .name(pkg.name)
    .version(pkg.version)
    .description(pkg.description)

  program
    .option('-n, --name <string>', 'New project name, default name is treact-sample-<timestamp>', `treact-sample-${new Date().getTime()}`)
    .option(
      '-m, --mode <string>',
      `render mode, default value is ${pc.bgCyan(EnumMode.csr)}, option value is ${pc.cyan(EnumMode.csr)} or ${pc.cyan(EnumMode.ssr)}`,
      EnumMode.csr,
      )

  program.parse();
  return program.opts() as IOptions;
}

export function chooseTemplate(mode: EnumMode): ITemplate {
  const expectedTemplate = `template-react-${mode}`;

  const templateNameList = fs.readdirSync(path.join(__dirname, '../template'));
  if (!templateNameList.includes(expectedTemplate)) {
    throw Error(`template ${pc.cyan(expectedTemplate)} not found, please submit a issue to ${pc.blue('https://github.com/dztony/treact')}`);
  }

  return {
    name: expectedTemplate,
    path: path.join(__dirname, '../template', expectedTemplate),
  };
}

export function copyTemplate(from: string, to: string) {
  // const sourceFiles = fs.readdirSync(from, { encoding: 'utf8' });
  // console.log('sourceFiles', sourceFiles);
  // console.log(to);

  // TODO：复制前需要校验目标文件夹是否存在
  // 1. 如果存在，则需要用户决定是否覆盖
  //    如果用户选择 否，则需要停止创建
  //    如果用户选择 是，则需要先删除掉目标文件夹，再复制
  // 2. 如果不存在，则直接复制

  fs.cpSync(from, to, { recursive: true });
}

export function printSuffixInfo() {

  console.log(pc.green(figlet.textSync('T-react')));
  console.log(pc.gray('create template success!!'));
}
