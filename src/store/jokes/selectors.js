export const selectJokes = (state) => {
  return state.jokes;
};
export const selectCategories = (state) => state.jokes.categories;
export const selectTrivia = (state) => {
  return state.jokes.trivia;
};
export const selectTriviaCategories = (state) => state.jokes.triviaCategories;
export const selectOffset = (state) => state.jokes.offsetTrivia;
export const selectSearchValue = (state) => state.jokes.searchTrivia;
