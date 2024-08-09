import path from 'node:path';
import url from 'node:url';
import { defineBuildConfig } from 'unbuild';
import pkg from './package.json';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineBuildConfig({
  entries: [
    'src/'
  ],
  clean: true,
  outDir: 'dist',
  declaration: true,
  failOnWarn: false,
  externals: [
    /node_modules/
  ],
});
