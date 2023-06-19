import { API } from "../shared/api";

export const ChuckService = {
  getRandomJoke: async (category) => {
    console.log(category);
    if (!category) {
      const data = await API.get("jokes/random");

      return data;
    } else {
      const data = await API.get(`jokes/random?category=${category}`);
      //console.log(data);
      return data;
    }
  },
  getRandomJokeCategory: async (category) => {
    const data = await API.get(`jokes/random?category=${category}`);
    return data;
  },
  getAllCategories: async () => {
    const data = await API.get("jokes/categories");
    return data;
  },
};
