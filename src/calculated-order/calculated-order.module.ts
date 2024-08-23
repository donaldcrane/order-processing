import { Module } from "@nestjs/common";
import { CalculatedOrderService } from "./calculated-order.service";
import { CalculatedOrderController } from "./calculated-order.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [CalculatedOrderController],
  providers: [CalculatedOrderService, KnexService],
})
export class CalculatedOrderModule {}
