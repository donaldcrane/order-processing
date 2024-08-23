import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateBrandDto, fetchQueryDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { Model } from "objection";
import { KnexService } from "src/knex.service";
import { Brand } from "src/models/brand.model";

@Injectable()
export class BrandService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateBrandDto) {
    const brand = await Brand.query().insert({ ...data });

    if (!brand) throw new BadRequestException("error creating user account");

    return brand;
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const brands = await Brand.query().page(page, pageSize);
    return brands;
  }

  async findOne(id: number) {
    const brand = await Brand.query().findOne({ meal_id: id });
    if (!brand) throw new NotFoundException("brand does not exist");
    return brand;
  }

  async update(id: number, data: UpdateBrandDto) {
    const brand = await Brand.query().findOne({ id });
    if (!brand) throw new NotFoundException("brand does not exist");

    const result = await Brand.query().findOne({ id }).update(data);

    return result;
  }

  async remove(id: number) {
    const brand = await Brand.query().findOne({ id });
    if (!brand) throw new NotFoundException("brand does not exist");

    await Brand.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
