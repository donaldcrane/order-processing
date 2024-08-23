import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateOrderTypeAmountDto {
  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  order_id?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10000 })
  total_amount?: number;

  @IsString()
  @ApiProperty({ required: false, example: "2:14" })
  time?: Date;
}
