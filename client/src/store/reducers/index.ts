import { combineReducers } from 'redux';
import { charactersRequestReducer } from './characters';
import { loginReducer } from './login';
import { registerReducer } from './register';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  characters: charactersRequestReducer,
  login: loginReducer,
  register: registerReducer,
  auth: authReducer,
});
