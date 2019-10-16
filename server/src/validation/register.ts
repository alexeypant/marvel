import { DataToValidate } from './types/DataToValidate';
import { validateEmail } from './utils/validateEmail';
import { validatePassword } from './utils/validatePassword';
import { ValidationResult } from './types/ValidationResult';
import { validateName } from './utils/validateName';

export const validateRegisterInput = (data: DataToValidate): ValidationResult => {
  const { isValid: isValidName, error: errorName } = validateName(data.name);
  const { isValid: isValidEmail, error: errorEmail } = validateEmail(data.email);
  const { isValid: isValidPassword, error: errorPassword }  = validatePassword(data.password);
  return {
    error: `${errorName}${errorEmail}${errorPassword}`,
    isValid: isValidName && isValidEmail && isValidPassword,
  }
};
