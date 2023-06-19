import { put, takeLatest, call } from "redux-saga/effects";
import {
  performGetRandomJoke,
  performGetCategory,
  performGetRandomTrivia,
  performGetTriviaCategory,
  performGetTriviaWithCategory,
  setCategories,
  setRandomTrivia,
  setTriviaCategories,
} from "./slice";
import { ChuckService } from "../../service/ChuckService";
import { TriviaService } from "../../service/TriviaService";

import { setRandomJoke } from "./slice";
function* jokesHandler(category) {
  try {
    const { data } = yield call(ChuckService.getRandomJoke, category.payload);
    
    yield put(setRandomJoke(data));
  } catch (error) {
    console.log(error);
  }
}

function* getCategoryHandler() {
  try {
    const { data } = yield call(ChuckService.getAllCategories);
    yield put(setCategories(data));
  } catch (error) {
    console.log(error);
  }
}
function* getTriviaQuestionsHandler({payload}) {
  try {
    const { data } = yield call(TriviaService.getRandomTrivia, payload);
    let newData = [];
    for(let i = 0; i<10; i++){
      newData.push(data[i])
    }
   
    
    yield put(setRandomTrivia(newData));
  } catch (error) {
    console.log(error);
  }
}
function* getTriviaQuestionsHandlerCategory(category) {
  try {
    const { data } = yield call(
      TriviaService.getTriviaWithCategory,
      category.payload
    );
    console.log(data)
    let newData = [];
    for(let i = 0; i<10; i++){
      newData.push(data.clues[i])
    }
    console.log(newData);

    yield put(setRandomTrivia(newData));
  } catch (error) {
    console.log(error);
  }
}
function* getTriviaCategoriesHandler() {
  try {
    const { data } = yield call(TriviaService.getTriviaCategories);

    yield put(setTriviaCategories(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchJokes() {
  yield takeLatest(performGetRandomJoke.type, jokesHandler);
  yield takeLatest(performGetTriviaCategory.type, getTriviaCategoriesHandler);
  yield takeLatest(performGetRandomTrivia.type, getTriviaQuestionsHandler);
  yield takeLatest(performGetCategory.type, getCategoryHandler);
  yield takeLatest(
    performGetTriviaWithCategory.type,
    getTriviaQuestionsHandlerCategory
  );
}
