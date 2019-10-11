import { User } from '../../types/users/User';

export type AuthResult = {
  isError: boolean,
  error: string;
  token?: string;
};

export class AuthService {
  // private static readonly baseUrl = '';

  public static register(user: User, history?: any) {
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
    // .then(res => history.push('/login'))
    .then((res) => {
      if (res.status === 500) {
        return {
          isError: true,
          error: 'some trouble with register user data',
        };
      }
      return {
        isError: false,
        error: '',
      };
      // console.log('res: ' + res);
      // console.log('need to change history');
    })
    .catch((err) => {
      return  {
        isError: true,
        error: err,
      };
    });
  }

  public static login(user: string) {
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
