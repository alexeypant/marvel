import { RegisterData } from '../../types/users/RegisterData';
import { User } from '../../types/users/User';
import { HTTPService } from '../http/HTTPService';

export type AuthResult = {
  isError: boolean,
  error: string;
  token?: string;
};

type ServerResponse = {
  isError: boolean;
  error: string;
  token?: string;
};

export class AuthService {
  private static readonly registerUrl = '/api/users/register';
  private static readonly loginUrl = '/api/users/login';

  public static register(user: RegisterData): Promise<AuthResult> {
    return HTTPService.post(AuthService.registerUrl, user)
    .then<any>(response => response.json())
    .then<AuthResult>(AuthService.handleResponse)
    .catch<AuthResult>(AuthService.handleError);
  }

  public static login(user: User): Promise<AuthResult> {
    return HTTPService.post(AuthService.loginUrl, user)
    .then(response => response.json())
    .then<AuthResult>(AuthService.handleResponse)
    .catch<AuthResult>(AuthService.handleError);
  }

  private static handleResponse(response: ServerResponse): AuthResult {
    return {
      isError: response.isError,
      error: response.error,
      token: response.token ? response.token : '',
    };
  }

  private static handleError(error: string): AuthResult {
    return {
      error,
      isError: true,
    };
  }
}
