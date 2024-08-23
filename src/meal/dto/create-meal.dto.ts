import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateMealDto {
  @IsString()
  @ApiProperty({ required: true, example: 1000 })
  amount?: number;

  @IsString()
  @ApiProperty({ required: true, example: 2 })
  brand_id?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  internal_profit?: number;
}
