import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderTypeAmountDto } from './create-order-type-amount.dto';

export class UpdateOrderTypeAmountDto extends PartialType(CreateOrderTypeAmountDto) {}
