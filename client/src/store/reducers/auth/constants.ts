import { AuthState } from '../../types/State';
import { User } from '../../../types/users/User';

export const emptyUser: User = {
  email: '',
  password: '',
  name: '',
};

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: emptyUser,
};
