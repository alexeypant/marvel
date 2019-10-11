import { RegisterState } from '../../types/State';

export const initialRegisterState: RegisterState = {
  isRegistered: false,
  isRegisterPending: false,
  isError: false,
  error: '',
};
