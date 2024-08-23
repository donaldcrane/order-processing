import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from "@nestjs/common";
import { OrderTypeService } from "./order-type.service";
import { CreateOrderTypeDto } from "./dto/create-order-type.dto";
import { UpdateOrderTypeDto } from "./dto/update-order-type.dto";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("order-types")
@Controller("order-types")
export class OrderTypeController {
  constructor(private readonly orderTypeService: OrderTypeService) {}

  @ApiOperation({ summary: "create orderType" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createOrderTypeDto: CreateOrderTypeDto) {
    return this.orderTypeService.create(createOrderTypeDto);
  }

  @ApiOperation({ summary: "get orderTypes" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.orderTypeService.findAll(query);
  }

  @ApiOperation({ summary: "get orderType" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.orderTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "update orderType" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderTypeDto: UpdateOrderTypeDto) {
    return this.orderTypeService.update(+id, updateOrderTypeDto);
  }

  @ApiOperation({ summary: "delete orderType" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderTypeService.remove(+id);
  }
}
