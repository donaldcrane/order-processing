import { Test, TestingModule } from '@nestjs/testing';
import { MealPortionService } from './meal-portion.service';

describe('MealPortionService', () => {
  let service: MealPortionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPortionService],
    }).compile();

    service = module.get<MealPortionService>(MealPortionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
