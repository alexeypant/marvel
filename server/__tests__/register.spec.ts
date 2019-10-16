import { validateRegisterInput } from '../src/validation/register';
import { ValidationResult } from '../src/validation/types/ValidationResult';
import {
  emptyEmailData,
  emptyNameData,
  emptyPasswordData,
  incorrectEmailData, incorrectNameData,
  invalidPasswordData
} from './mocks/userDataMocks';
import { EValidationError } from '../src/enums/EValidationError';

const emptyNameValidationResult: ValidationResult = {
  error: EValidationError.EmptyName,
  isValid: false,
};

const incorrectNameValidationResult: ValidationResult = {
  error: EValidationError.InvalidName,
  isValid: false,
};

const emptyEmailValidationResult: ValidationResult = {
  error: EValidationError.EmptyEmail,
  isValid: false,
};

const incorrectEmailValidationResult: ValidationResult = {
  error: EValidationError.InvalidEmail,
  isValid: false,
};

const emptyPasswordValidationResult: ValidationResult = {
  error: EValidationError.EmptyPassword,
  isValid: false,
};

const invalidPasswordValidationResult: ValidationResult = {
  error: EValidationError.InvalidPassword,
  isValid: false,
};

test('should get error for empty name', () => {
  expect(validateRegisterInput(emptyNameData)).toStrictEqual(emptyNameValidationResult);
});

test('should get error for incorrect name', () => {
  expect(validateRegisterInput(incorrectNameData)).toStrictEqual(incorrectNameValidationResult);
});

test('should get error for empty email', () => {
  expect(validateRegisterInput(emptyEmailData)).toStrictEqual(emptyEmailValidationResult);
});

test('should get error for incorrect email', () => {
  expect(validateRegisterInput(incorrectEmailData)).toStrictEqual(incorrectEmailValidationResult);
});

test('should get error for empty password', () => {
  expect(validateRegisterInput(emptyPasswordData)).toStrictEqual(emptyPasswordValidationResult);
});

test('should get error for invalid password', () => {
  expect(validateRegisterInput(invalidPasswordData)).toStrictEqual(invalidPasswordValidationResult);
});