import { RegisterData } from '../../types/users/RegisterData';
import { User } from '../../types/users/User';

export type AuthResult = {
  isError: boolean,
  error: string;
  token?: string;
};

export class AuthService {

  public static register(user: RegisterData) {
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
    .then(response => response.json())
    .then((response) => {
      return {
        isError: response.isError,
        error: response.error,
      };
    })
    .catch((err) => {
      return  {
        isError: true,
        error: err,
      };
    });
  }

  public static login(user: User) {
    return fetch('/api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(res => res)
    .catch(err => console.log(err));
  }
}
