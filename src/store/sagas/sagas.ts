import { put, call, takeEvery } from 'redux-saga/effects';
import { ECharactersRequestActionName } from '../actions/ECharactersRequestActionName';
import {
  FetchCharactersAction,
  requestCharacter,
  requestCharacterFailed,
  requestCharacterSuccess,
} from '../actions/actionCreators';
import { Character } from '../../types/Character';
import { apiKey, baseUrl, limit } from './constants';
import { CharacterDataWrapper } from '../../types/CharacterDataWrapper';

export function* watchFetchCharacters() {
  yield takeEvery(ECharactersRequestActionName.FetchedCharacters, fetchCharactersAsync);
}

function* fetchCharactersAsync(action: FetchCharactersAction) {
  try {
    yield put(requestCharacter());
    const characters: Character[] = yield call(() => {
      return fetch(`${baseUrl}?limit=${limit}&offset=${action.offset}&apikey=${apiKey}`)
          .then(res => res.json())
          .then((wrapper) => {
            const dataContainer = (wrapper as CharacterDataWrapper).hasOwnProperty('data') ? wrapper.data : null;
            return dataContainer
                ? dataContainer.hasOwnProperty('results') ? dataContainer.results : []
                : [];
          });
    });
    yield put(requestCharacterSuccess(characters));
  } catch (error) {
    yield put(requestCharacterFailed());
  }
}
