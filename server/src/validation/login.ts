import { DataToValidate } from './types/DataToValidate';
import { validateEmail } from './utils/validateEmail';
import { validatePassword } from './utils/validatePassword';
import { ValidationResult } from './types/ValidationResult';

export const validateLoginInput = (data: DataToValidate): ValidationResult => {
  const { isValid: isValidEmail, error: errorEmail } = validateEmail(data.email);
  const { isValid: isValidPassword, error: errorPassword }  = validatePassword(data.password);
  return {
    error: `${errorEmail}${errorPassword}`,
    isValid: isValidEmail && isValidPassword,
  }
};
