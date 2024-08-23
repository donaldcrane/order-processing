import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealController } from "./meal.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [MealController],
  providers: [MealService, KnexService],
})
export class MealModule {}
