import * as Validator from 'validator';
import { ValidationResult } from '../types/ValidationResult';
import { EValidationError } from '../../enums/EValidationError';

export const validatePassword = (password: string): ValidationResult => {
  const error = password.length === 0
    ? EValidationError.EmptyPassword
    : !Validator.isLength(password, {min: 6, max: 30})
      ? EValidationError.InvalidPassword
      : '';

  const isValid: boolean = error.length === 0;
  return {
    error,
    isValid,
  }
};
