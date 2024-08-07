import pkg from '../../package.json';

export function printLog() {
  console.log('打印来自 utils 123');
}

export function getAppName() {
  return pkg.name;
}