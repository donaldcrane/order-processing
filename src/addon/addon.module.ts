import { Module } from "@nestjs/common";
import { AddonService } from "./addon.service";
import { AddonController } from "./addon.controller";
import { KnexService } from "src/knex.service";

@Module({
  controllers: [AddonController],
  providers: [AddonService, KnexService],
})
export class AddonModule {}
