import { ConfigService } from "@nestjs/config";
import * as dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config();
const configService = new ConfigService();

const db = {
  development: {
    client: "pg",
    connection: configService.get("DATABASE_URL"),
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: configService.get("DATABASE_URL"),
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },

  production: {
    client: "pg",
    connection: configService.get("DATABASE_URL"),
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
};
export default db;
