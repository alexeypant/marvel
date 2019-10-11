import { debounce, takeEvery, throttle } from '@redux-saga/core/effects';
import { LoginActionName } from '../actions/login/LoginActionName';
import { CharactersAction } from '../actions/characters/CharactersAction';
import { fetchCharactersAsync, throttleFetch } from './characters/charactersSagas';
import { loginAsync } from './login/loginSagas';
import { RegisterActionName } from '../actions/register/RegisterActionName';
import { registerAsync } from './register/registerSagas';

export function* rootSaga() {
  yield takeEvery(RegisterActionName.RegisterRequest, registerAsync);
  yield takeEvery(LoginActionName.LoginRequest, loginAsync);
  yield takeEvery(CharactersAction.Fetch, fetchCharactersAsync);
  yield debounce(500, CharactersAction.FetchNameStartsWith, throttleFetch);
  yield throttle(1000, CharactersAction.DebouncedFetch, fetchCharactersAsync);
}
