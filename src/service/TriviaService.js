import { APItrivia } from "../shared/api";

export const TriviaService = {
  getRandomTrivia: async ({offset, value}) => {
    const data = await APItrivia.get(`api/clues?offset=${offset}&value=${value}`);
    console.log(data);
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
