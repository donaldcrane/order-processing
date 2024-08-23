import { Test, TestingModule } from "@nestjs/testing";
import { OrderTotalAmountService } from "./order-total-amount.service";

describe("OrderTypeAmountService", () => {
  let service: OrderTotalAmountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTotalAmountService],
    }).compile();

    service = module.get<OrderTotalAmountService>(OrderTotalAmountService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
