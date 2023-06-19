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
    searchTrivia: "",
    offsetTrivia: 0
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
    setSearchTrivia: (state,action)=>{
      state.searchTrivia = action.payload;
    },
    setOffsetTrivia : (state, action) =>{
  
        state.offsetTrivia += action.payload;
    
      
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
  setSearchTrivia,
  setOffsetTrivia
} = jokesSlice.actions;

export default jokesSlice.reducer;
