import { Module } from "@nestjs/common";
import { OrderTotalAmountService } from "./order-total-amount.service";
import { OrderTypeAmountController } from "./order-total-amount.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [OrderTypeAmountController],
  providers: [OrderTotalAmountService, KnexService],
})
export class OrderTotalAmountModule {}
