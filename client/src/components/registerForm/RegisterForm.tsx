import React, { ChangeEvent, FormEvent } from 'react';
import { Item } from '../commons/form/Item';
import { FormInputName } from '../../enums/FormInputName';
import { Button } from '../commons/form/Button';

type RegisterFormProps = {
  title: string;
  nameValue: string;
  emailValue: string;
  passwordValue: string;
  passwordConfirmValue: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const RegisterForm = (
  {
    title,
    nameValue,
    emailValue,
    passwordValue,
    passwordConfirmValue,
    error,
    onChange,
    onSubmit,
  }: RegisterFormProps) => {

  return (
    <div className="container">
      <h2 className="header">{title}</h2>
      {error && <div>{error}</div>}
      <form onSubmit={onSubmit}>
      <Item
        type="text"
        placeholder="Name"
        name={FormInputName.Name}
        value={nameValue}
        onChange={onChange}
      />
      <Item
        type="email"
        placeholder="Email"
        name={FormInputName.Email}
        value={emailValue}
        onChange={onChange}
      />
      <Item
        type="password"
        placeholder="Password"
        name={FormInputName.Password}
        value={passwordValue}
        onChange={onChange}
      />
      <Item
        type="password"
        placeholder={FormInputName.PasswordConfirm}
        name="passwordConfirm"
        value={passwordConfirmValue}
        onChange={onChange}
      />
      <Button
        type="submit"
      >
        Register
      </Button>
      </form>
    </div>
  );
};
