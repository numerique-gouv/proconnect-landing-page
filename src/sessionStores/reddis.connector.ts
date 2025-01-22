import {
  default as Redis,
  default as RedisClient,
  type RedisOptions,
} from "ioredis";
import { config } from "../config";

const redisClients: { [key: string]: Redis } = {};

export const getNewRedisClient = (options: RedisOptions = {}) => {
  const clientKey = JSON.stringify(options);
  if (!redisClients[clientKey]) {
    const redisClient = new RedisClient(config.REDIS_URL, options);
    redisClient.on("connect", () =>
      console.log(
        `Connected to database : ${config.REDIS_URL} with options: ${clientKey}`
      )
    );
    redisClients[clientKey] = redisClient;
  }

  return redisClients[clientKey];
};
