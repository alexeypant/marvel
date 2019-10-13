import React, { ChangeEvent, FormEvent } from 'react';
import { Item } from '../commons/form/Item';
import { FormInputName } from '../../enums/FormInputName';
import { Button } from '../commons/form/Button';
import './Form.css';
import { Link } from 'react-router-dom';

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
  <form className="form" onSubmit={onSubmit}>
    <h2 className="header">Sign-in / <Link to={"/register"}>Sign-up</Link></h2>
      {error && <div className="error">{error}</div>}
      <Item
        label="Email"
        type="email"
        placeholder=""
        name={FormInputName.Email}
        value={emailValue}
        onChange={onChange}
      />
      <Item
        label="Password"
        type="password"
        placeholder=""
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
  );
};
