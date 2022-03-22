import Redis from 'ioredis';
import { promisify } from 'util';

const redisConnection = () => {
  try {
    const client = new Redis({
      reconnectOnError(err) {
        const targetError = 'READONLY';
        if (err.message.includes(targetError)) {
          return true;
        }
        console.log('redis reconnecting...');
        return false;
      },
      host: 'localhost',
      port: 6379,
    });

    client.on('connect', () => {
      console.log('redis connected');
    });

    client.on('error', (err) => {
      client.disconnect();
      throw client;
    });

    return client;
  } catch (error) {
    console.error(`Redis connection failed: ${error}`);
    return client;
  }
};

const client = redisConnection() as Redis.Redis;

export const getRedis = (value: string) => {
  const syncRedisGet = promisify(client.get).bind(client);
  return syncRedisGet(value);
};

export const setRedis = async (key: string, value: string, time: string = '7200') => {
  const syncRedisSet = new Promise((resolve, reject) => {
    client.set(key, value, 'ex', time, (err, reply) => {
      if (err) {
        return reject(err);
      }
      return resolve(reply);
    });
  });

  if (!syncRedisSet) {
    return null;
  }
  return syncRedisSet;
};

export const delRedis = (key: string) => {
  const syncRedisDel = promisify(client.del).bind(client);
  return syncRedisDel(key);
};
