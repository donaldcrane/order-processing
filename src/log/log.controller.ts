import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { LogService } from "./log.service";
import { UpdateLogDto } from "./dto/update-log.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { fetchQueryDto } from "src/brand/dto/create-brand.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("logs")
@Controller("logs")
export class LogController {
  constructor(private readonly logService: LogService) {}

  @ApiOperation({ summary: "get logs" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get()
  findAll(@Query() query: fetchQueryDto) {
    return this.logService.findAll(query);
  }

  @ApiOperation({ summary: "get log" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.logService.findOne(+id);
  }

  @ApiOperation({ summary: "delete logs" })
  @ApiOkResponse({
    description: "The record has been successfully fetched.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.logService.remove(+id);
  }
}
