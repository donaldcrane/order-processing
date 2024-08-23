import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { MealPortionService } from "./meal-portion.service";
import { CreateMealPortionDto } from "./dto/create-meal-portion.dto";
import { UpdateMealPortionDto } from "./dto/update-meal-portion.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("meal-portions")
@Controller("meal-portions")
export class MealPortionController {
  constructor(private readonly mealPortionService: MealPortionService) {}
  @ApiOperation({ summary: "fetch meal portions" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createMealPortionDto: CreateMealPortionDto) {
    return this.mealPortionService.create(createMealPortionDto);
  }

  @ApiOperation({ summary: "fetch meal portions" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.mealPortionService.findAll(query);
  }

  @ApiOperation({ summary: "fetch meal portions" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.mealPortionService.findOne(+id);
  }

  @ApiOperation({ summary: "fetch meal portions" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMealPortionDto: UpdateMealPortionDto) {
    return this.mealPortionService.update(+id, updateMealPortionDto);
  }

  @ApiOperation({ summary: "fetch meal portions" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.mealPortionService.remove(+id);
  }
}
