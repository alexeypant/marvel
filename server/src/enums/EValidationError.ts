export enum EValidationError {
  EmptyName = 'Name is required',
  InvalidName = 'Name must be between 2 to 30 chars',
  EmptyEmail = 'Email is required',
  InvalidEmail = 'Email is invalid',
  EmptyPassword = 'Password is required',
  InvalidPassword = 'Password must have at least 6 chars',
}