import { Test, TestingModule } from '@nestjs/testing';
import { MealPortionController } from './meal-portion.controller';
import { MealPortionService } from './meal-portion.service';

describe('MealPortionController', () => {
  let controller: MealPortionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealPortionController],
      providers: [MealPortionService],
    }).compile();

    controller = module.get<MealPortionController>(MealPortionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
