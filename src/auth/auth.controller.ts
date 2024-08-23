import { Controller, Post, ValidationPipe, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiBody({ type: LoginDto })
    @HttpCode(200)
    @Post('login')
    async login(@Body(ValidationPipe) body: LoginDto) {
        return this.authService.login(body);
    }
}
