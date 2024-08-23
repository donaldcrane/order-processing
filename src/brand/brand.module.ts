import { Module } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { BrandController } from "./brand.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [BrandController],
  providers: [BrandService, KnexService],
})
export class BrandModule {}
