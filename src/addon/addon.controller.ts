import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { AddonService } from "./addon.service";
import { CreateAddonDto } from "./dto/create-addon.dto";
import { UpdateAddonDto } from "./dto/update-addon.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("addons")
@Controller("addons")
export class AddonController {
  constructor(private readonly addonService: AddonService) {}

  @ApiOperation({ summary: "create addons" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Post()
  create(@Body() createAddonDto: CreateAddonDto) {
    return this.addonService.create(createAddonDto);
  }

  @ApiOperation({ summary: "fetch addons by id" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findByAddonId(@Param("id") id: string) {
    return this.addonService.findByAddonId(+id);
  }

  @ApiOperation({ summary: "fetch addons by meal id" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get("meals/:id")
  findOne(@Param("id") id: string) {
    return this.addonService.findOne(+id);
  }

  @ApiOperation({ summary: "update addons" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAddonDto: UpdateAddonDto) {
    return this.addonService.update(+id, updateAddonDto);
  }

  @ApiOperation({ summary: "delete addons" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.addonService.remove(+id);
  }
}
