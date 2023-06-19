import { createSlice } from "@reduxjs/toolkit";
const middlewareActions = {
  performGetRandomJoke: () => {},
  performGetRandomTrivia: () => {},
  performGetTriviaCategory: () => {},
  performGetTriviaWithCategory: () => {},
  performGetCategory: () => {},
};

const jokesSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: [],
    categories: [],
    trivia: [],
    triviaCategories: [],
  },
  reducers: {
    setRandomJoke: (state, action) => {
      state.jokes = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setRandomTrivia: (state, action) => {
      state.trivia = action.payload;
    },
    setTriviaCategories: (state, action) => {
      state.triviaCategories = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  setRandomJoke,
  performGetTriviaCategory,
  setTriviaCategories,
  setCategories,
  performGetCategory,
  performGetRandomJoke,
  performGetRandomJokeCategory,
  performGetRandomTrivia,
  performGetTriviaWithCategory,
  setRandomTrivia,
} = jokesSlice.actions;

export default jokesSlice.reducer;
