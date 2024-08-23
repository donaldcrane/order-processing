import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { OrderTotalAmountService } from "./order-total-amount.service";
import { CreateOrderTypeAmountDto } from "./dto/create-order-type-amount.dto";
import { UpdateOrderTypeAmountDto } from "./dto/update-order-type-amount.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("order-type-amounts")
@Controller("order-type-amounts")
export class OrderTypeAmountController {
  constructor(private readonly orderTotalAmountService: OrderTotalAmountService) {}

  @ApiOperation({ summary: "create orderTotalAmount" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createOrderTypeAmountDto: CreateOrderTypeAmountDto) {
    return this.orderTotalAmountService.create(createOrderTypeAmountDto);
  }

  @ApiOperation({ summary: "fetch orderTotalAmounts" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.orderTotalAmountService.findAll(query);
  }

  @ApiOperation({ summary: "get orderTotalAmount" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.orderTotalAmountService.findOne(+id);
  }

  @ApiOperation({ summary: "update orderTotalAmount" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderTypeAmountDto: UpdateOrderTypeAmountDto) {
    return this.orderTotalAmountService.update(+id, updateOrderTypeAmountDto);
  }

  @ApiOperation({ summary: "delete orderTotalAmount" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderTotalAmountService.remove(+id);
  }
}
