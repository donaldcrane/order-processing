import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { CalculatedOrderService } from "./calculated-order.service";
import { CreateCalculatedOrderDto } from "./dto/create-calculated-order.dto";
import { UpdateCalculatedOrderDto } from "./dto/update-calculated-order.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("calculated-orders")
@Controller("calculated-orders")
export class CalculatedOrderController {
  constructor(private readonly calculatedOrderService: CalculatedOrderService) {}

  @ApiOperation({ summary: "create calculated-orders" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createCalculatedOrderDto: CreateCalculatedOrderDto) {
    return this.calculatedOrderService.create(createCalculatedOrderDto);
  }

  @ApiOperation({ summary: "fetch calculated-orders" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.calculatedOrderService.findAll(query);
  }

  @ApiOperation({ summary: "fetch calculated-order" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.calculatedOrderService.findOne(+id);
  }

  @ApiOperation({ summary: "update calculated-orders" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCalculatedOrderDto: UpdateCalculatedOrderDto) {
    return this.calculatedOrderService.update(+id, updateCalculatedOrderDto);
  }

  @ApiOperation({ summary: "delete calculated-orders" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.calculatedOrderService.remove(+id);
  }
}
