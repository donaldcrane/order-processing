import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "objection";
import { KnexService } from "src/knex.service";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";
import { Log } from "src/models/log.model";

@Injectable()
export class LogService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async findAll({ page, pageSize }: fetchQueryDto) {
    const logs = await Log.query().page(page, pageSize);
    return logs;
  }

  async findOne(id: number) {
    const log = await Log.query().findOne({ meal_id: id });
    if (!log) throw new NotFoundException("brand does not exist");
    return log;
  }

  async remove(id: number) {
    const brand = await Log.query().findOne({ id });
    if (!brand) throw new NotFoundException("brand does not exist");

    await Log.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
