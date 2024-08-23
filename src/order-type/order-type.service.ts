import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderTypeDto } from "./dto/create-order-type.dto";
import { UpdateOrderTypeDto } from "./dto/update-order-type.dto";
import { OrderType } from "src/models/order-type.model";
import { KnexService } from "src/knex.service";
import { Model } from "objection";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@Injectable()
export class OrderTypeService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateOrderTypeDto) {
    const orderType = await OrderType.query().insert({ ...data });

    if (!orderType) throw new BadRequestException("error creating user account");

    return orderType;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const orderTypes = await OrderType.query().page(page, pageSize);
    return orderTypes;
  }

  async findOne(id: number) {
    const orderType = await OrderType.query().findOne({ meal_id: id });
    if (!orderType) throw new NotFoundException("orderType does not exist");
    return orderType;
  }

  async update(id: number, data: UpdateOrderTypeDto) {
    const orderType = await OrderType.query().findOne({ id });
    if (!orderType) throw new NotFoundException("orderType does not exist");

    const result = await OrderType.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const orderType = await OrderType.query().findOne({ id });
    if (!orderType) throw new NotFoundException("orderType does not exist");

    await OrderType.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
