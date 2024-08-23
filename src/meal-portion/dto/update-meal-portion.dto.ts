import { PartialType } from '@nestjs/mapped-types';
import { CreateMealPortionDto } from './create-meal-portion.dto';

export class UpdateMealPortionDto extends PartialType(CreateMealPortionDto) {}
