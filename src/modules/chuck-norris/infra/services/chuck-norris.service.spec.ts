import {Test, TestingModule} from "@nestjs/testing";
import {ChuckNorrisService} from "./chuck-noris.service";
import axios from "axios";
import {Logger} from "@nestjs/common";
import {JokeModel, SearchJokeModel} from "../../domain/models/joke.model";

jest.mock("axios");

describe("ChuckNorrisService", () => {
  let service: ChuckNorrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChuckNorrisService,
        {
          provide: Logger,
          useValue: {
            log: jest.fn()
          }
        }
      ]
    }).compile();

    service = module.get<ChuckNorrisService>(ChuckNorrisService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getRandomJoke", () => {
    it("should return a random joke", async () => {
      const joke: JokeModel = {
        id: "123",
        value: "Chuck Norris joke",
        categories: [],
        created_at: "",
        icon_url: "",
        updated_at: "",
        url: ""
      };
      (axios.get as jest.Mock).mockResolvedValue({data: joke});

      const result = await service.getRandomJoke();
      expect(result).toEqual(joke);
    });
  });

  describe("getRandomJokeByCategory", () => {
    it("should return a random joke by category", async () => {
      const category = "dev";
      const joke: JokeModel = {
        id: "123",
        value: "Chuck Norris joke",
        categories: [],
        created_at: "",
        icon_url: "",
        updated_at: "",
        url: ""
      };
      (axios.get as jest.Mock).mockResolvedValue({data: joke});

      const result = await service.getRandomJokeByCategory(category);
      expect(result).toEqual(joke);
    });
  });

  describe("getCategories", () => {
    it("should return categories", async () => {
      const categories = ["dev", "animal"];
      (axios.get as jest.Mock).mockResolvedValue({data: categories});

      const result = await service.getCategories();
      expect(result).toEqual(categories);
    });
  });

  describe("searchJokes", () => {
    it("should return search results", async () => {
      const query = "Chuck";
      const searchResults: SearchJokeModel = {
        total: 1,
        result: [
          {
            id: "123",
            value: "Chuck Norris joke",
            categories: [],
            created_at: "",
            icon_url: "",
            updated_at: "",
            url: ""
          }
        ]
      };
      (axios.get as jest.Mock).mockResolvedValue({data: searchResults});

      const result = await service.searchJokes(query);
      expect(result).toEqual(searchResults);
    });
  });
});
