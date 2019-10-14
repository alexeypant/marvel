import { put } from '@redux-saga/core/effects';
import { AuthService, AuthResult } from '../../../services/auth/AuthService';
import {
  RegisterAction,
  registerPending,
  registerReject,
  registerSuccess,
} from '../../actions/register/actionCreators';

export function* registerAsync(action: RegisterAction) {
  try {
    yield put(registerPending());
    const registerResult: AuthResult = yield AuthService.register(action.user);
    if (registerResult.isError) {
      yield put(registerReject(registerResult.error));
    } else {
      yield put(registerSuccess());
    }
  } catch (error) {
    yield put(registerReject(error));
  }
}
