import { fileURLToPath } from 'node:url';
import path from 'node:path';

export function getDirname(importMetaUrl: string) {
  const filename = fileURLToPath(importMetaUrl);
  return path.dirname(filename);
}
