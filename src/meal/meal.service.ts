import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateMealDto } from "./dto/create-meal.dto";
import { UpdateMealDto } from "./dto/update-meal.dto";
import { KnexService } from "src/knex.service";
import { Model } from "objection";
import { Meal } from "src/models/meal.model";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@Injectable()
export class MealService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateMealDto) {
    const meal = await Meal.query().insert({ ...data });

    if (!meal) throw new BadRequestException("error creating user account");

    return meal;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const meals = await Meal.query().page(page, pageSize);
    return meals;
  }

  async findOne(id: number) {
    const meal = await Meal.query().findOne({ meal_id: id });
    if (!meal) throw new NotFoundException("meal does not exist");
    return meal;
  }

  async update(id: number, data: UpdateMealDto) {
    const meal = await Meal.query().findOne({ id });
    if (!meal) throw new NotFoundException("meal does not exist");

    const result = await Meal.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const meal = await Meal.query().findOne({ id });
    if (!meal) throw new NotFoundException("meal does not exist");

    await Meal.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
