import { Command } from 'commander';
import pkg from '../package.json';
import pc from 'picocolors';

enum EnumMode {
  csr = 'csr',
  ssr = 'ssr',
}

export function parseCommandOptions() {
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
  return program.opts();
}