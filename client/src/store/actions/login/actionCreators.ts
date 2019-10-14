import { LoginActionName } from './LoginActionName';
import { User } from '../../../types/users/User';

export type LoginAction = {
  type: LoginActionName;
  user: string;
  error?: any;
};

export const loginRequest = (user: User) => {
  return {
    user,
    type: LoginActionName.LoginRequest,
  };
};

export const loginPending = () => {
  return {
    type: LoginActionName.LoginPending,
  };
};

export const loginReject = (error: string) => {
  return {
    error,
    type: LoginActionName.LoginReject,
  };
};

export const loginSuccess = () => {
  return {
    type: LoginActionName.LoginSuccess,
  };
};

export const loginClearState = () => {
  return {
    type: LoginActionName.LoginClearState,
  };
};
