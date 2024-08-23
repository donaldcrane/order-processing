import { Controller, Get, Post, Param, Body, Put, Delete, Query, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { GetUser } from "src/auth/user.decorator";
import { UserPayLoad } from "src/auth/types";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("orders")
@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: "create order" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  createOrder(@Body() orderData: CreateOrderDto, @GetUser() user: UserPayLoad) {
    return this.orderService.createOrder(orderData, user.id);
  }

  @ApiOperation({ summary: "get orders" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  getAllOrders(@Query() query: fetchQueryDto, @GetUser() user: UserPayLoad) {
    return this.orderService.getAllOrders(query, user.id);
  }

  @ApiOperation({ summary: "get order" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  getOrderById(@Param("id") id: string) {
    return this.orderService.getOrderById(id);
  }

  @ApiOperation({ summary: "update order" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Put(":id")
  updateOrder(@Param("id") id: string, @Body() updateData: UpdateOrderDto) {
    return this.orderService.updateOrder(id, updateData);
  }

  @ApiOperation({ summary: "delete order" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  deleteOrder(@Param("id") id: string) {
    return this.orderService.deleteOrder(id);
  }
}
