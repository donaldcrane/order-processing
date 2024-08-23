import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsBoolean, IsOptional, IsObject, IsDate } from "class-validator";

export class CreateMealPortionDto {
  @IsString()
  @ApiProperty({ required: true, example: "Portion Name" })
  name!: string;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  meal_id!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  brand_id!: number;

  @IsBoolean()
  @ApiProperty({ required: true, example: true })
  active!: boolean;

  @IsNumber()
  @ApiProperty({ required: true, example: 1000 })
  amount!: number;

  @IsObject()
  @ApiProperty({ required: true, example: {} })
  images!: any; // Adjust the type to match the structure of your JSON data

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  alcohol!: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 1 })
  item_no?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "This is a summary." })
  summary?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "200 calories" })
  calories?: string;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  is_addon!: boolean;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  is_combo!: boolean;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  position!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 1 })
  quantity!: number;

  @IsNumber()
  @ApiProperty({ required: true, example: 100 })
  internal_profit!: number;

  @IsBoolean()
  @ApiProperty({ required: true, example: false })
  home_page!: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "Item Type" })
  item_type?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "Please cook well" })
  order_note?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "Delicious meal" })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "18" })
  minumum_age?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "10" })
  available_no?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: "1" })
  meal_category_id?: string;

  @IsObject()
  @IsOptional()
  @ApiProperty({ required: false, example: [] })
  meal_tags?: any; // Adjust the type to match the structure of your JSON data

  @IsObject()
  @IsOptional()
  @ApiProperty({ required: false, example: [] })
  meal_keywords?: any; // Adjust the type to match the structure of your JSON data

  @IsObject()
  @IsOptional()
  @ApiProperty({ required: false, example: {} })
  posist_data?: any; // Adjust the type to match the structure of your JSON data

  @IsDate()
  @ApiProperty({ required: true, example: new Date().toISOString() })
  created_at!: Date;

  @IsDate()
  @ApiProperty({ required: true, example: new Date().toISOString() })
  updated_at!: Date;
}
