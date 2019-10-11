import { LoginState } from '../../types/State';

export const initialLoginState: LoginState = {
  isLoggedIn: false,
  isLoginPending: false,
  isError: false,
  error: '',
};
