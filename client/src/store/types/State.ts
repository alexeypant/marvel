import { Character } from '../../types/characters/Character';
import { User } from '../../types/users/User';

export type CharactersState = {
  characters: Character[];
  loading: boolean;
  error: boolean;
};

export type LoginState = {
  isLoggedIn: boolean;
  isLoginPending: boolean;
  isError: boolean;
  error: string;
};

export type RegisterState = {
  isRegistered: boolean;
  isRegisterPending: boolean;
  isError: boolean;
  error: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User;
};

export type State = {
  characters: CharactersState;
  login: LoginState;
  register: RegisterState;
  auth: AuthState;
};
