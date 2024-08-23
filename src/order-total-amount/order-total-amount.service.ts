import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderTypeAmountDto } from "./dto/create-order-type-amount.dto";
import { UpdateOrderTypeAmountDto } from "./dto/update-order-type-amount.dto";
import { Model } from "objection";
import { KnexService } from "src/knex.service";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";
import { OrderTotalAmount } from "src/models/order-total-amount.model";

@Injectable()
export class OrderTotalAmountService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateOrderTypeAmountDto) {
    const orderTotalAmount = await OrderTotalAmount.query().insert({ ...data });

    if (!orderTotalAmount) throw new BadRequestException("error creating user account");

    return orderTotalAmount;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const orderTotalAmount = await OrderTotalAmount.query().page(page, pageSize);
    return orderTotalAmount;
  }

  async findOne(id: number) {
    const orderTotalAmount = await OrderTotalAmount.query().findOne({ meal_id: id });
    if (!orderTotalAmount) throw new NotFoundException("brand does not exist");
    return orderTotalAmount;
  }

  async update(id: number, data: UpdateOrderTypeAmountDto) {
    const orderTotalAmount = await OrderTotalAmount.query().findOne({ id });
    if (!orderTotalAmount) throw new NotFoundException("brand does not exist");

    const result = await OrderTotalAmount.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const orderTotalAmount = await OrderTotalAmount.query().findOne({ id });
    if (!orderTotalAmount) throw new NotFoundException("brand does not exist");

    await OrderTotalAmount.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
