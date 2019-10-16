import { AuthState } from '../../types/State';
import { emptyUser, initialAuthState } from './constants';
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
    case AuthActionName.Logout:
      return {
        ...state,
        isAuthenticated: false,
        user: emptyUser,
      };
    default:
      return state;
  }
};
