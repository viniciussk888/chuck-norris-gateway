import {Controller, Get, HttpStatus, Query} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ChuckNorrisService} from "../services/chuck-noris.service";
import {JokeDTO} from "../../domain/dto/joke.dto";

@ApiTags("Chuck Norris")
@Controller("chuck-norris")
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @ApiOperation({
    summary: "Get random joke",
    description: "Get a random joke from Chuck Norris API"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: JokeDTO
  })
  @Get("random")
  async getRandomJoke() {
    return this.chuckNorrisService.getRandomJoke();
  }

  @ApiOperation({
    summary: "Get random joke by category",
    description: "Get a random joke from Chuck Norris API by category"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: JokeDTO
  })
  @Get("random-category")
  async getRandomJokeByCategory(@Query("category") category: string) {
    return this.chuckNorrisService.getRandomJokeByCategory(category);
  }

  @ApiOperation({
    summary: "Get categories",
    description: "Get all categories from Chuck Norris API"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: [String]
  })
  @Get("categories")
  async getCategories() {
    return this.chuckNorrisService.getCategories();
  }

  @ApiOperation({
    summary: "Search jokes",
    description: "Search jokes from Chuck Norris API by query"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully received",
    type: [JokeDTO]
  })
  @Get("search")
  async searchJokes(@Query("query") query: string) {
    return this.chuckNorrisService.searchJokes(query);
  }
}
