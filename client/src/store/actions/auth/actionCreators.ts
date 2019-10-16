import { AuthActionName } from './AuthActionName';
import { User } from '../../../types/users/User';

export type AuthAction = {
  type: AuthActionName;
  user: User;
};

export const setCurrentUser = (user: User) => {
  return {
    user,
    type: AuthActionName.SetCurrentUser,
  };
};

export const logout = () => {
  return {
    type: AuthActionName.Logout,
  };
};
