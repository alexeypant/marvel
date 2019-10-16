import { validateLoginInput } from '../src/validation/login';
import { EValidationError } from '../src/enums/EValidationError';
import { emptyEmailData, emptyPasswordData, incorrectEmailData, invalidPasswordData } from './mocks/userDataMocks';

const emptyEmailValidationResult = {
  error: EValidationError.EmptyEmail,
  isValid: false,
};

const incorrectEmailValidationResult = {
  error: EValidationError.InvalidEmail,
  isValid: false,
};

const emptyPasswordValidationResult = {
  error: EValidationError.EmptyPassword,
  isValid: false,
};

const invalidPasswordValidationResult = {
  error: EValidationError.InvalidPassword,
  isValid: false,
};

test('should get error for empty email', () => {
  expect(validateLoginInput(emptyEmailData)).toStrictEqual(emptyEmailValidationResult);
});

test('should get error for incorrect email', () => {
  expect(validateLoginInput(incorrectEmailData)).toStrictEqual(incorrectEmailValidationResult);
});

test('should get error for empty password', () => {
  expect(validateLoginInput(emptyPasswordData)).toStrictEqual(emptyPasswordValidationResult);
});

test('should get error for invalid password', () => {
  expect(validateLoginInput(invalidPasswordData)).toStrictEqual(invalidPasswordValidationResult);
});