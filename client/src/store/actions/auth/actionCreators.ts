import { AuthActionName } from './AuthActionName';

export type AuthAction = {
  type: AuthActionName;
  user: any; // todo auth user type
};

export const setCurrentUser = (user: any) => {
  return {
    user,
    type: AuthActionName.SetCurrentUser,
  };
};
