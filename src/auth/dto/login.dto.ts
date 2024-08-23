import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'donald@gmail.com' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'password' })
    password: string;
}

export class LoginWithSSODto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'donald@gmail.com' })
    email: string;
}
