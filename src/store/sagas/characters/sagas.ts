import { put, call, takeEvery } from 'redux-saga/effects';
import { Action } from '../../actions/characters/Action';
import {
  FetchCharactersAction,
  requestCharacter,
  requestCharacterFailed,
  requestCharacterSuccess,
} from '../../actions/characters/actionCreators';
import { Character } from '../../../types/Character';
import { CharactersService } from '../../../services/characters/CharactersService';

export function* watchFetchCharacters() {
  yield takeEvery(Action.FetchedCharacters, fetchCharactersAsync);
}

function* fetchCharactersAsync(action: FetchCharactersAction) {
  try {
    yield put(requestCharacter());
    const characters: Character[] = yield call(() => CharactersService.get(action.offset));
    yield put(requestCharacterSuccess(characters));
  } catch (error) {
    yield put(requestCharacterFailed());
  }
}
