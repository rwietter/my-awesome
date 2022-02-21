import { enable, log as logger } from 'debug';

const log = ({ path = '*', message = '' }) => {
  enable(path);
  return logger(`request at ${new Date().toLocaleDateString()} with => ${message}`);
};

export { log };
