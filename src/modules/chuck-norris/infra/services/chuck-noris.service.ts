import {Injectable, Logger} from "@nestjs/common";
import axios, {AxiosResponse} from "axios";
import {JokeModel, SearchJokeModel} from "../../domain/models/joke.model";

@Injectable()
export class ChuckNorrisService {
  private readonly logger = new Logger(ChuckNorrisService.name);
  private readonly apiUrl = process.env.CHUCK_NORRIS_API_URL;

  constructor() {}

  async getRandomJoke(): Promise<AxiosResponse<JokeModel>> {
    const response = await axios.get(`${this.apiUrl}/random`);
    this.logger.log(`[OUTPUT] ${JSON.stringify(response.data)}`);
    return response.data;
  }

  async getRandomJokeByCategory(
    category: string
  ): Promise<AxiosResponse<JokeModel>> {
    this.logger.log(`[INPUT] ${category}`);
    const response = await axios.get(`${this.apiUrl}/random`, {
      params: {category}
    });
    this.logger.log(`[OUTPUT] ${JSON.stringify(response.data)}`);
    return response.data;
  }

  async getCategories(): Promise<AxiosResponse<string[]>> {
    const response = await axios.get(`${this.apiUrl}/categories`);
    this.logger.log(`[OUTPUT] ${JSON.stringify(response.data)}`);
    return response.data;
  }

  async searchJokes(query: string): Promise<AxiosResponse<SearchJokeModel>> {
    this.logger.log(`[INPUT] ${query}`);
    const response = await axios.get(`${this.apiUrl}/search`, {
      params: {query}
    });
    this.logger.log(`[OUTPUT] ${JSON.stringify(response.data)}`);
    return response.data;
  }
}
