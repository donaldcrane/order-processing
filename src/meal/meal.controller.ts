import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { MealService } from "./meal.service";
import { CreateMealDto } from "./dto/create-meal.dto";
import { UpdateMealDto } from "./dto/update-meal.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("meals")
@Controller("meals")
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @ApiOperation({ summary: "create meals" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createMealDto: CreateMealDto) {
    return this.mealService.create(createMealDto);
  }

  @ApiOperation({ summary: "fetch meals" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.mealService.findAll(query);
  }

  @ApiOperation({ summary: "fetch meal" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.mealService.findOne(+id);
  }

  @ApiOperation({ summary: "update meals" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealService.update(+id, updateMealDto);
  }

  @ApiOperation({ summary: "delete meals" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.mealService.remove(+id);
  }
}
