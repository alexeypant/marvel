import jwt_decode from 'jwt-decode';

export class TokenService {

  private static readonly tokenName = 'jwtToken';

  public static set(token: string): void {
    localStorage.setItem(TokenService.tokenName, token);
  }

  public static remove(): void {
    localStorage.removeItem(TokenService.tokenName);
  }

  public static get(): string {
    const token = localStorage.getItem(TokenService.tokenName);
    return token ? token : '';
  }

  public static decode(token: string): string {
    return jwt_decode(token);
  }
}
