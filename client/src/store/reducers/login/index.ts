import { LoginState } from '../../types/State';
import { initialLoginState } from './constants';
import { LoginAction } from '../../actions/login/actionCreators';
import { LoginActionName } from '../../actions/login/LoginActionName';

export const loginReducer = (state: LoginState = initialLoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case LoginActionName.LoginPending:
      return {
        ...state,
        isLoggedIn: false,
        isLoginPending: true,
        isError: false,
        error: '',
      };
    case LoginActionName.LoginSuccess:
      return {
        isLoggedIn: true,
        isLoginPending: false,
        isError: false,
        error: '',
      };
    case LoginActionName.LoginReject:
      return {
        isLoggedIn: false,
        isLoginPending: false,
        isError: true,
        error: action.error,
      };
    default:
      return state;
  }
};
