import {
  LoginAction,
  loginSuccess,
  loginPending,
  loginReject,
} from '../../actions/login/actionCreators';
import { put } from '@redux-saga/core/effects';
import { AuthResult, AuthService } from '../../../services/auth/AuthService';
import { TokenService } from '../../../services/token/TokenService';
import { setCurrentUser } from '../../actions/auth/actionCreators';

export function* loginAsync(action: LoginAction) {
  try {
    yield put(loginPending());
    const loginResult: AuthResult = yield AuthService.login(action.user);
    if (loginResult.isError) {
      yield put(loginReject(loginResult.error));
    } else {
      yield TokenService.set(loginResult.token || '');
      const decoded = yield TokenService.decode(loginResult.token || '');
      yield put(setCurrentUser(decoded));
      yield put(loginSuccess());
    }
  } catch (error) {
    yield put(loginReject(error));
  }
}
