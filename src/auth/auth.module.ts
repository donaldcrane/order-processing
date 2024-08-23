import { Module } from "@nestjs/common";
import * as Joi from "joi";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { KnexService } from "src/knex.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: "3600s",
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
    UserModule,
  ],
  providers: [AuthService, KnexService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
