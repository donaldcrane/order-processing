import { Test, TestingModule } from "@nestjs/testing";
import { OrderTypeAmountController } from "./order-total-amount.controller";
import { OrderTotalAmountService } from "./order-total-amount.service";

describe("OrderTypeAmountController", () => {
  let controller: OrderTypeAmountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTypeAmountController],
      providers: [OrderTotalAmountService],
    }).compile();

    controller = module.get<OrderTypeAmountController>(OrderTypeAmountController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
