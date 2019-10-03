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

export function* rootSaga() {
  yield takeEvery(CharactersAction.Fetch, fetchCharactersAsync);
  yield debounce(500, CharactersAction.FetchNameStartsWith, throttleFetch);
  yield throttle(1000, CharactersAction.DebouncedFetch, fetchCharactersAsync);
}

function* throttleFetch(action: FetchCharactersAction) {
  yield put(debouncedFetch(action));
}

function* fetchCharactersAsync(action: FetchCharactersAction) {
  console.log('from fetch async');
  try {
    yield put(requestCharacter());
    const characters: Character[] = yield call(() => CharactersService.get(action.offset, action.nameStartsWith));
    yield put(requestCharacterSuccess(characters));
  } catch (error) {
    yield put(requestCharacterFailed());
  }
}
