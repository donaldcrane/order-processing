import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderGateway } from "./order.socket";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderGateway, KnexService],
})
export class OrderModule {}
