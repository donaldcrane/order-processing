import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsBoolean, IsOptional, IsObject, IsDate } from "class-validator";
import { CalculatedOrder } from "src/models/calculated-order.model";

export class CreateOrderDto {
  @IsNumber()
  @ApiProperty({ required: true, example: 10000 })
  total_amount!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 5 })
  no_of_mealbags_delivered!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 3 })
  no_of_drinks_delivered!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  shelf_id!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  confirmed_by_id!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 2 })
  completed_by_id!: number;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  completed!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: true })
  scheduled!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  cancelled!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  kitchen_accepted!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  kitchen_cancelled!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  kitchen_dispatched!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  kitchen_prepared!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  rider_assigned!: boolean;

  @IsNumber()
  @ApiProperty({ required: true, example: 3 })
  rider_id!: number;

  @IsBoolean()
  @ApiProperty({ required: true, example: true })
  paid!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  shop_accepted!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  shop_prepared!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  rider_started!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  rider_arrived!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  is_failed_trip!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  is_hidden!: boolean;

  @IsString()
  @ApiProperty({ required: true, example: "ORD12345" })
  order_code!: string;

  @IsObject()
  @ApiProperty({ required: false, example: {} })
  failed_trip_details!: object;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "B123" })
  box_number!: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: new Date().toISOString() })
  kitchen_dispatched_time!: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: new Date().toISOString() })
  scheduled_delivery_date!: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: new Date().toISOString() })
  scheduled_delivery_time!: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: new Date().toISOString() })
  completed_time!: Date;

  @IsObject()
  @ApiProperty({ required: true, example: {} })
  calculatedOrder!: CalculatedOrder;

  @IsDate()
  @ApiProperty({ required: true, example: new Date().toISOString() })
  created_at!: Date;

  @IsDate()
  @ApiProperty({ required: true, example: new Date().toISOString() })
  updated_at!: Date;
}
