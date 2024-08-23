import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateAddonDto {
  @IsString()
  @ApiProperty({ required: true, example: 1000 })
  amount?: number;

  @IsString()
  @ApiProperty({ required: true, example: "d1" })
  meal_id?: string;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  meal_addon_id?: string;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  min_selection_no?: string;

  @IsString()
  @ApiProperty({ required: false, example: "d1" })
  meal_addon_category_id?: string;

  @ApiProperty({ required: true, example: {} })
  meal_data?: object;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  internal_profit?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  position?: number;

  @IsNumber()
  @ApiProperty({ required: false, example: 10 })
  quantity?: number;

  @ApiProperty({ required: true, example: ["http://fb.com"] })
  images?: string[];

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  is_combo: boolean;

  @ApiProperty({ required: false, example: {} })
  posist_data: object;
}
