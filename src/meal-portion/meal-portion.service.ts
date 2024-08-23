import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateMealPortionDto } from "./dto/create-meal-portion.dto";
import { UpdateMealPortionDto } from "./dto/update-meal-portion.dto";
import { KnexService } from "src/knex.service";
import { Model } from "objection";
import { MealPortion } from "src/models/meal-portion.model";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@Injectable()
export class MealPortionService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateMealPortionDto) {
    const mealPortion = await MealPortion.query().insert({ ...data });

    if (!mealPortion) throw new BadRequestException("error creating user account");

    return mealPortion;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const mealPortions = await MealPortion.query().page(page, pageSize);
    return mealPortions;
  }

  async findOne(id: number) {
    const mealPortion = await MealPortion.query().findOne({ meal_id: id });
    if (!mealPortion) throw new NotFoundException("mealPortion does not exist");
    return mealPortion;
  }

  async update(id: number, data: UpdateMealPortionDto) {
    const mealPortion = await MealPortion.query().findOne({ id });
    if (!mealPortion) throw new NotFoundException("mealPortion does not exist");

    const result = await MealPortion.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const mealPortion = await MealPortion.query().findOne({ id });
    if (!mealPortion) throw new NotFoundException("mealPortion does not exist");

    await MealPortion.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
