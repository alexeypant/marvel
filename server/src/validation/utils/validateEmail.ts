import * as Validator from 'validator';
import { ValidationResult } from '../types/ValidationResult';
import { EValidationError } from '../../enums/EValidationError';

export const validateEmail = (email: string): ValidationResult => {
  const error = email.length === 0
    ? EValidationError.EmptyEmail
    : !Validator.isEmail(email)
      ? EValidationError.InvalidEmail
      : '';
  const isValid: boolean = error.length === 0;
  return {
    error,
    isValid,
  }
};
