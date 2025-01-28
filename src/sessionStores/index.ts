import { Store } from "express-session";
import RedisStore from "connect-redis";
import { MemoryStore } from "express-session";
import { getNewRedisClient } from "./reddis.connector";
import { config } from "../config";

interface SessionStoreStrategy {
  getStore(): Store;
}

class RedisSessionStrategy implements SessionStoreStrategy {
  getStore(): Store {
    return new RedisStore({
      client: getNewRedisClient(),
      prefix: "pc:session:",
    });
  }
}

class MemorySessionStrategy implements SessionStoreStrategy {
  getStore(): Store {
    return new MemoryStore();
  }
}

export function createSessionStore(): Store {
  const isProduction = config.ENV === "production";
  const strategy: SessionStoreStrategy = isProduction
    ? new RedisSessionStrategy()
    : new MemorySessionStrategy();
  return strategy.getStore();
}
