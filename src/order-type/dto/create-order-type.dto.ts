import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateOrderTypeDto {
  @IsString()
  @ApiProperty({ required: true, example: 1 })
  order_id?: number;

  @IsString()
  @ApiProperty({ required: true, example: "d1" })
  name?: string;
}
