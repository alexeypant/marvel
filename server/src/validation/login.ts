import * as Validator from 'validator';
import { isEmpty } from './isEmpty';
import { DataToValidate } from './types/DataToValidate';
import { ValidationErrors } from './types/ValidationErrors';

export const validateLoginInput = (data: DataToValidate) => {
  const errors: ValidationErrors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must have 6 chars';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    error: `${errors.email ? errors.email : ''} ${errors.password ? errors.password : ''} `,
    isValid: isEmpty(errors)
  }

  // return {
  //   errors,
  //   isValid: isEmpty(errors)
  // }
};
