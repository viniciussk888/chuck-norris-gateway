import {Controller, Get, HttpStatus, Logger, Query} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ChuckNorrisService} from "../services/chuck-noris.service";
import {JokeDTO} from "../../domain/dto/joke.dto";

@ApiTags("Chuck Norris")
@Controller("chuck-norris")
export class ChuckNorrisController {
  private readonly logger = new Logger(ChuckNorrisController.name);
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @ApiOperation({
    summary: "Obtenha uma piada aleatória",
    description: "Obtenha uma piada aleatória da API Chuck Norris"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: JokeDTO
  })
  @Get("random")
  async getRandomJoke() {
    this.logger.log("/chuck-norris/random");
    return this.chuckNorrisService.getRandomJoke();
  }

  @ApiOperation({
    summary: "Obtenha piadas aleatórias por categoria",
    description: "Obtenha uma piada aleatória da API Chuck Norris por categoria"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: JokeDTO
  })
  @Get("random-category")
  async getRandomJokeByCategory(@Query("category") category: string) {
    this.logger.log(`/chuck-norris/random-category ${category}`);
    return this.chuckNorrisService.getRandomJokeByCategory(category);
  }

  @ApiOperation({
    summary: "Busca categorias",
    description: "Busca categorias da API Chuck Norris"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: [String]
  })
  @Get("categories")
  async getCategories() {
    this.logger.log("/chuck-norris/categories");
    return this.chuckNorrisService.getCategories();
  }

  @ApiOperation({
    summary: "Busca piadas pelo texto",
    description: "Busca piadas da API Chuck Norris pelo texto"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: [JokeDTO]
  })
  @Get("search")
  async searchJokes(@Query("query") query: string) {
    this.logger.log(`/chuck-norris/search ${query}`);
    return this.chuckNorrisService.searchJokes(query);
  }
}
