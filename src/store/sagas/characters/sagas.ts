import { put, call, takeEvery, throttle, debounce } from 'redux-saga/effects';
import { CharactersAction } from '../../actions/characters/CharactersAction';
import {
  debouncedFetch,
  FetchCharactersAction,
  requestCharacter,
  requestCharacterFailed,
  requestCharacterSuccess,
} from '../../actions/characters/actionCreators';
import { Character } from '../../../types/Character';
import { CharactersService } from '../../../services/characters/CharactersService';
import { BackoffService } from '../../../services/backoff/BackoffService';

export function* rootSaga() {
  yield takeEvery(CharactersAction.Fetch, fetchCharactersAsync);
  yield debounce(500, CharactersAction.FetchNameStartsWith, throttleFetch);
  yield throttle(1000, CharactersAction.DebouncedFetch, fetchCharactersAsync);
}

function* throttleFetch(action: FetchCharactersAction) {
  yield put(debouncedFetch(action));
}

function* fetchCharactersAsync(action: FetchCharactersAction) {
  CharactersService.isFetching() && CharactersService.abort();
  try {
    yield put(requestCharacter());
    // const characters: Character[] = yield call(() => CharactersService.get(action.offset, action.nameStartsWith));
    const characters: Character[] = yield call(() => BackoffService.try(
      CharactersService.get(action.offset, action.nameStartsWith),
      CharactersService.handleJson,
      CharactersService.handleResponse,
      CharactersService.handleError,
      CharactersService.handleFinally,
      ));
    yield put(requestCharacterSuccess(characters));
  } catch (error) {
    yield put(requestCharacterFailed());
  }
}
