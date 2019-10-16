import * as Validator from 'validator';
import { ValidationResult } from '../types/ValidationResult';
import { EValidationError } from '../../enums/EValidationError';

export const validateName = (name: string): ValidationResult => {

  const error: string = name.length === 0
    ? EValidationError.EmptyName
    : !Validator.isLength(name, { min: 2, max: 30 })
      ? EValidationError.InvalidName
      : '';

  const isValid: boolean = error.length === 0;

  return {
    error,
    isValid,
  }
};
