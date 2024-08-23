import { Module } from "@nestjs/common";
import { OrderTypeService } from "./order-type.service";
import { OrderTypeController } from "./order-type.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [OrderTypeController],
  providers: [OrderTypeService, KnexService],
})
export class OrderTypeModule {}
