import Redis from 'ioredis';
import { promisify } from 'util';

const client = new Redis();
export const getRedis = (value: string) => {
  const syncRedisGet = promisify(client.get).bind(client);
  return syncRedisGet(value);
};

export const setRedis = (key: string, value: string, time: string = '6000') => {
  const syncRedisSet = promisify(client.set).bind(client);
  return syncRedisSet(key, value);
};

export const delRedis = (key: string) => {
  const syncRedisDel = promisify(client.del).bind(client);
  return syncRedisDel(key);
};
