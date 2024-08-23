import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLogDto {
  @IsString()
  @ApiProperty({ required: true, example: 11 })
  order_id?: number;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  time?: string;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  description?: string;
}
