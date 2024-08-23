import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as Knex from "knex";

@Injectable()
export class KnexService {
  private readonly knex: any;

  constructor() {
    this.knex = Knex({
      client: "pg",
      connection: new ConfigService().get("DATABASE_URL"),
    });
  }

  getKnexInstance() {
    return this.knex;
  }
}
