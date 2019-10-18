import { RegisterData } from '../../types/users/RegisterData';
import { User } from '../../types/users/User';

export type AuthResult = {
  isError: boolean,
  error: string;
  token?: string;
};

export class AuthService {

  public static register(user: RegisterData): Promise<AuthResult> {
    return fetch('/api/users/register', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then<any>(response => response.json())
    .then<AuthResult>((response) => {
      return {
        isError: response.isError,
        error: response.error,
      };
    })
    .catch<AuthResult>((err) => {
      return  {
        isError: true,
        error: err,
      };
    });
  }

  public static login(user: User): Promise<AuthResult> {
    return fetch('/api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then<AuthResult>(res => res)
    .catch<AuthResult>((err) => {
      return  {
        isError: true,
        error: err,
      };
    });
  }
}
