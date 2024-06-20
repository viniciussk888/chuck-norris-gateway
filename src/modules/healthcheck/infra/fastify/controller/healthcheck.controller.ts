import {Controller, Get, HttpStatus} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {GetHealthcheckCompleteUsecase} from "../../../application/get-healthcheck-complete/get-healthcheck-complete.usecase";
import {GetHealthcheckUsecase} from "../../../application/get-healthcheck/get-healthcheck.usecase";
import {HealthcheckResponseDto} from "../dto/healthcheck-response.dto";

@ApiTags("Healthcheck")
@Controller("healthcheck")
export class HealthcheckController {
  constructor(
    private readonly getHealthcheckUsecase: GetHealthcheckUsecase,
    private readonly getHealthcheckCompleteUsecase: GetHealthcheckCompleteUsecase
  ) {}

  @ApiOperation({
    summary: "GetHealthcheck",
    description: "get healthcheck status"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The record has been successfully.",
    type: HealthcheckResponseDto
  })
  @Get()
  get(): HealthcheckResponseDto {
    return this.getHealthcheckUsecase.execute();
  }

  @ApiOperation({
    summary: "GetHealthcheckComplete",
    description: "get healthcheck complete"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The record has been successfully.",
    type: HealthcheckResponseDto
  })
  @Get("/complete")
  getComplete(): HealthcheckResponseDto {
    return this.getHealthcheckCompleteUsecase.execute();
  }
}
