import { Command } from 'commander';
import pc from 'picocolors';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

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

export function chooseTemplate(mode: EnumMode) {
  const expectedTemplate = `template-react-${mode}`;

  const templateNameList = fs.readdirSync(path.join(__dirname, '../template'));
  if (!templateNameList.includes(expectedTemplate)) {
    throw Error(`template ${pc.cyan(expectedTemplate)} not found, please submit a issue to ${pc.blue('https://github.com/dztony/treact')}`);
  }

  return path.join(__dirname, '../template', expectedTemplate);
}


