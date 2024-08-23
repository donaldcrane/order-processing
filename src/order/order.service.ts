import { Injectable, OnModuleInit } from "@nestjs/common";
import { Model, fn } from "objection";
import { KnexService } from "../knex.service";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { Order } from "src/models/order.model";
import { Log } from "src/models/log.model";
import { CreateOrderDto } from "./dto/create-order.dto";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";
import { OrderTotalAmount } from "src/models/order-total-amount.model";

@Injectable()
@WebSocketGateway()
export class OrderService implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async createOrder(data: CreateOrderDto, id: number): Promise<Order> {
    const order = await Order.query().insert({ user_id: id, ...data });
    this.server.emit("orderCreated", order);
    return order;
  }

  async getAllOrders({ page, pageSize }: fetchQueryDto, id: number) {
    const orderTypes = await Order.query().where("id", id).page(page, pageSize);
    return orderTypes;
  }

  async getOrderById(orderId: string): Promise<Order> {
    return Order.query().findById(orderId).withGraphFetched("[calculatedOrder, logs]");
  }

  async updateOrder(orderId: string, updateData: any): Promise<Order> {
    const order = await Order.query().patchAndFetchById(orderId, updateData);
    this.server.emit("orderUpdated", order);
    return order;
  }

  async deleteOrder(orderId: string): Promise<number> {
    const rowsDeleted = await Order.query().deleteById(orderId);
    this.server.emit("orderDeleted", { orderId });
    return rowsDeleted;
  }

  async processOrder(orderId: string): Promise<Order> {
    const order = await this.getOrderById(orderId);

    if (!order.kitchen_accepted) {
      throw new Error("Order has not been accepted by the kitchen.");
    }

    order.kitchen_dispatched = true;
    await order.$query().patch();

    const totalAmount = await this.calculateTotalOrderAmount(order);
    await order.$query().patch({ total_amount: totalAmount });

    await this.logOrderStatus(orderId, "Order dispatched by kitchen");

    this.server.emit("orderProcessed", order);
    return order;
  }

  async calculateTotalOrderAmount(order: Order): Promise<number> {
    const calculatedOrder = await OrderTotalAmount.query().findById(order.id);
    return calculatedOrder.total_amount;
  }

  async logOrderStatus(orderId: string, description: string): Promise<void> {
    await Log.query().insert({
      order_id: orderId,
      description,
      time: fn.now(),
    });
  }
}
