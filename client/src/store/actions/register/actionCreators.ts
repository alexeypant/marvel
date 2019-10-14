import { RegisterActionName } from './RegisterActionName';
import { RegisterData } from '../../../types/users/RegisterData';

export type RegisterAction = {
  type: RegisterActionName;
  user: RegisterData;
  error?: any;
};

export const registerRequest = (user: RegisterData) => {
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

export const registerReject = (error: string) => {
  return {
    error,
    type: RegisterActionName.RegisterReject,
  };
};

export const registerSuccess = () => {
  return {
    type: RegisterActionName.RegisterSuccess,
  };
};

export const registerClearState = () => {
  return {
    type: RegisterActionName.RegisterClearState,
  };
};
