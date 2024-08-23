import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAddonDto } from "./dto/create-addon.dto";
import { UpdateAddonDto } from "./dto/update-addon.dto";
import { KnexService } from "src/knex.service";
import { Model } from "objection";
import { Addon } from "src/models/addon.model";

@Injectable()
export class AddonService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateAddonDto) {
    const addon = await Addon.query().insert({ ...data });

    if (!addon) throw new BadRequestException("error creating user account");

    return addon;
  }

  async findByAddonId(id: number) {
    const addon = await Addon.query().findOne({ id });
    if (!addon) throw new NotFoundException("Addon does not exist");
    return addon;
  }

  async findOne(id: number) {
    const addon = await Addon.query().findOne({ meal_id: id });
    if (!addon) throw new NotFoundException("Addon does not exist");
    return addon;
  }

  async update(id: number, data: UpdateAddonDto) {
    const addon = await Addon.query().findOne({ id });
    if (!addon) throw new NotFoundException("Addon does not exist");

    await Addon.query().findOne({ id }).update(data);

    return `This action updates a #${id} addon`;
  }

  async remove(id: number) {
    const addon = await Addon.query().findOne({ id });
    if (!addon) throw new NotFoundException("Addon does not exist");

    await Addon.query().findOne({ id }).delete();
    return "Successfully Deleted";
  }
}
