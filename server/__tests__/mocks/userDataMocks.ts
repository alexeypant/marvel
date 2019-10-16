import { DataToValidate } from '../../src/validation/types/DataToValidate';

export const emptyNameData: DataToValidate = {
  name: '',
  email: 'asd@asd.ru',
  password: '123123',
  password_confirm: '123123',
};

export const incorrectNameData: DataToValidate = {
  name: 'q',
  email: 'asd@asd.ru',
  password: '123123',
  password_confirm: '123123',
};

export const emptyEmailData: DataToValidate = {
  name: 'alex',
  email: '',
  password: '123123',
  password_confirm: '123123',
};

export const incorrectEmailData: DataToValidate = {
  name: 'alex',
  email: 'qwe123',
  password: '123123',
  password_confirm: '123123',
};

export const emptyPasswordData: DataToValidate = {
  name: 'alex',
  email: 'qwe@qwe.ru',
  password: '',
  password_confirm: '',
};

export const invalidPasswordData: DataToValidate = {
  name: 'alex',
  email: 'qwe@qwe.ru',
  password: '123',
  password_confirm: '',
};
