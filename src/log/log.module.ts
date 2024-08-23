import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { LogController } from "./log.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [LogController],
  providers: [LogService, KnexService],
})
export class LogModule {}
