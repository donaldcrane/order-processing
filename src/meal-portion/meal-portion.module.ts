import { Module } from "@nestjs/common";
import { MealPortionService } from "./meal-portion.service";
import { MealPortionController } from "./meal-portion.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [MealPortionController],
  providers: [MealPortionService, KnexService],
})
export class MealPortionModule {}
