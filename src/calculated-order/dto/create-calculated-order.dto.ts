import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateCalculatedOrderDto {
  @IsString()
  @ApiProperty({ required: true, example: 1000 })
  total_amount?: number;

  @IsString()
  @ApiProperty({ required: true, example: 1 })
  order_id?: number;

  @IsString()
  @ApiProperty({ required: false, example: true })
  free_delivery?: boolean;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  address_details?: string;

  @IsString()
  @ApiProperty({ required: false, example: 23333 })
  lat?: number;

  @ApiProperty({ required: true, example: {} })
  meal_data?: object;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  delivery_fee?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  lng?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  user_id?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  cokitchen_id?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  prev_price?: number;

  @ApiProperty({ required: true, example: "http://fb.com" })
  cokitchen_polygon_id?: string;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  pickup: boolean;

  @ApiProperty({ required: false, example: {} })
  posist_data: object;
}
