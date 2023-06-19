import { APItrivia } from "../shared/api";

export const TriviaService = {
  getRandomTrivia: async (count = 30) => {
    const data = await APItrivia.get(`/api/random?count=${count}`);
    return data;
  },
  getTriviaCategories: async (count = 10) => {
    const data = await APItrivia.get(`/api/categories?count=${count}`);
    return data;
  },
  getTriviaWithCategory: async (category) => {
    const data = await APItrivia.get(`api/category?id=${category}`);
    return data;
  },
};
