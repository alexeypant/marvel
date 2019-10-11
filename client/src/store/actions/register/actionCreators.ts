import { RegisterActionName } from './RegisterActionName';
import { User } from '../../../types/users/User';

export type RegisterAction = {
  type: RegisterActionName;
  user: User;
  error?: any;
};

export const registerRequest = (user: User) => {
  return {
    user,
    type: RegisterActionName.RegisterRequest,
  };
};

export const registerPending = () => {
  return {
    type: RegisterActionName.RegisterPending,
  };
};

export const registerSuccess = () => {
  return {
    type: RegisterActionName.RegisterSuccess,
  };
};

export const registerReject = (error: string) => {
  return {
    error,
    type: RegisterActionName.RegisterReject,
  };
};
