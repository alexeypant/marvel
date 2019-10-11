import { AuthState } from '../../types/State';
import { initialAuthState } from './constants';
import { AuthActionName } from '../../actions/auth/AuthActionName';
import { isEmpty } from '../../../utils/isEmpty';
import { AuthAction } from '../../actions/auth/actionCreators';

export const authReducer = (state: AuthState = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionName.SetCurrentUser:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};
