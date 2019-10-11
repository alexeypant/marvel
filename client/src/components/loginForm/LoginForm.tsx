import React, { ChangeEvent, FormEvent } from 'react';
import { Item } from '../commons/form/Item';
import { FormInputName } from '../../enums/FormInputName';
import { Button } from '../commons/form/Button';

type LoginFormProps = {
  title: string;
  emailValue: string;
  passwordValue: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = (
  {
    title,
    emailValue,
    passwordValue,
    error,
    onChange,
    onSubmit,
  }: LoginFormProps) => {

  return (
    <div className="container">
      <h2 className="header">{title}</h2>
      {error && <div>{error}</div>}
      <form onSubmit={onSubmit}>
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
      <Button
        type="submit"
      >
        Login
      </Button>
      </form>
    </div>
  );
};
