import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "objection";
import { KnexService } from "src/knex.service";
import { CreateCalculatedOrderDto } from "./dto/create-calculated-order.dto";
import { UpdateCalculatedOrderDto } from "./dto/update-calculated-order.dto";
import { CalculatedOrder } from "src/models/calculated-order.model";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@Injectable()
export class CalculatedOrderService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateCalculatedOrderDto) {
    const calculatedOrder = await CalculatedOrder.query().insert({ ...data });

    if (!calculatedOrder) throw new BadRequestException("error creating user account");

    return calculatedOrder;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const calculatedOrders = await CalculatedOrder.query().page(page, pageSize);
    return calculatedOrders;
  }

  async findOne(id: number) {
    const calculatedOrder = await CalculatedOrder.query().findOne({ meal_id: id });
    if (!calculatedOrder) throw new NotFoundException("CalculatedOrder does not exist");
    return CalculatedOrder;
  }

  async update(id: number, data: UpdateCalculatedOrderDto) {
    const calculatedOrder = await CalculatedOrder.query().findOne({ id });
    if (!calculatedOrder) throw new NotFoundException("CalculatedOrder does not exist");

    const result = await CalculatedOrder.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const calculatedOrder = await CalculatedOrder.query().findOne({ id });
    if (!calculatedOrder) throw new NotFoundException("CalculatedOrder does not exist");

    await CalculatedOrder.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
