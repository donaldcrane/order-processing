import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [UserController],
  providers: [UserService, KnexService],
  exports: [UserService],
})
export class UserModule {}
