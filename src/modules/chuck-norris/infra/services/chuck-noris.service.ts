import {Injectable} from "@nestjs/common";
import axios, {AxiosResponse} from "axios";
import {JokeModel, SearchJokeModel} from "../../domain/models/joke.model";

@Injectable()
export class ChuckNorrisService {
  private readonly apiUrl = process.env.CHUCK_NORRIS_API_URL;

  constructor() {}

  async getRandomJoke(): Promise<AxiosResponse<JokeModel>> {
    const response = await axios.get(`${this.apiUrl}/random`);
    return response.data;
  }

  async getRandomJokeByCategory(
    category: string
  ): Promise<AxiosResponse<JokeModel>> {
    const response = await axios.get(`${this.apiUrl}/random`, {
      params: {category}
    });
    return response.data;
  }

  async getCategories(): Promise<AxiosResponse<string[]>> {
    const response = await axios.get(`${this.apiUrl}/categories`);
    return response.data;
  }

  async searchJokes(query: string): Promise<AxiosResponse<SearchJokeModel>> {
    const response = await axios.get(`${this.apiUrl}/search`, {
      params: {query}
    });
    return response.data;
  }
}
