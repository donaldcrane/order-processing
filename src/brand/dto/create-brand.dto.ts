import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @ApiProperty({ required: true, example: "rice" })
  name?: string;
}

export class fetchQueryDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 0 })
  page: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 10 })
  pageSize: number;
}
