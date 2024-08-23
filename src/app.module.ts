import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrderModule } from "./order/order.module";
import { KnexService } from "./knex.service";
import { UserModule } from "./user/user.module";
import { MealModule } from "./meal/meal.module";
import { AddonModule } from "./addon/addon.module";
import { BrandModule } from "./brand/brand.module";
import { CalculatedOrderModule } from "./calculated-order/calculated-order.module";
import { LogModule } from "./log/log.module";
import { MealPortionModule } from "./meal-portion/meal-portion.module";
import { OrderTypeModule } from "./order-type/order-type.module";
import { OrderTotalAmountModule } from "./order-total-amount/order-total-amount.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    UserModule,
    AuthModule,
    OrderModule,
    MealModule,
    AddonModule,
    BrandModule,
    CalculatedOrderModule,
    LogModule,
    MealPortionModule,
    OrderTypeModule,
    OrderTotalAmountModule,
  ],
  controllers: [AppController],
  providers: [AppService, KnexService],
  exports: [KnexService],
})
export class AppModule {}
