import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

describe('AuthController', () => {
    let controller: JwtAuthGuard;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [JwtAuthGuard],
            providers: [JwtModule, JwtService, Reflector, ConfigService],
        }).compile();

        controller = module.get<JwtAuthGuard>(AuthGuard);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
