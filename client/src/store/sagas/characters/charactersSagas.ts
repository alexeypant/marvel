import { put, call } from 'redux-saga/effects';
import {
  debouncedFetch,
  FetchCharactersAction,
  requestCharacter,
  requestCharacterFailed,
  requestCharacterSuccess,
} from '../../actions/characters/actionCreators';
import { CharactersService } from '../../../services/characters/CharactersService';
import { BackoffFactory } from '../../../services/backoff/BackoffFactory';
import { Character } from '../../../types/characters/Character';

export function* throttleFetch(action: FetchCharactersAction) {
  yield put(debouncedFetch(action));
}

export function* fetchCharactersAsync(action: FetchCharactersAction) {
  CharactersService.isFetching() && CharactersService.abort();
  try {
    yield put(requestCharacter());
    const backoff = new BackoffFactory(
      CharactersService.request(action.offset, action.nameStartsWith),
      [
        CharactersService.parseJson,
        CharactersService.unwrapCharacters,
      ],
      CharactersService.handleError,
      CharactersService.handleFinally,
    );
    const characters: Character[] = yield call(() => backoff.try(5));
    yield put(requestCharacterSuccess(characters));
  } catch (error) {
    yield put(requestCharacterFailed());
  }
}
