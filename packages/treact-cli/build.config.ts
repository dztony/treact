import path from 'node:path';
import url from 'node:url';
import { defineBuildConfig } from 'unbuild';
// import pkg from './package.json';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineBuildConfig({
  entries: ['src/cli.ts'],
  clean: true,
  outDir: 'dist',
  name: 'index.mjs',
  declaration: false,
  failOnWarn: false,
  // externals: [
  //   ...Object.keys(pkg.devDependencies),
  // ],
});
