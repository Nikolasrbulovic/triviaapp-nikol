import {put, takeLatest,call } from'redux-saga/effects';
import {performGetRandomJoke} from './slice';
import { ChuckService } from '../../shared/api';

import { setRandomJoke } from './slice';
function* jokesHandler() {
  try {
   
   const {data} = yield call(ChuckService.getRandomJoke);
   yield put(setRandomJoke(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchJokes() {
  yield takeLatest(
    performGetRandomJoke.type,
    jokesHandler
  );
}