import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({ required: true, example: "wale" })
  name?: string;

  @IsString()
  @ApiProperty({ required: true, example: "donald@gmail.com" })
  email?: string;

  @IsString()
  @ApiProperty({ required: true, example: "password" })
  password?: string;

  @IsString()
  @ApiProperty({ required: true, example: "+2348100582920" })
  phone?: string;

  @IsString()
  @ApiProperty({ required: true, example: "http://fb.com" })
  photo?: string;

  @IsString()
  @ApiProperty({ required: true, example: "lagos, nigeria" })
  location: string;
}
